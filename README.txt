PEGASUS EXPRESS CALCULATOR — V1.3.6
======================================

GITHUB PAGES / OFFLINE PACKAGE

PACKAGE CONTENTS
----------------
index.html                 Pegasus Express Calculator V1.3.6
service-worker.js          Offline cache and update worker
manifest.webmanifest       Progressive Web App metadata
airports-timezones.json    Bundled airport/time-zone reference data
app-icon-192.png           PWA icon
icon-512.png               High-resolution PWA icon
apple-touch-icon.png       Apple Home Screen icon
README.txt                 Deployment instructions

GITHUB DEPLOYMENT
-----------------
1. Download and extract this ZIP file.
2. Open your Pegasus Express GitHub repository.
3. Upload ALL files from this package to the repository root.
4. Replace the existing files when GitHub asks.
5. Commit the changes to the branch configured for GitHub Pages.
6. In repository Settings > Pages, confirm the correct branch and /(root)
   (or the existing configured publishing folder).
7. Open the published HTTPS site while connected to the internet.

OFFLINE USE
-----------
The first visit requires an internet connection so the service worker can
install and cache the app shell. After the app has loaded successfully once,
reopen it while offline to use the cached application.

UPDATE CHECKING
---------------
The Check for Updates controls are included on all eight tabs. Update checks
require HTTPS and an internet connection. The service worker precaches the
new app shell, activates the new worker, and removes older Pegasus Express
caches during activation. Reload the app after the update is ready or the
browser indicates that the new version is available.

AIRPORT DATA
------------
The bundled airport/time-zone JSON is a convenience reference for the app.
It is not an approved flight-planning source or an exhaustive inventory of
military aerodromes. Verify identifiers, time-zone data, and operational
information against current authoritative sources before use.

NOTES
-----
- Keep the filenames unchanged.
- Upload the files to the same repository root; do not upload the ZIP itself
  as the app.
- Service workers require HTTPS (GitHub Pages provides HTTPS).
- Browser caching may delay the visible update. If needed, close the old app
  tab and reopen the published site.

VERSION
-------
V1.3.6 — SOE footer placement correction and consistent footer across tabs.
