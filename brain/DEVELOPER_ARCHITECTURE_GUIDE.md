# MP SOLE® - Complete Project & Technical SEO Architecture Guide

> **Zaroori Note:** Yeh document is project ke architecture, file structure, aur Technical SEO setup ko detail mein explain karta hai taake koi bhi naya developer ya SEO team member aate hi 5 minute mein poora system samajh sake.

---

## 📌 Project Overview

- **Domain:** `https://mpsolemanufacture.com`
- **Framework:** Next.js 14 (App Router) with TypeScript
- **Export Mode:** Static HTML Export (`output: 'export'`)
- **Hosting Platform:** Hostinger (Apache Web Server)
- **Deployment Folder:** `out/` (Static build upload to `public_html`)

---

## 🗂️ Complete File & Folder Map (Kaunsi File Kahan Hai Aur Kya Karti Hai)

```
d:\Amaan\Finaltry\nino-nextjs-package\
├── brain/                                 # 🧠 Project documentation & reports
│   ├── PROGRESS.md                        # Phase-wise SEO audit progress
│   ├── SEO_AUDIT_HANDOFF.md               # SEO agency handoff report
│   └── DEVELOPER_ARCHITECTURE_GUIDE.md    # Yeh guide jo aap parh rahe hain
├── public/                                # 🌐 Static assets served directly
│   ├── .htaccess                          # Apache security headers, MIME types, 301 redirects
│   ├── favicon.ico                        # Website favicon
│   └── assets/                            # Images, CSS, Fonts, Icons
│       └── images/
│           ├── about/hero-sole.webp       # LCP hero image (compressed & webp)
│           └── soles/                     # High-res compressed sole images
├── src/
│   ├── app/                               # 🚀 Next.js App Router (Pages & Metadata)
│   │   ├── layout.tsx                     # Global Root Layout (GTM, GSC verification, fonts)
│   │   ├── page.tsx                       # Homepage route
│   │   ├── about/page.tsx                 # About Us page & canonical metadata
│   │   ├── contact/page.tsx               # Contact page & canonical metadata
│   │   ├── blog/page.tsx                  # Blog listing page & canonical metadata
│   │   ├── blog-details/page.tsx          # Single Blog post page & canonical metadata
│   │   ├── projects/page.tsx              # Projects gallery page & canonical metadata
│   │   └── sole-types/
│   │       ├── page.tsx                   # Legacy 301 redirect fallback
│   │       └── [slug]/
│   │           └── page.tsx               # Dynamic Product page (generateStaticParams)
│   ├── components/                        # 🧩 React UI Components
│   │   ├── home/
│   │   │   └── HeroArea.tsx               # Main H1, dynamic typewriter effect, LCP image
│   │   ├── blog-details/
│   │   │   └── BlogDetailsArea.tsx        # Semantic H1, H2, H3 hierarchy blog layout
│   │   ├── common/
│   │   │   └── Breadcrumb.tsx             # Breadcrumbs with semantic tag support
│   │   └── single-project/
│   │       └── SingleProjectArea.tsx      # Sole showcase & detailed specifications
│   ├── data/
│   │   └── sole_data.ts                   # 📦 Central Data Store (4 Sole Types & SEO Titles)
│   └── styles/                            # CSS stylesheets
├── next.config.mjs                        # Next.js build configuration (output: 'export')
└── package.json                           # Dependencies & scripts
```

---

## 🔍 Detail Explanation: Har File Ka Kaam Aur Logic

### 1. `src/app/layout.tsx` (Global Master Layout)
- **Kyun banaya/edit kiya?**
  - Search Console ownership verify karne ke liye (`meta google-site-verification`).
  - Google Tag Manager container (`GTM-K6Q379X4`) site-wide inject karne ke liye.
  - Base URL set karne ke liye (`metadataBase: new URL('https://mpsolemanufacture.com')`).
- **Code Logic:**
  - `<head>` mein GTM script synchronous priority ke saath inject hai.
  - `<body>` ke turant baad `<noscript>` iframe laga hai.
  - Saare child pages is layout se wrap hokar render hote hain.

---

### 2. `public/.htaccess` (Apache Server Engine Configuration)
Next.js `output: 'export'` use karta hai, isliye server-level rules `.htaccess` file se control hote hain:
- **301 Permanent Redirect:**
  ```apache
  RewriteRule ^sole-types/?$ /sole-types/pio-sole-gents [R=301,L]
  ```
  - Purani `/sole-types/` URL jo 403 Forbidden de rahi thi, usay direct `pio-sole-gents` par 301 redirect karta hai bina redirect chain ke.
