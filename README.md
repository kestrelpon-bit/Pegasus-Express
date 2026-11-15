# Pegasus Express Calculator — V1.4.21

Complete GitHub Pages package, including the supplied Pegasus Express card artwork.

## Package contents
- `index.html` — calculator application
- `service-worker.js` — offline app-shell caching and update support
- `manifest.webmanifest` — installable web-app metadata
- `app-icon-192.png`, `app-icon-512.png` — app icons derived from the supplied artwork
- `apple-touch-icon.png` — iPhone/iPad Home Screen icon derived from the supplied artwork
- `pegasus-express-card.png` — original full-resolution supplied artwork
- `README.md` — deployment instructions

## Publish to GitHub Pages
1. Unzip this package.
2. Upload the **contents** of the `Pegasus_Express_Calculator_V1.4.20_GITHUB` folder to the root of your existing repository, replacing the old files.
3. Keep all filenames and the folder structure unchanged.
4. In **Settings → Pages**, confirm the repository is published from the intended branch and `/ (root)`.
5. Open the GitHub Pages URL and allow the first load to complete while online.

## Install on iPhone or iPad
Open the GitHub Pages URL in Safari, then choose **Share → Add to Home Screen**.

## Offline and updates
The service worker caches the app shell and icons for offline launch. The first visit requires an internet connection and a secure origin such as GitHub Pages.

## V1.4.21 change
Replaces the generated placeholder app icons with the supplied Pegasus Express card artwork. The Off-Station profile restoration from V1.4.20 remains included.
