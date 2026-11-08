PEGASUS EXPRESS V8 — GITHUB PAGES PACKAGE

PACKAGE CONTENTS
- index.html: Pegasus Express application
- manifest.webmanifest: installable app metadata
- service-worker.js: offline app-shell caching (V8 cache)
- app-icon-192.png and app-icon-512.png: standard app icons
- apple-touch-icon.png: dedicated 180 x 180 iPhone Home Screen icon
- airports-timezones.json: bundled airport ICAO/time-zone database for offline lookup

PUBLISH WITH GITHUB PAGES
1. Download and unzip this package.
2. Open your GitHub repository.
3. Upload the CONTENTS of this folder to the repository root, replacing files with matching names.
4. Commit the changes.
5. Confirm GitHub Pages is publishing from the intended branch and /(root).

IPHONE HOME SCREEN ICON
1. Open the published HTTPS site in Safari (not an in-app browser).
2. Remove the old Pegasus Express Home Screen shortcut.
3. Open the site, refresh it, tap Share, then Add to Home Screen.
4. The dedicated apple-touch-icon.png is declared at 180 x 180 pixels.

OFFLINE USE
- Open the published site online at least once and reload after the service worker installs.
- The app shell, icons, and bundled airport time-zone database are cached for offline use.
- If you publish a later version, open the site online to receive the update.

VERSION
This package is based on the supplied V7 GitHub package. The application interface and calculator logic are otherwise unchanged.
