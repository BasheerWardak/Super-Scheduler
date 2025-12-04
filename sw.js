// -------------------------------
// Super Scheduler Service Worker
// -------------------------------

const CACHE_NAME = "super-scheduler-v1";

const ASSETS_TO_CACHE = [
    "/",
    "/index.html",
    "/pages/calendar_dashboard.html",
    "/pages/task_management.html",
    "/pages/search_and_filter.html",
    "/pages/settings_and_preferences.html",

    "/css/main.css",
    "/js/main.js",

    "/icons/icon-192.png",
    "/icons/icon-512.png"
];

// Install SW and cache core files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("SW: Caching assets...");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting(); // Activate immediately
});

// Activate and clean old caches
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// Fetch handler – network first, fallback to cache
self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Cache successful requests
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
