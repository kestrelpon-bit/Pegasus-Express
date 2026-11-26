# Pegasus Express Calculator — V1.6.3

GitHub Pages-ready package for Pegasus Express Calculator.

## Deploy to GitHub Pages

1. Extract this ZIP.
2. Upload the **contents** of this folder to the root of the existing `Pegasus-Express` repository (not the enclosing folder).
3. Replace matching files when GitHub reports duplicates.
4. Keep the existing repository files `airports-timezones.json`, `icon-512.png`, and `pegasus-express-card.png` if they are not included in this package. In particular, `airports-timezones.json` is used by the ICAO/time-zone lookup.
5. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save if Pages is not already configured.

## Package contents

- `index.html` — V1.6.3 application (styles, scripts, embedded data and artwork).
- `manifest.webmanifest` — install metadata.
- `service-worker.js` — app-shell caching; cache name bumped for V1.6.3.
- `app-icon-192.png`, `app-icon-512.png`, `apple-touch-icon.png` — install and home-screen icons.
- `assets/pegasus-express-original.png` — retained full-resolution Pegasus Express artwork.
- `.nojekyll` — disables GitHub Pages Jekyll processing.

## Notes

- No build step or package manager is required; the application is a static site.
- Serve from the repository root so relative PWA paths resolve correctly.
- Browser-local saved profiles and preferences remain in that browser's local storage; publishing the site does not migrate local browser data.
- This ZIP does not replace or remove the repository-specific `airports-timezones.json`, `icon-512.png`, or `pegasus-express-card.png` files. Keep those existing files in the repository when uploading this package.
