self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open("static")
            .then(function(cache) {
                console.log("precaching");
                cache.add('./index.html');
                cache.add('./src/main.ts');
                cache.add('./src/router/index.ts');
                cache.add('./src/App.vue');
                cache.add('./src/assets/main.css');
                cache.add('/icons/app-icon-144x144.png');
                cache.add('manifest.json');
                cache.add('/favicon.ico');
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