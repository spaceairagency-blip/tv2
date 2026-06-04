const CACHE_NAME = 'v1_cache';
const ASSETS = ['/', '/index.html'];

// 1. Install Event (Caching core files)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 2. Fetch Event (Intercept and serve from cache if offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
