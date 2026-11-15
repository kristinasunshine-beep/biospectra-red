# BIOSPECTRA — PWA R26: postavljanje i instalacija u Brave-u

## Ažuriranje postojećeg repozitorijuma

Repozitorijum: https://github.com/kristinasunshine-beep/biospectra-red

1. Preuzmi `BIOSPECTRA_RED_PWA_R26_AZURIRANJE_GITHUB.zip` i **raspakuj** ga.
2. U repozitorijumu otvori `Code` → `Add file` → `Upload files`.
3. Prevuci **sadržaj raspakovanog foldera** (ne sam ZIP) u GitHub. Sačuvaj putanju foldera `icons/`.
4. Potvrdi izmene u `main` grani porukom `Add BIOSPECTRA PWA support (R26)`.
5. Proveri da su `index.html`, `manifest.webmanifest`, `service-worker.js` i `icons/` u **korenom direktorijumu** repozitorijuma. Sačekaj uspešan GitHub Pages deploy.

**Šta ostaje netaknuto:** `assets/hero-rotation.mp4` i `assets/hero-rotation-poster.webp`.

## Instalacija u Brave-u na Android telefonu

1. U Brave-u otvori: https://kristinasunshine-beep.github.io/biospectra-red/
2. Osveži stranicu nakon objave nove verzije (po potrebi zatvori karticu i otvori ponovo).
3. Izaberi meni ⋮ → **Install app**, ili **Add to Home screen**, u zavisnosti od verzije Brave-a.
4. Potvrdi naziv **BIOSPECTRA**.
5. Pokreni sa nove ikonice i proveri prikaz bez adresne trake i reprodukciju rotacije.

Ako je ranije bila postavljena obična prečica, ukloni staru prečicu i dodaj je ponovo nakon objavljivanja PWA verzije. Ako Brave i dalje prikazuje samo prečicu, to zavisi od konkretne verzije browsera / Androida — PWA fajlovi ne mogu prinudno promeniti odluku browsera.

## Tehničke napomene

- PWA radi sa relativnim putanjama pod `/biospectra-red/`.
- Service worker offline čuva HTML, poster i ikonice. MP4 se reprodukuje mrežno (ne presrećemo Range zahteve).
- Dizajn, tekst i animacija R25 ostali su netaknuti.
- PWA je pripremljen i statički proveren; instalaciju i animaciju na fizičkom telefonu treba proveriti nakon objavljivanja.
