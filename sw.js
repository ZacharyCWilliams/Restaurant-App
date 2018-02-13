let cacheName = 'offlinerocks';

self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
      caches.open(cacheName).then function(cache) {
        return cache.addAll([
            '/css/styles.css',
            'index.html',
            'restaurant.html'
        ]);
      })
    )
})

self.addEventListener("fetch", function(event) {
  console.log("fetching..")
  event.respondWith(
    caches.open(cacheName).then(function(cache)) {
      return cache.match(event.request);
    }
  );
});
