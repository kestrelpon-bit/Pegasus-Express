PEGASUS EXPRESS CALCULATOR — V1.4.8
GitHub Pages / Offline Deployment Package

CONTENTS
- index.html: Pegasus Express Calculator V1.4.8
- service-worker.js: offline app shell and update checking support
- manifest.webmanifest: installable web app metadata
- app-icon-192.png / app-icon-512.png: app icons
- apple-touch-icon.png: iOS/iPadOS Home Screen icon

DEPLOY TO GITHUB PAGES
1. Download and unzip this package.
2. Open your GitHub repository: kestrelpon-bit/Pegasus-Express.
3. Upload the CONTENTS of this folder to the repository root (not the enclosing folder).
4. Ensure index.html, service-worker.js, manifest.webmanifest, and the three PNG icons are all at the repository root.
5. Commit the changes to the branch configured for GitHub Pages.
6. Open https://kestrelpon-bit.github.io/Pegasus-Express/ over HTTPS.

IMPORTANT
- Keep the filenames unchanged.
- The service worker caches the app shell for offline use and checks for updated files when online.
- The update prompt is user-controlled: after an update is detected, reload the app to apply it.
- After deployment, verify the footer reports V1.4.8 and test the Check for Updates control while online.
- For iPad testing, close the installed app completely and reopen it after the update is deployed.
