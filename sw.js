self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cashcrow-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/main.css',
        '/main.js',
        '/assets/img/CC1trim.png',
        '/assets/img/apple-touch-icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

