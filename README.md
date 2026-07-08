# Agua Fria Meet & Confer Data Portal

This is a static GitHub Pages-ready prototype for a modern Meet & Confer portal.

## What is included

- `index.html` — the full single-page portal
- `assets/styles.css` — visual design and responsive layout
- `assets/app.js` — rendering, filters, search, charts, and dashboard logic
- `data/portal-database.js` — the lightweight editable database
- `data/schema-notes.md` — field guide for updating the database

## Major features

- Proposal and priority tracker
- Year-by-year historical outcome pages
- Search and filters
- Chart.js visual dashboards
- “Can We Afford It?” finance framing
- Searchable document/source library
- Database-first structure that does not require a server

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save.

GitHub will provide a public Pages URL after deployment.

## How to update the site

Most content lives in:

```text
data/portal-database.js
```

Edit that file after meetings or budget updates, commit the change, and the public dashboard will update automatically.

## Important review note

This prototype uses public information from the current Agua Fria Meet & Confer site and placeholder outcome labels where final outcomes were not coded. Review all figures, dates, and labels before public release.
