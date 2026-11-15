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


## PWA / Brave (Android)

Ovaj repozitorijum uključuje instalabilnu web-app verziju, bez promene animacije ili dizajna:
- `manifest.webmanifest` — aplikacija BIOSPECTRA sa `display: standalone`
- `icons/` — ikonice izvedene iz postojećeg BIOSPECTRA znaka
- `service-worker.js` — offline HTML + poster; namerno ne presreće MP4/Range zahteve

Na Android telefonu otvorite HTTPS GitHub Pages adresu u Brave-u, iz menija izaberite **Install app** (ako je ponuđeno) odnosno **Add to Home screen**. Ako browser ponudi samo prečicu, prikaz će zavisiti od verzije Brave-a. Već dodatu prečicu je možda potrebno ukloniti i dodati ponovo kako bi dobila PWA način prikaza.

Važno: animacija `assets/hero-rotation.mp4` je ista kao u prethodnoj R25 verziji i učitava se direktno sa mreže. Na offline stranici ostaje poster, ne garantuje se reprodukcija videa bez interneta.


## R27 update
- PWA / home-screen icons changed to icon-only BIOSPECTRA mark (black on white).
