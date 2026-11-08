PEGASUS EXPRESS — GITHUB PAGES PACKAGE

Files
- index.html: application entry point
- manifest.webmanifest: installable app metadata
- service-worker.js: offline caching
- app-icon-192.png / app-icon-512.png: app icons

Deploy
1. Create or open the GitHub repository.
2. Upload the CONTENTS of this folder to the repository root (not the folder itself).
3. In GitHub, open Settings > Pages.
4. Select Deploy from a branch, choose the main branch and /(root), then Save.
5. Open the published Pages URL once while online so the service worker can install and cache the app.

Offline use
- The app must be opened once online from its GitHub Pages HTTPS address before offline use.
- After the first successful load and service-worker installation, reload once; then the cached app shell is available offline.
- Browser storage/site data must remain enabled.

Notes
- This package preserves the supplied V5 HTML application.
- The service worker caches the app shell and same-origin resources as they are requested.
- GitHub Pages hosting is HTTPS, which is required for service workers outside localhost.
