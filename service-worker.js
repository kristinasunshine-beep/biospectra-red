/* BIOSPECTRA RED: offline shell without interfering with media playback. */
const CACHE_NAME = 'biospectra-red-pwa-r29';
const APP_SHELL = [
  './',
  './index.html',
  './BIOSPECTRA_PET_R08.html',
  './manifest.webmanifest',
  './icons/biospectra-r29.svg',
  './icons/icon-r29-192.png',
  './icons/icon-r29-512.png',
  './icons/maskable-r29-512.png',
  './icons/apple-touch-r29.png',
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
  // Manifest and branding icons should prefer the newest published version.
  // Offline fallback remains available through the current app shell cache.
  if (/\/manifest\.webmanifest$|\/icons\//i.test(url.pathname)) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, {cache:'no-cache'});
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }
        return response;
      } catch (_error) {
        return await caches.match(request, {ignoreSearch:true}) || Response.error();
      }
    })());
    return;
  }
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