- **HTTP Security Headers:**
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains` (SSL enforce)
  - `X-Content-Type-Options: nosniff` (MIME sniffing block)
  - `X-Frame-Options: SAMEORIGIN` (Clickjacking protection)
  - `Referrer-Policy: strict-origin-when-cross-origin` (Safe analytics data passing)
- **MIME Types Registration:**
  - `AddType text/javascript .js .mjs` — Taake Next.js ke build chunks `.js` ko browser sahi execute kare aur nosniff error na de.
- **Clean URLs & Static Routing:**
  - `.html` extensions automatically handle hote hain (e.g., `/about` loads `/about.html`).

---

### 3. `src/data/sole_data.ts` (Central Product & SEO Data Store)
- **Kyun zaroori hai?**
  - Yeh file pore project ka Single Source of Truth hai.
  - Charon products (`pio-sole-gents`, `ladies-jelly-sole`, `tr-sole`, `medicated-sole`) ka data, specifications, images, aur SEO descriptions yahan store hain.
  - Agar kal koi naya sole add karna ho ya details update karni ho, sirf is ek file mein change karna hoga.

---

### 4. `src/app/sole-types/[slug]/page.tsx` (Dynamic Sole Pages)
- **Kaise kaam karta hai?**
  - `generateStaticParams()` run karta hai jo `sole_data.ts` se saare 4 slugs utha kar build time par static HTML banata hai.
  - `generateMetadata()` har individual sole ke liye dynamic self-referencing canonical URL aur specific H1 title generate karta hai:
    - `/sole-types/pio-sole-gents` ➔ `PIO Gents Shoe Sole Manufacturer in Pakistan`
    - `/sole-types/ladies-jelly-sole` ➔ `Ladies Jelly Sole Manufacturer in Pakistan`
    - `/sole-types/tr-sole` ➔ `TR Shoe Sole Manufacturer in Pakistan`
    - `/sole-types/medicated-sole` ➔ `Medicated Shoe Sole Manufacturer in Pakistan`

---

### 5. `src/components/home/HeroArea.tsx` (Homepage Main Hero)
- **SEO & Performance Features:**
  - Semantic `<h1>`: `MP SOLE® - Shoe Sole Manufacturer in Pakistan`.
  - Typewriter effect smooth state update ke sath chalta hai.
  - Hero image (`/assets/images/about/hero-sole.webp`) par `fetchPriority="high"`, `loading="eager"`, aur fixed dimensions (`width={600} height={400}`) hain taake Google PageSpeed / Lighthouse mein **Largest Contentful Paint (LCP)** fast rahe aur **CLS (Cumulative Layout Shift)** zero ho.

---

### 6. `src/components/blog-details/BlogDetailsArea.tsx` (Blog SEO Hierarchy)
- **SEO Audit Fix:**
  - Audit report ke mutabiq blog details page par H1 pehla element nahi tha.
  - Humne Breadcrumbs ko H1 banne se hata kar directly article ke title ko DOM ka pehla `<h1>` banaya:
    - `<h1>`: Best Quality Shoe Sole Manufacturing in Karachi, Pakistan
    - `<h2>`: What Is a Shoe Sole?, Why Karachi Is Famous, How Shoe Soles Are Made...
    - `<h3>`: Step-by-step subsections (Skilled Workers, Good Machines, Step 1, etc.)
  - Koi heading jump nahi hai (H1 ➔ H2 ➔ H3 descending flow).

---

### 7. Canonical URL Implementation Map (Across All Pages)

Har page ke `metadata` object ke andar `alternates.canonical` configure kiya gaya hai:

| Page Route | Source File | Canonical URL Output |
|---|---|---|
| `/` | `src/app/page.tsx` | `https://mpsolemanufacture.com/` |
| `/about` | `src/app/about/page.tsx` | `https://mpsolemanufacture.com/about` |
| `/contact` | `src/app/contact/page.tsx` | `https://mpsolemanufacture.com/contact` |
| `/blog` | `src/app/blog/page.tsx` | `https://mpsolemanufacture.com/blog` |
| `/blog-details` | `src/app/blog-details/page.tsx` | `https://mpsolemanufacture.com/blog-details` |
| `/projects` | `src/app/projects/page.tsx` | `https://mpsolemanufacture.com/projects` |
| `/sole-types/pio-sole-gents` | `src/app/sole-types/[slug]/page.tsx` | `https://mpsolemanufacture.com/sole-types/pio-sole-gents` |
| `/sole-types/tr-sole` | `src/app/sole-types/[slug]/page.tsx` | `https://mpsolemanufacture.com/sole-types/tr-sole` |
| `/sole-types/ladies-jelly-sole` | `src/app/sole-types/[slug]/page.tsx` | `https://mpsolemanufacture.com/sole-types/ladies-jelly-sole` |
| `/sole-types/medicated-sole` | `src/app/sole-types/[slug]/page.tsx` | `https://mpsolemanufacture.com/sole-types/medicated-sole` |

---

## 🌐 External DNS Configuration (Hostinger Panel)

Google Search Console ownership verify karne ke liye Hostinger DNS mein yeh TXT record live add kiya gaya hai:

- **Type:** `TXT`
- **Host / Name:** `@`
- **Value / Content:** `google-site-verification=x8qzgNB8JnP5cc3Ci42CdYEdseO8HUFVAGt1WCfEhUk`
- **TTL:** `14400`

---

## 🛠️ How to Build and Deploy (Developer Workflow)

### 1. Development Mode Run Karna:
```bash
npm run dev
```
Port `http://localhost:3000` par local server start ho jayega.

### 2. Production Static Build Generate Karna:
```bash
npm run build
```
- Build process tamam 20 static HTML pages prerender karega.
- Output directory `out/` ke andar save hogi.
- `public/.htaccess` automatically `out/.htaccess` ban kar ready ho jata hai.

### 3. Hostinger Par Live Deploy Karna:
1. Apne Hostinger File Manager ya FTP client open karein.
2. Domain ki root directory (`public_html`) mein jayein.
3. Local `out/` folder ke tamam files aur folders (including `.htaccess`) ko `public_html` ke andar upload kar dein.

---

## ⚠️ Important Rules for Future Developers

1. **Static Build Files Ko Direct Edit Na Karein:**
   - `_next/static/` ya `out/` folder ke andar build files hoti hain jo har build ke sath rewrite hoti hain. Hamesha `src/` folder ke andar source code edit karein.
2. **Next.js Dynamic Middleware Na Lagayein:**
   - Kyunke project `output: 'export'` (pure static) par chalta hai, server-side headers aur redirects `.htaccess` ke zariye manage honge.
3. **Images Hamesha WebP Ya Compressed Rakhein:**
   - Heavy raw images directly na dalein. Page speed aur SEO score 95+ rakhne ke liye compressed image use karein.
