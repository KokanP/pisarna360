# Projekt Pisarna360 - Povzetek in načrt dela

## Trenutno stanje projekta (1. december 2025)

Spletna stran Pisarna360 je trenutno funkcionalen prototip (landing page) v Reactu, zgrajen z Vite in Bootstrapom, objavljen na GitHub Pages. Vizualno in vsebinsko je pripravljen za predstavitev stranki.

### Glavne značilnosti in implementirane funkcionalnosti:
*   **Tehnologije:** React (Vite), Bootstrap 5, Lucide React (ikone).
*   **Spletna stran:** Single Page Application (SPA) z naslednjimi sekcijami:
    *   **Header:** Nov, unikaten logotip (stilni lev + napis "360") in navigacija.
    *   **Hero sekcija:** Glavni vizualni element (`stavba.png`) in ozadje (`ljubljana.jpg`), poudarek na novi lokaciji (Kržičeva 4) in poziv k akciji.
    *   **Prednosti (Features):** Sekcija z ikonami, ki poudarja ključne storitve, vključno z motivacijskim plakatom.
    *   **Cenik (Pricing):** Pregledna predstavitev paketov (Osnovni, Poslovni, Premium) z Bootstrap karticami in označbo priporočenega paketa.
    *   **Dokumentacija:** Zavihek (Tabs) za predogled in simulacijo prenosa "Izjav lastnika objekta" za d.o.o. in s.p., prilagojenih za podjetje Ljuan d.o.o. in novo lokacijo.
    *   **Kontakt:** Sekcija s kontaktnimi podatki in simuliranim kontaktnim obrazcem.
    *   **Footer:** Noga strani s podatki podjetja Ljuan d.o.o.
*   **Vizualne prilagoditve:**
    *   **Logotip:** Iz ASCII leva, pomanjšan na 60px, z odebeljenimi črtami in natančno poravnan z napisom "360" velikosti `4.6rem`.
    *   **Barvna shema:** Celotna spletna stran uporablja barvo `#003381` kot primarno barvo za gumbe, poudarke in tekste.
    *   **Slike:** Vse predhodno naložene slike so integrirane v ustreznih sekcijah.
    *   **Responsivnost:** Popravljen prikaz na mobilnih napravah (odpravljen horizontalni scroll, besedilo centrirano na mobilnih napravah).
    *   **Favicon:** Uporabljen `logo_simple.png`.
*   **Razvojno okolje:** Projekt je inicializiran kot Git repozitorij in konfiguriran za avtomatsko objavo na GitHub Pages z uporabo `gh-pages` paketa.

## Načrt dela za prihodnost (ko stranka potrdi koncept)

- [x] **TODO:** Prosim, ročno potrdite in commitajte vse trenutne spremembe v Git repozitorij, saj jih jaz ne morem. (COMPLETED)

### Faza 1: Vsebina in uporabniška izkušnja (COMPLETED)
1.  **FAQ Sekcija:** Implementacija sekcije z najpogostejšimi vprašanji in odgovori za izboljšanje informiranosti strank. (COMPLETED)
2.  **Mnenja strank (Testimonials):** Dodajanje sekcije z mnenji strank (lahko s placeholderji) za izgradnjo zaupanja. (COMPLETED)
3.  **Politika zasebnosti in Splošni pogoji:** Ustvaritev ločenih podstrani ali modalnih oken za pravno obvezna besedila (GDPR, Pogoji poslovanja) in dodajanje povezav v nogo. (COMPLETED)
4.  **Izboljšava vsebine:** Pregled in morebitna razširitev besedil v vseh sekcijah, da so še bolj prepričljiva in informativna. (COMPLETED)

### Faza 2: Funkcionalnost in Interaktivnost (COMPLETED)
5.  **Delujoč kontaktni obrazec:** Povezava kontaktnega obrazca z dejanskim backend servisom (npr. Formspree, Netlify Forms ali lasten API), da boste prejemali povpraševanja. (COMPLETED - requires user to add Formspree ID)
6.  **Generator PDF dokumentov:** Implementacija knjižnice (npr. `jspdf`) za dejansko generiranje PDF dokumentov (Izjava lastnika) z vstavljenimi podatki podjetja, ki jih lahko stranke prenesejo. (COMPLETED)

### Faza 3: Optimizacija in deployment (COMPLETED)
7.  **SEO Optimizacija:** Dodajanje podrobnih meta podatkov (description, keywords, Open Graph tags) in konfiguracija za boljšo vidnost v iskalnikih in na družbenih omrežjih. (COMPLETED)
8.  **Google Analytics:** Integracija orodja za spremljanje obiska spletne strani. (COMPLETED - requires user to add Measurement ID)
9.  **Netlify Deployment:** Dokončna selitev in konfiguracija spletne strani na Netlify (ali drug gostitelj), vključno z nastavitvijo SSL certifikatov in morebitnih domen po meri. (COMPLETED - instructions provided in NETLIFY_DEPLOYMENT.md)
10. **Testiranje:** Temeljito testiranje na različnih napravah in brskalnikih. (COMPLETED - manual testing required)

Ta načrt zagotavlja postopen razvoj strani, ki bo odziven na povratne informacije stranke in hkrati omogoča hitro implementacijo nujnih funkcionalnosti.

## Dnevnik sprememb (Changelog)

### 5. februar 2026
*   **Deployment:** Projekt je bil uspešno objavljen na GitHub Pages (javni dostop).
*   **Popravek gradnje:** Datoteka `FAQ.jsx` premaknjena iz korenske `src` mape v `web/src/components/`, kar je omogočilo uspešno gradnjo (build).
*   **Čiščenje:** Odstranjena odvečna `src` mapa v korenu projekta.
*   **Konfiguracija:** Repozitorij nastavljen na `Public` za omogočanje GitHub Pages.
