/* BIOSPECTRA RED: offline shell without interfering with media playback. */
const CACHE_NAME = 'biospectra-red-pwa-r26';
const APP_SHELL = [
  './',
  './index.html',
  './BIOSPECTRA_PET_R08.html',
  './manifest.webmanifest',
  './icons/biospectra-icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './assets/hero-rotation-poster.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n => n.startsWith('biospectra-red-pwa-') && n !== CACHE_NAME).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  // Keep MP4 and byte-range requests completely outside the service worker cache.
  // This preserves native Android/Brave/iOS playback, seeking and partial loading.
  if (request.headers.has('range') || request.destination === 'video' || /\.(mp4|webm|mov)$/i.test(url.pathname)) return;
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }
        return response;
      } catch (error) {
        const cached = await caches.match(request, {ignoreSearch: true});
        return cached || await caches.match(new URL('./index.html', self.registration.scope).href) || Response.error();
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const cached = await caches.match(request, {ignoreSearch: true});
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok && response.type === 'basic') {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  })());
});
