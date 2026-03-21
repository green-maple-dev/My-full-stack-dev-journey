const CACHE_NAME = 'jlc-v21-03-2026-7-13-PM-complete'; // Simple name, no spaces
const ASSETS = [
  '',
  'index.html',
  'JP_flag.png',
  '青-stroke.mp4',
  '青.webp',
  '青-pronunciation.png',
  '青.mp3',
  '青-sentence.mp3',
  'あ.mp4',
  'い.mp4',
  'う.mp4',
  'え.mp4',
  'お.mp4',
  'か.mp4',
  'き.mp4',
  'く.mp4',
  'け.mp4',
  'こ.mp4',
  'さ.mp4',
  'し.mp4',
  'す.mp4',
  'せ.mp4',
  'そ.mp4',
  'た.mp4',
  'ち.mp4',
  'つ.mp4',
  'て.mp4',
  'と.mp4',
  'な.mp4',
  'に.mp4',
  'ぬ.mp4',
  'ね.mp4',
  'の.mp4',
  'は.mp4',
  'ひ.mp4',
  'ふ.mp4',
  'へ.mp4',
  'ほ.mp4',
  'ま.mp4',
  'み.mp4',
  'む.mp4',
  'め.mp4',
  'も.mp4',
  'や.mp4',
  'ゆ.mp4',
  'よ.mp4',
  'ら.mp4',
  'り.mp4',
  'る.mp4',
  'れ.mp4',
  'ろ.mp4',
  'わ.mp4',
  'を.mp4',
  'ん.mp4',
  'が.mp4',
  'ぎ.mp4',
  'ぐ.mp4',
  'げ.mp4',
  'ご.mp4',
  'ざ.mp4',
  'じ.mp4',
  'ず.mp4',
  'ぜ.mp4',
  'ぞ.mp4',
  'だ.mp4',
  'ぢ.mp4',
  'づ.mp4',
  'で.mp4',
  'ど.mp4',
  'ば.mp4',
  'び.mp4',
  'ぶ.mp4',
  'べ.mp4',
  'ぼ.mp4',
  'ぱ.mp4',
  'ぴ.mp4',
  'ぷ.mp4',
  'ぺ.mp4',
  'ぽ.mp4',
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force the new version to take over
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => caches.match('index.html')) // Fallback to index if network fails
  );
});
