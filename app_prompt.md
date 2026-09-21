You are a Senior Full-Stack React Developer and Lead UI/UX Designer.

Build a complete, single-repository, modern web application for "Installment Management System" using React (Vite), TypeScript, Tailwind CSS, React Router, and Lucide Icons. The website will be deployed directly to GitHub Pages and must fulfill all Google OAuth Consent Screen verification requirements.

---

### 🎨 Tech Stack & UI Specifications

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with sleek Dark Theme aesthetics (Slate/Zinc palette, emerald green accents, glassmorphism cards, custom scrollbars)
- **Icons**: `lucide-react`
- **Routing**: `react-router-dom` (use `HashRouter` for smooth GitHub Pages deployment without 404 page routing issues)
- **Visuals & Diagrams**: Build high-fidelity inline SVG illustrations and interactive UI mockup cards (e.g., Dashboard metrics card, Google Drive sync status modal, Invoicing preview, Customer ledger preview). Do NOT use broken external placeholder image links.

---

### 🌐 Pages & Complete Structure to Generate

1. **Navigation Bar (`Navbar.tsx`)**:
    - Logo ("Installment Manager") with a sleek icon badge.
    - Links: Home (`/#`), Features (`/#features`), Privacy Policy (`/#/privacy`), Terms of Service (`/#/terms`).
    - Action Button: "Download Desktop App" (smooth scrolls to download section).

2. **Home / Landing Page (`Home.tsx`)**:
    - **Hero Section**: Headline ("Enterprise Installment & Financing Management"), sub-headline, CTA buttons, and a rich interactive Desktop UI Mockup built with SVG/Tailwind.
    - **Features Grid**:
        - _Installment & Ledger Engine_: Automated payment schedules, penalty logic, and interest calculator.
        - _1-Click Google Drive Cloud Sync_: Highlighting WhatsApp-style background backups using official Google APIs.
        - _Dual Invoicing_: Support for thermal printers (58mm/80mm) and standard A4 invoices.
        - _Offline SQLite First_: Fast, secure local database with zero cloud dependency for core operations.
    - **Google OAuth Sync Highlight Section**: Visual diagram showing local encrypted backups syncing to the user's private Google Drive.
    - **Download Section**: Mock download cards for Windows (x64 / `.exe`), macOS, and Linux releases.

3. **Privacy Policy Page (`PrivacyPolicy.tsx`)**:
    - Comprehensive, legally-sound Privacy Policy structured specifically for Google Cloud OAuth verification.
    - Explicitly detail that Google OAuth (`.../auth/drive.file` scope) is used solely for saving user-initiated backup files inside their own Google Drive account. Clarify that no personal data is collected or sold.

4. **Terms of Service Page (`TermsOfService.tsx`)**:
    - Standard software usage terms, licensing details, local data ownership disclaimer, and software support guarantees.

5. **Footer (`Footer.tsx`)**:
    - Authorised domain notices, copyright info, quick link navigation, and verification badge.

---

### 🛠️ Deliverables Required in One Output:

1. `package.json` with all necessary scripts and dependencies (including `gh-pages`).
2. `vite.config.ts` and `tailwind.config.js`.
3. Complete source code files (`src/App.tsx`, `src/main.tsx`, components, and page views) with ZERO placeholder/todo comments.
4. Step-by-step terminal commands to deploy the website to GitHub Pages (`gh-pages`).
