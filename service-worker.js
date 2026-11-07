/* Pegasus Express Calculator — offline application shell, V4 */
const CACHE_PREFIX = "pegasus-express-";
const CACHE_NAME = "pegasus-express-app-shell-v6";

const APP_SHELL_PATHS = [
  "./index.html",
  "./manifest.webmanifest",
  "./app-icon-192.png",
  "./app-icon-512.png",
  "./airports-timezones.json"
];

function appURL(path) {
  return new URL(path, self.registration.scope).href;
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Precache the canonical files individually. Do not cache "/" because
    // Cloudflare may redirect the root URL and navigation requests use manual redirect mode.
    for (const path of APP_SHELL_PATHS) {
      const url = appURL(path);
      const request = new Request(url, {
        method: "GET",
        cache: "reload",
        redirect: "follow"
      });
      const response = await fetch(request);

      if (!response || !response.ok || response.type === "opaqueredirect") {
        throw new Error(
          `Pegasus Express precache failed: ${url} returned ${response ? response.status : "no response"}`
        );
      }

      await cache.put(url, response);
    }

    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const requestURL = new URL(request.url);
  if (requestURL.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const canonicalAppURL = appURL("./index.html");

      // Always serve the canonical cached application for root and other navigations.
      const cachedApp = await cache.match(canonicalAppURL);
      if (cachedApp) return cachedApp;

      // Recovery path: explicitly request the canonical index with redirect:"follow".
      // Never fetch(event.request) for a navigation request: its redirect mode may be "manual",
      // and returning an opaqueredirect response causes Chrome's FetchEvent network error.
      try {
        const response = await fetch(new Request(canonicalAppURL, {
          method: "GET",
          redirect: "follow",
          cache: "no-store"
        }));

        if (response && response.ok && response.type !== "opaqueredirect") {
          await cache.put(canonicalAppURL, response.clone());
          return response;
        }
      } catch (error) {
        console.error("Pegasus Express navigation recovery failed:", error);
      }

      return new Response(
        "<!doctype html><html><head><meta name='viewport' content='width=device-width,initial-scale=1'><title>Pegasus Express</title></head><body><h1>Pegasus Express is not cached yet</h1><p>Connect to the internet, open the app, and allow the offline files to install before using it offline.</p></body></html>",
        {
          status: 503,
          headers: { "Content-Type": "text/html; charset=utf-8" }
        }
      );
    })());
    return;
  }

  // Cache-first for same-origin resources. This also makes the app icons and manifest
  // available offline after the installation precache has completed.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;

    try {
      // Non-navigation subresource requests can be fetched normally; follow redirects.
      const networkRequest = new Request(request, { redirect: "follow" });
      const response = await fetch(networkRequest);
      if (response && response.ok && response.type !== "opaqueredirect") {
        await cache.put(request, response.clone());
      }
      return response;
    } catch (_) {
      return new Response("Pegasus Express: this resource is not available offline.", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
  })());
});
