# Oswal Motors Website

Simple static website for Oswal Motors — homepage and related pages.

## About the project

Oswal Motors Website is a lightweight, static marketing site for a local car dealership. It highlights the dealership's inventory, financing options, company information, and contact details. The site is built with plain HTML, CSS, and a small amount of JavaScript so it is easy to host on any static hosting provider.

## Design

- Layout: Responsive, mobile-first layout with a prominent hero area on the homepage and card-style listings for inventory.
- Typography: Use system fonts or a simple web font for fast load times.
- Images: Store logos and vehicle photos under `imgs/`.
- Components: Header/navigation, hero, inventory cards, financing section, contact form.

## Color palette

Suggested color variables (defined in `css/style.css`) to keep the design consistent:

```css
:root {
  --color-primary: #0B5FFF;   /* primary brand blue */
  --color-accent:  #FF7A00;   /* accent / CTA orange */
  --color-dark:    #333333;   /* headings / text */
  --color-muted:   #6B6B6B;   /* secondary text */
  --color-bg:      #F5F5F5;   /* page background */
}
```

Adapt these values in `css/style.css` to match your brand.

## Project structure

- about.html — About page
- contact.html — Contact page
- financing.html — Financing information
- index.html — Homepage
- inventory.html — Inventory listing
- css/ — Stylesheets
  - style.css
- js/ — JavaScript files
  - main.js
- imgs/ — Images and logos
- docs/ — Project documentation

## Local usage

This is a static site. To view locally, open `index.html` in your browser, or serve with a simple HTTP server:

Using Python 3:

```bash
python -m http.server 8000
# then open http://localhost:8000/ in your browser
```

Using Node (http-server):

```bash
npx http-server -p 8000
```

## Development notes

- Pages were committed page-by-page on branch `feature/homepage`.
- If you want a pull request created, open GitHub or run:

```bash
gh pr create --base main --head feature/homepage --fill
```

## Contributing

Create a branch, make page-specific commits, and open a PR for review.

## License

Add project license here.

---

If you want a different README style or additional sections (deployment, tests, screenshots), tell me what to include and I'll update it.