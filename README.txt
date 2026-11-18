# Pegasus Express Calculator — V1.4.73

Complete GitHub Pages package for Pegasus Express Calculator V1.4.73.

## Package contents

- `index.html` — full calculator application (V1.4.73)
- `manifest.webmanifest` — installable web-app metadata
- `service-worker.js` — offline app-shell caching and update support
- `app-icon-192.png` — 192×192 app icon
- `app-icon-512.png` — 512×512 app icon
- `apple-touch-icon.png` — iPhone/iPad Home Screen icon
- `pegasus-express-card.png` — original full-resolution Pegasus Express artwork

## Publish with GitHub Pages

1. Download and unzip this package.
2. Upload the **contents** of the `Pegasus_Express_Calculator_V1.4.73_GITHUB` folder to the root of your GitHub repository.
3. Commit and push the files.
4. In GitHub, open **Settings → Pages**.
5. Under Build and deployment, select **Deploy from a branch**, choose your publishing branch (commonly `main`) and `/(root)`, then save.
6. Open the published GitHub Pages URL while online and allow the first load to finish.

Keep the filenames and relative paths unchanged. The manifest and service worker expect the files beside `index.html`.

## Install on iPhone or iPad

1. Open the GitHub Pages URL in Safari.
2. Tap **Share**.
3. Choose **Add to Home Screen**.
4. Confirm the name and tap **Add**.

## Install on desktop

Use the install option in a supported browser, such as the install icon in Chrome's address bar or the browser's app-install menu.

## Offline use and updates

- The first visit must complete while online so the service worker can install and cache the app shell.
- After publishing a newer version, open the site online to allow the browser to check for and install the updated app shell.
- If an installed copy appears stale, close and reopen it after visiting the site online. Service-worker update timing varies by platform.

## V1.4.73 change

- Changed the diagonal hash marks on the AR ON / ETOPS OFF minimum-fuel sections to **yellow** when regular calculated BINGO exceeds 35.00K.
- Retained the blue minimum-fuel sections and their Standpipe Lim / Fuel Pump Lim labels.
- Retained the prior V1.4.71 functionality and assets.


## V1.4.73 change
- Extended the gold-and-blue diagonal hash pattern to AR ON / ETOPS ON when final ETOPS BINGO exceeds 35K. The same pattern remains in AR ON / ETOPS OFF when regular calculated BINGO exceeds 35K.
