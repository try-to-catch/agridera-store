self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open("static")
            .then(function(cache) {
                console.log("precaching");
                cache.add('./assets/index-cc3302a1.js');
                cache.add('./assets/index-4bfd30cb.css');
                cache.add('images/background.jpg');
                cache.add('/');
            })
    )
});
self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if(response)
                    return response;
                else
                    return fetch(event.request);
            })
    )
});