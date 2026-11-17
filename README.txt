# Pegasus Express Calculator — V1.4.55

GitHub Pages-ready package for the accepted Pegasus Express Calculator V1.4.55 baseline.

## Package contents

- `index.html` — calculator application (V1.4.55 baseline)
- `manifest.webmanifest` — installable web-app metadata
- `service-worker.js` — app-shell caching, offline launch, and update support
- `app-icon-192.png` — 192×192 app icon
- `app-icon-512.png` — 512×512 app icon
- `apple-touch-icon.png` — iPhone/iPad Home Screen icon
- `pegasus-express-card.png` — original full-resolution Pegasus Express artwork
- `README.md` — these instructions

## Publish with GitHub Pages

1. Download and unzip this package.
2. Open the extracted `Pegasus_Express_Calculator_V1.4.55_GITHUB` folder.
3. Upload the **contents of that folder** to the root of your GitHub repository (not the containing folder itself).
4. Commit and push the files.
5. In the repository, open **Settings → Pages**.
6. Under Build and deployment, select **Deploy from a branch**, choose your publishing branch (commonly `main`) and **/(root)**, then save.
7. Open the published GitHub Pages URL while online and allow the first load to finish.

Keep the filenames and relative folder structure unchanged. The app expects the manifest, service worker, and icon files beside `index.html`.

## Install on iPhone or iPad

1. Open the GitHub Pages URL in Safari.
2. Tap **Share**.
3. Choose **Add to Home Screen**.
4. Confirm the name and tap **Add**.

## Install on desktop

Use the install option in a supported browser (for example, the install icon in Chrome's address bar or the browser's app-install menu).

## Offline use and updates

- The first visit must be completed while online.
- The service worker caches the application shell and required artwork/icons.
- After a new version is published, open the site online to allow the browser to check for and install the updated app shell.
- If an installed copy appears stale, close and reopen it after visiting the site online. Browser service-worker update timing can vary by platform.

## Version baseline

This package uses the accepted `Pegasus_Express_Calculator_V1.4.55_FIXED.html` as its source. No calculator feature changes are intended by packaging.
