/* global clients */

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Forces the waiting service worker to become active
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/vite.svg',
        '/isologo-lovelia.png',
        // Add other assets or routes to cache
      ]);
    })
  );
});

self.addEventListener('activate', () => {
  clients.claim(); // Takes control of any clients as soon as the service worker activates
  console.log('Service worker activated');
});
