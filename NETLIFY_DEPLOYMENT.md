# Navodila za namestitev na Netlify

Ta dokumentacija vas vodi skozi postopek namestitve vaše React aplikacije (Pisarna360) na Netlify.

## Predpogoji

*   **GitHub Repozitorij:** Vaša React aplikacija mora biti v GitHub repozitoriju.
*   **Netlify Račun:** Potrebujete aktiven Netlify račun.

## Koraki za namestitev

### 1. Povezava GitHub Repozitorija

1.  Prijavite se v vaš Netlify račun.
2.  Na armaturni plošči Netlify kliknite na **"Add new site"** (Dodaj novo spletno stran) in nato izberite **"Import an existing project"** (Uvozi obstoječi projekt).
3.  Izberite **"Deploy with GitHub"** (Namesti z GitHubom). Pooblastite Netlify za dostop do vaših GitHub repozitorijev, če tega še niste storili.
4.  Na seznamu repozitorijev poiščite in izberite repozitorij `pisarna360`.

### 2. Konfiguracija gradnje in namestitve

Ko izberete repozitorij, vas bo Netlify vprašal za nastavitve gradnje. Preverite, ali so nastavitve pravilne za vašo Vite/React aplikacijo:

*   **Owner:** Vaš GitHub uporabniški račun.
*   **Branch to deploy:** `main` (ali katero koli drugo vejo, ki jo želite namestiti).
*   **Base directory:** `web` (Ker se vaša React aplikacija nahaja v podimeniku `web`).
*   **Build command:** `npm run build`
*   **Publish directory:** `web/dist` (To je privzeta izhodna mapa za Vite aplikacije v podimeniku `web`).

Potrdite nastavitve s klikom na **"Deploy site"** (Namesti spletno stran).

### 3. Prva namestitev

Netlify bo samodejno začel z gradnjo in namestitvijo vaše spletne strani. Ta postopek lahko traja nekaj minut. Stanje namestitve lahko spremljate v Netlify nadzorni plošči. Ko bo namestitev končana, boste prejeli URL do vaše žive spletne strani.

### 4. Nastavitev SSL certifikata (HTTPS)

Netlify samodejno zagotavlja in konfigurira brezplačne SSL certifikate prek Let's Encrypt. To pomeni, da bo vaša spletna stran privzeto dostopna preko HTTPS.

*   Pojdite na **Site settings** (Nastavitve spletne strani) > **Domain management** (Upravljanje domene) > **HTTPS**.
*   Preverite, ali je SSL/TLS certifikat uspešno izdan.

### 5. Konfiguracija domene po meri

Če želite uporabiti lastno domeno (npr. `www.pisarna360.si`), sledite tem korakom:

1.  Na Netlify nadzorni plošči pojdite na **Site settings** (Nastavitve spletne strani) > **Domain management** (Upravljanje domene).
2.  Kliknite na **"Add a custom domain"** (Dodaj domeno po meri).
3.  Vnesite vašo domeno (npr. `pisarna360.si`). Netlify vas bo vodil skozi postopek dodajanja `www` poddomene, če je to potrebno.
4.  Netlify vam bo podal DNS zapise (običajno CNAME in A zapise), ki jih morate dodati pri vašem registrarju domene (kjer ste kupili domeno). Sledite navodilom, ki jih prikaže Netlify.
5.  Ko posodobite DNS zapise, lahko traja nekaj časa (do 24-48 ur), da se spremembe razširijo po internetu. Po tem bo vaša spletna stran dostopna preko vaše domene po meri.

## Neprekinjena namestitev (Continuous Deployment)

Ko je repozitorij povezan in so nastavitve pravilne, bo Netlify avtomatsko namestil vsako spremembo, ki jo potisnete v izbrano vejo (npr. `main`) vašega GitHub repozitorija. To zagotavlja, da je vaša spletna stran vedno posodobljena z najnovejšo kodo.

S temi koraki bo vaša aplikacija Pisarna360 uspešno nameščena in delovala na Netlify.
