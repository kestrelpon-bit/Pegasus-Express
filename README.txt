# Pegasus Express Calculator — V1.6.2

GitHub Pages-ready package for Pegasus Express Calculator.

## Deploy to GitHub Pages

1. Create or open the repository that will host Pegasus Express.
2. Upload the **contents** of this folder to the repository root (not the enclosing ZIP).
3. In **Settings → Pages**, select **Deploy from a branch**, choose the deployment branch (usually `main`) and folder `/ (root)`, then save.
4. Open the Pages URL over HTTPS. The app can then be installed as a PWA on supported browsers.

## Package contents

- `index.html` — complete self-contained application (styles, scripts, embedded data and artwork).
- `manifest.webmanifest` — install metadata.
- `service-worker.js` — app-shell caching and update support.
- `app-icon-192.png`, `app-icon-512.png`, `apple-touch-icon.png` — install and home-screen icons.
- `assets/pegasus-express-original.png` — full-resolution Pegasus Express artwork retained as an asset.

## Notes

- No build step or package manager is required; the application is a static site.
- Serve from the repository root so the relative PWA paths resolve correctly.
- Browser-local saved profiles and preferences remain in that browser's local storage; publishing the site does not migrate local browser data.
