PEGASUS EXPRESS V6 — GITHUB PAGES PACKAGE

PACKAGE CONTENTS
- index.html: Pegasus Express V6 application
- manifest.webmanifest: installable app metadata
- service-worker.js: offline app-shell caching
- app-icon-192.png and app-icon-512.png: app icons
- airports-timezones.json: bundled airport ICAO/time-zone database for offline lookup

PUBLISH WITH GITHUB PAGES
1. Download and unzip this package.
2. Open your GitHub repository.
3. Upload the CONTENTS of this folder to the repository root.
   Do not upload the ZIP file or an extra enclosing folder.
4. In the repository, open Settings > Pages.
5. Under Build and deployment, select Deploy from a branch.
6. Select the main branch and /(root), then Save.
7. Open the published GitHub Pages HTTPS address while online.

OFFLINE USE
- Open the published site online at least once.
- Allow the service worker to install, then reload the page.
- The app shell and bundled airport time-zone database will then be available offline in that browser.
- Browser site data/storage must remain enabled.
- If you publish a later version, open the site online to receive the update.

VERSION
This package contains the supplied Pegasus Express V6 HTML and the provided airport time-zone database.
The HTML application is included as-is; this package adds GitHub Pages and
offline-app support files.
