# Priročnik za izdelavo spletnih prototipov z LLM (React + Vite)

Ta dokument opisuje postopek, orodja in metodologijo za hitro izdelavo profesionalnih predstavitvenih spletnih strani (Landing Pages) s pomočjo LLM agenta. Temelji na projektu "Pisarna360".

## 1. Tehnološki nabor (Tech Stack)

Za doseganje hitrosti, stabilnosti in modernega izgleda uporabljamo naslednji nabor orodij:

*   **Runtime:** Node.js & npm (mora biti nameščeno na sistemu).
*   **Ogrodje (Framework):** [React](https://react.dev/) (z uporabo [Vite](https://vitejs.dev/) za hitro inicializacijo in build).
*   **Stil (Styling):** [Bootstrap 5](https://getbootstrap.com/) + `react-bootstrap` (za hitro postavitev grid-a in komponent) + `custom CSS` za detajle.
*   **Ikone:** `lucide-react` (moderne, SVG ikone).
*   **Deployment:** GitHub Pages (preko paketa `gh-pages`).
*   **Dokumentacija (Opcijsko):** `pandoc` (za pretvorbo obstoječih .docx/.pdf dokumentov v Markdown za analizo).

### Ukaz za inicializacijo:
```bash
npm create vite@latest ime-projekta -- --template react
cd ime-projekta
npm install
npm install bootstrap react-bootstrap lucide-react
npm install gh-pages --save-dev
```

## 2. Metodologija dela in Sodelovanje s stranko

Postopek je razdeljen na iterativne faze. LLM deluje kot proaktiven inženir, ki vodi stranko skozi proces.

### Faza 1: Analiza in Kontekst (Discovery)
*   **Cilj:** Razumeti posel stranke in obstoječe materiale.
*   **Akcija LLM:**
    *   Pregled obstoječe mape (npr. `import/`).
    *   Pretvorba dokumentov (pogodbe, ceniki) v Markdown, da LLM razume vsebino.
    *   Povzetek ključnih informacij (Cene, Lokacija, Ime podjetja, USP - Unique Selling Points).
*   **Komunikacija:** Potrditev razumevanja s stranko ("Ali so ti podatki točni?").

### Faza 2: Načrtovanje in Potrditev (Proposal)
*   **Cilj:** Uskladiti pričakovanja pred pisanjem kode.
*   **Akcija LLM:**
    *   Predlog strukture strani (Header, Hero, Features, Pricing, Footer).
    *   Izbira tehnologij.
*   **Komunikacija:** Predstavitev načrta stranki in pridobitev "zelene luči".

### Faza 3: "Scaffolding" in Osnovna Struktura
*   **Cilj:** Čim prej priti do delujoče aplikacije (MVP).
*   **Akcija LLM:**
    *   Inicializacija projekta (Vite).
    *   Postavitev glavnih komponent (`Header.jsx`, `Hero.jsx`, `Footer.jsx`).
    *   Integracija v `App.jsx`.

### Faza 4: Iterativno Poliranje (Feedback Loop)
To je ključni del sodelovanja. Stranka daje vizualne pripombe, LLM jih sproti rešuje.
*   **Logotipi in Grafika:**
    *   Če stranka nima logotipa, ga LLM ustvari programsko (SVG ali ASCII art v React komponenti).
    *   Če stranka naloži slike, jih LLM premakne v `public/img`.
    *   *Pomembno:* Uporaba `import.meta.env.BASE_URL` za pravilne poti do slik na produkciji (GitHub Pages).
*   **Barve in Stil:**
    *   Prilagoditev globalnih CSS spremenljivk (npr. preglasitev `--bs-primary`).
    *   Prilagoditev velikosti pisav (`rem` enote) in razmikov.
*   **Responsivnost:**
    *   Preverjanje prikaza na mobilnih napravah (centriranje teksta, skrivanje prevelikih elementov).

### Faza 5: Objava (Deployment)
*   **Cilj:** Stranka mora videti napredek v živo na spletu.
*   **Orodje:** GitHub Pages.
*   **Konfiguracija:**
    *   `package.json`: dodajanje `homepage` in `deploy` skripte.
    *   `vite.config.js`: nastavitev `base: '/ime-repozitorija/'`.
*   **Akcija:** `npm run deploy` po vsaki večji spremembi.

## 3. Ključna navodila za LLM (Best Practices)

1.  **Poti do slik:** Pri uporabi Vite + GitHub Pages *vedno* uporabljaj predlogo:
    ```jsx
    <img src={`${import.meta.env.BASE_URL}img/slika.png`} />
    ```
    v JSX in relativne poti (`./img/...`) v `index.html`.

2.  **Urejanje kode:** Pri kompleksnih popravkih (npr. SVG poti, dolgi stringi) raje uporabi orodje `write_file` in prepiši celotno datoteko, kot da tvegaš napake z `replace` orodjem.

3.  **Varnost:** Ne izvajaj `git push` brez vednosti uporabnika, a ga spodbujaj k uporabi Git-a.

4.  **Fleksibilnost:** Bodi pripravljen na hitre spremembe ("povečaj logotip", "zamenjaj barvo"). Uporabljaj CSS spremenljivke ali Tailwind/Bootstrap classe za hitre prilagoditve.

5.  **Placeholderji:** Če vsebina manjka, uporabi smiselne placeholderje (npr. "Ljuan d.o.o." za ime podjetja), ki jih je kasneje lahko zamenjati.
