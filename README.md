# BIOSPECTRA RED — R25 (hero naslov)

Hero naslov: **„Izvan vidljivog.”** / **“Beyond the visible.”**

Sve promene iz R24, uključujući originalnu odobrenu rotaciju, isti video za telefon i desktop, mobilne kontrole, dizajn i PET stranicu, ostaju neizmenjene.

# BIOSPECTRA RED — R24 (ispravljena animacija)

## Šta je ispravljeno

- Odobrena animacija je **doslovno preuzeta** iz BIOSPECTRA_R20_INTERAKTIVNI_PREGLED.html (Codex original), bez ponovnog renderovanja.
- Prirodni svetli hrast prekriva i bok; **samo postolje je crno**.
- Bok se u početnoj prostornoj perspektivi vidi **desno**, ne levo.
- Isti `assets/hero-rotation.mp4` i poster koristi jedinstvena `<video>` komponenta na desktopu i telefonu.
- Nema dnevnog/noćnog režima, alternativnih mobilnih fotografija niti prebacivanja modela.
- Zadržani su raniji mobilni playback mehanizmi (muted, playsinline, pauza/nastavak, vidljivost, reduced motion).
- `BIOSPECTRA_PET_R08.html` je zadržan neizmenjen.

## Objavljivanje na GitHub Pages

Otpakujte sadržaj ovog ZIP-a u koren repozitorijuma; `index.html` je glavna stranica. U GitHub Settings → Pages podesite izvor na `Deploy from a branch`, `main`, `/ (root)`.

U R24 su uklonjene sve referencije na pogrešan video u datotekama paketa. Testiranje na fizičkim iOS/Android telefonima nije urađeno.
