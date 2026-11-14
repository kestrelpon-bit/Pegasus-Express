/* Pegasus Express Calculator offline/update worker — V1.3.15 */
"use strict";

const CACHE_NAME = "pegasus-express-v1.3.15";
const APP_FILES = [
  "index.html",
  "airports-timezones.json",
  "manifest.webmanifest",
  "app-icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png"
];

const appUrl = file => new URL(file, self.registration.scope).toString();

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES.map(appUrl)))
  );
  // Do not skipWaiting here: the app prompts the user before applying updates.
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(key => key.startsWith("pegasus-express-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const scopeUrl = new URL(self.registration.scope);
  if (url.origin !== scopeUrl.origin || !url.href.startsWith(scopeUrl.href)) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(appUrl("index.html"), response.clone());
        }
        return response;
      } catch (_) {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match(appUrl("index.html"))) ||
               (await cache.match(request));
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;

    try {
      const response = await fetch(request);
      if (response && response.ok && response.type === "basic") {
        cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      throw error;
    }
  })());
});
