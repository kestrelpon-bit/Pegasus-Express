# Pegasus Express Calculator — V1.6.4

GitHub Pages-ready package for Pegasus Express Calculator.

## Deploy to the existing GitHub repository

1. Extract this ZIP.
2. Upload the **contents** of the `Pegasus_Express_Calculator_V1.6.4_GITHUB` folder to the root of the existing `Pegasus-Express` repository (not the enclosing folder).
3. Replace matching files when GitHub reports duplicates.
4. **Keep the existing repository files** `airports-timezones.json`, `icon-512.png`, and `pegasus-express-card.png` if they are not already present. `airports-timezones.json` is required by the ICAO/time-zone lookup and is intentionally not fabricated or replaced in this package.
5. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save if Pages is not already configured.

## Package contents

- `index.html` — V1.6.4 application (styles, scripts, embedded data and artwork).
- `manifest.webmanifest` — install metadata.
- `service-worker.js` — app-shell caching; cache name bumped for V1.6.4.
- `app-icon-192.png`, `app-icon-512.png`, `apple-touch-icon.png` — install and home-screen icons.
- `assets/pegasus-express-original.png` — retained full-resolution Pegasus Express artwork.
- `.nojekyll` — disables GitHub Pages Jekyll processing.

## Notes

- No build step or package manager is required; the application is a static site.
- Serve from the repository root so relative PWA paths resolve correctly.
- Browser-local saved profiles and preferences remain in that browser's local storage; publishing the site does not migrate local browser data.
- This ZIP updates the V1.6.4 app files and does not delete or replace repository-specific files not included in the ZIP. Keep the existing `airports-timezones.json`, `icon-512.png`, and `pegasus-express-card.png` files in the repository.
