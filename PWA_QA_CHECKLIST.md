# BIOSPECTRA RED — PWA dodatak R26

- Izvor: objavljeni `biospectra-red` repozitorijum, R25.
- Izvorni `hero-rotation.mp4` i `hero-rotation-poster.webp` nisu izmenjeni.
- Ažurirane samo HTML `<head>` metaoznake, zasebna registracija servisnog radnika i PWA prateći fajlovi.
- `start_url` i `scope` su relativni, zato radi na GitHub Pages putanji `/biospectra-red/`.
- SW za navigaciju primenjuje *network-first* pristup, za ikonice *cache-first*.
- MP4 / byte-range zahtevi nisu presretani; namerno je izbegnut rizik po mobilno video dekodiranje.
- Na HTTPS lokaciji PWA se može dodati na početni ekran. Izbor `Install app` zavisi od verzije Brave-a i sistema.
- Brza provera: otvoriti preko ikone, potvrditi da nema adresne trake i da animacija radi; proveriti i standardni Brave.
- Napomena: u izvornom `index.html` stoji `noindex,nofollow`; sačuvano je jer nije deo ovog zahvata.
