# Oswal Motors — Website

A static marketing website for Oswal Motors, a used vehicle dealership (cars, SUVs, and bikes) with 20+ years in business. Built as coursework for the Web Development module — no backend, no database, pure HTML/CSS (+ optional vanilla JS for the mobile nav).

> Client brief: automotive/used vehicle dealership — see `docs/requirements.md` for the full original brief and requirement breakdown.

---

## Table of contents

- [Project overview](#project-overview)
- [Folder structure](#folder-structure)
- [How to view the site](#how-to-view-the-site)
- [Design system](#design-system)
- [Site map](#site-map)
- [Page-by-page content](#page-by-page-content)
- [Assumptions made](#assumptions-made)
- [Contributing / commit style](#contributing--commit-style)

---

## Project overview

Ravi Oswal has run a used vehicle lot for ~20 years, relying on word of mouth and a WhatsApp group. This site replaces that with an online catalogue so customers can browse vehicles, understand financing/trade-in options, and trust the dealership before they call or visit.

**Goals for this build:**
- Serious, professional tone — no flashy/playful design (this is a big-purchase category)
- Vehicle catalogue front and center (photo, price, year, km, transmission, fuel)
- Trust signals: years in business, inspection process, warranty
- Phone number and location visible on every page
- All forms are front-end only (no backend) — built with proper HTML form elements and validation attributes

---

## Folder structure

```
project-root/
├── index.html          → Home
├── inventory.html       → Inventory / catalogue
├── financing.html       → Financing & Trade-In
├── about.html           → About Us
├── contact.html         → Contact
├── /css
│   └── style.css
├── /images
│   └── ...
├── /js
│   └── main.js           (optional — mobile menu toggle)
├── docs/
│   └── requirements.md   (original brief + requirement breakdown)
└── README.md
```

## How to view the site

**Locally:** clone the repo and open `index.html` directly in a browser — no build step required.

```
git clone <repo-url>
cd <repo-folder>
open index.html   # or double-click the file
```

**Live version:** hosted via GitHub Pages once published → `https://<username>.github.io/<repo-name>/`

---

## Design system

### Color palette

| Role | Hex | Use |
|---|---|---|
| Primary — Navy | `#1B2A41` | Header, footer, headings |
| Secondary — Steel grey | `#5C6B73` | Body text, borders, secondary buttons |
| Accent — Burnt amber | `#C9822E` | CTA buttons, price tags, links |
| Base — White | `#FFFFFF` | Main background |
| Base — Off-white | `#F5F5F3` | Section backgrounds |

*(Extended 5-color version with a separate warm-grey card background and gold accent is documented in `docs/requirements.md` if you want more depth on the inventory cards.)*

### Typography

- **Headings:** Poppins (500/600/700)
- **Body:** Inter (400/500)

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

### Layout notes for developers

- Sticky header on every page: logo left, nav center, phone number pinned right
- Footer repeated on every page: tagline, quick links, phone + address, copyright line
- Vehicle cards are the core reusable component — build once, reuse on Home (featured) and Inventory (full grid)
- Mobile breakpoint: collapse nav into a hamburger menu below ~768px

---

## Site map

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, trust strip, featured vehicles, CTA |
| Inventory | `inventory.html` | Full vehicle catalogue with category tabs |
| Financing & Trade-In | `financing.html` | Loan info + trade-in/exchange explanation |
| About Us | `about.html` | Company story, inspection/warranty promise |
| Contact | `contact.html` | Phone, address, map, hours, inquiry form |

---

## Page-by-page content

Use the copy below directly, or adapt tone slightly — keep it short and confident, no filler.

### 1. Home (`index.html`)

**Header (all pages):** Logo/Wordmark "OSWAL MOTORS" · Nav: Home / Inventory / Financing / About / Contact · `📞 Call Now: 077-XXX-XXXX` pinned right

**Hero section**
- Headline: `20 Years of Cars You Can Trust.`
- Subheadline: `Every vehicle inspected. Every deal straightforward. Sedans, SUVs, and bikes — ready to view today.`
- Buttons: `View Inventory` (primary/amber) · `Call the Lot` (secondary/outline)
- Background: real photo of the lot or hero car photo — no generic stock images

**Trust strip (4 items, icon + short label)**
- 20+ Years in Business
- Every Vehicle Inspected
- Warranty Included
- Trade-Ins Welcome

**Featured vehicles (3–6 cards)**

Section title: `Currently on the Lot`

Card template:
```
[Photo]
2019 Toyota Axio
LKR 4,850,000
62,000 km · Automatic · Petrol
[View Details] [WhatsApp Inquiry]
```

**Closing CTA band**
- Text: `Looking for something specific? Tell us what you need.`
- Button: `Contact Us`

---

### 2. Inventory (`inventory.html`)

**Intro copy:**
> Browse what's currently available. All vehicles listed here are on the lot and ready to view — call ahead to confirm before you visit.

**Filter tabs (front-end only):** All / Sedans / SUVs / Bikes

**Card fields per vehicle:** photo, make & model, year, price, mileage (km), transmission, fuel type, status tag (`Available` / `Reserved`)

**Closing note (bottom of page):**
> New stock added regularly. If you don't see what you're looking for, call us — we often have vehicles arriving before they're listed.

---

### 3. Financing & Trade-In (`financing.html`)

**Section 1 — Financing**
- Headline: `Financing Made Simple`
- Body: "We work with local banks and finance companies to help you get on the road faster. Bring your ID and income details when you visit, and our team will walk you through the options available for your chosen vehicle."
- CTA: `Ask About Financing`

**Section 2 — Trade-In / Exchange**
- Headline: `Trade In Your Old Vehicle`
- Body: "Have a car or bike you want to exchange? Bring it in for a free evaluation. We'll offer a fair trade-in value that goes straight toward your next vehicle."
- CTA: `Get a Trade-In Estimate`

---

### 4. About Us (`about.html`)

**Headline:** `Two Decades on the Same Lot`

**Body copy:**
> Oswal Motors has been buying, inspecting, and selling quality used vehicles for over 20 years. What started as a small lot has grown through one thing: word of mouth from customers who trusted us the first time and came back the second.
>
> Every vehicle that comes onto our lot goes through a full inspection before it's listed. We stand behind what we sell with a warranty period on every purchase, because a used car is still a big decision — and we don't take that lightly.

**Our Promise (3 short points)**
- Full inspection before every sale
- Warranty period included
- No pressure — take your time, ask questions

---

### 5. Contact (`contact.html`)

**Headline:** `Visit the Lot or Give Us a Call`

**Contact block**
- Address: `[Lot address]`
- Phone: `077-XXX-XXXX`
- Hours: `Mon–Sat, 9:00 AM – 6:00 PM`
- Map: Google Maps iframe embed

**Inquiry form fields (front-end only)**
- Name (`required`)
- Phone number (`type="tel"`, `required`)
- Interested vehicle (optional text)
- Message (`textarea`)
- Submit button: `Send Inquiry`

---

### Footer (all pages)

- Logo + tagline: `Quality used vehicles, honestly sold.`
- Quick links: Inventory / Financing / About / Contact
- Phone + address repeated
- Small print: `© 2026 Oswal Motors. All vehicles subject to availability.`

---

## Assumptions made

- Currency shown as LKR — swap this if your target locale differs.
- No real booking/payment system — all forms are static/front-end only per the coursework brief.
- A WhatsApp inquiry button was added to vehicle cards. This goes slightly beyond the literal client brief but fits the "call or visit" urgency described — drop it if you want to stay strictly to what's written, and note it as a deliberate addition in your write-up either way.

---

## Contributing / commit style

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short summary in present tense>
```

| Type | Use for |
|---|---|
| `feat` | New page, section, or feature |
| `style` | CSS/visual changes, no structural change |
| `fix` | Bug or layout correction |
| `docs` | README/documentation changes |
| `refactor` | Reorganizing code, no behavior change |
| `chore` | Setup, folders, config |

Suggested sequence (aim for 8–10 commits, not one final dump):

1. `chore: set up project folder structure`
2. `feat: add homepage hero and navigation`
3. `feat: build inventory page with vehicle cards`
4. `feat: add financing and trade-in page`
5. `feat: build about us page`
6. `feat: add contact page with form and map`
7. `style: apply color palette and typography across pages`
8. `fix: correct mobile menu and card layout issues`
9. `docs: add requirements analysis to README`
10. `chore: enable GitHub Pages and add live link`
