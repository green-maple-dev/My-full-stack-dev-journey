const CACHE_NAME = 'All in 1 JLC Cache v1';
// Add all your image filenames to this list
const ASSETS = [
  '/',
  '/index.html',
  '/images/JP_flag.png',
  '/images/aoi.png',
];

// Install: Saves files to the phone
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch: Loads files from the phone if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
