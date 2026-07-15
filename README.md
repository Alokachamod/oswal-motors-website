# Oswal Motors Website

Simple static website for Oswal Motors — homepage and related pages.

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