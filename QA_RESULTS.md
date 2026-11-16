# BIOSPECTRA RED R32 — kontrola

## Provereno
- Editovani HTML fajlovi: `index.html` i `BIOSPECTRA_PET_R08.html`.
- JavaScript sintaksa: oba HTML fajla prolaze `node --check` po inline skriptama.
- Desktop + mobilni Chromium prikaz: 1440, 768, 390 i 320 px, bez horizontalnog prelivanja.
- Originalna 3D rotacija lampe: isti MP4 SHA-256 kao prethodni paket; reprodukcija na 1440 / 390 / 320 px, spreman video i bez JavaScript grešaka u kontrolisanom testu.
- SR/EN promena jezika u lampi: radi, engleska pitanja i odgovori odgovaraju naslovima.
- PET mobilni prikaz: 390 px, bez horizontalnog prelivanja i JavaScript grešaka.
- Obe talasne konfiguracije pravilno odvojene.
- Novi R32 ikonik i referencirani fajlovi iz manifesta prisutni.
- Svaki fajl u ZIP arhivi prolazi CRC proveru.

## Ograničenja
- Testovi mobilne reprodukcije obavljeni su u Chromium-u sa simuliranom širinom ekrana; stvarni Brave/Samsung launcher zahteva reinstalaciju prečice da bi se nova ikonica pojavila.
- Obrazac upita trenutno generiše primerak za preuzimanje; ne šalje poruku prodajnom timu bez zasebnog servisa.
- Naučni radovi služe kao opis istraživačkog konteksta; nisu rezultati kliničkih ispitivanja konkretnih BIOSPECTRA proizvoda.
