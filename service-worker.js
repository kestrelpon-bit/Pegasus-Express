/* Pegasus Express Calculator offline/update worker — V1.3.6 */
"use strict";
const CACHE_NAME = "pegasus-express-v1.3.6";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./airports-timezones.json",
  "./app-icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];
const inScope = (url) => {
  const target = new URL(url, self.registration.scope);
  const scope = new URL(self.registration.scope);
  return target.origin === scope.origin && target.href.startsWith(scope.href);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((key) => key.startsWith("pegasus-express-") && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (!inScope(url.href)) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(new URL("./index.html", self.registration.scope).href, response.clone());
        }
        return response;
      } catch (_) {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match(new URL("./index.html", self.registration.scope).href))
          || (await cache.match(request));
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response && response.ok && response.type === "basic") {
      await cache.put(request, response.clone());
    }
    return response;
  })());
});
