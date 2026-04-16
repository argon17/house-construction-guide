# House Construction Guide

A release-ready static site for a phase-by-phase house construction guide focused on Bihar cities.

## Project structure

- `index.html` is the GitHub Pages entry point.
- `styles/main.css` contains the presentation layer.
- `scripts/guide-data.js` holds the guide content as structured data.
- `scripts/app.js` renders the navigation, panels, and hash-based routing.

## Local preview

From the repo root, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Editing content

Most content edits should happen in `scripts/guide-data.js`.

- Update `eyebrow`, `title`, or `summary` for the page intro.
- Add or reorder entries inside `phases` to change navigation and section order.
- Each phase supports `items` plus an optional `documents` block.

## GitHub Pages release

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

To publish it:

1. Push the repository to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` to trigger deployment, or run the workflow manually.

The site uses relative asset paths, so it works for both user pages and project pages.

## Release checklist

1. Review content in `scripts/guide-data.js`.
2. Preview locally and click through every phase.
3. Confirm the GitHub Pages workflow has completed successfully.
4. Share the generated Pages URL.
