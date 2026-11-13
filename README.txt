PEGASUS EXPRESS CALCULATOR — V1.2.1
===================================

GITHUB PAGES PACKAGE
--------------------
This folder contains the complete deployable app package.

FILES
-----
index.html              Main Pegasus Express Calculator app
service-worker.js       Offline caching and update handling
manifest.webmanifest    Installable web app settings
app-icon-192.png        Android / web app icon
icon-512.png            High-resolution app icon
apple-touch-icon.png    iPhone / iPad Home Screen icon

DEPLOY TO GITHUB PAGES
----------------------
1. Download and unzip this package.
2. Open the Pegasus-Express repository on GitHub.
3. Upload the contents of this folder to the repository root.
4. Replace the existing files when prompted.
5. Commit the changes and allow GitHub Pages to finish deploying.

IMPORTANT: Upload the files themselves, not the containing folder. The
index.html, service-worker.js, manifest, and icons must all be together
in the published repository root. Keep the filenames unchanged.

OFFLINE USE AND UPDATES
-----------------------
Open the deployed app once while online so the service worker can install
and cache the app shell. After that, the app can load offline once cached.
When a new version is deployed, use CHECK FOR UPDATES or reload after the
update notice appears. The service worker cache is versioned for V1.2.1.

INSTALL ON IPHONE / IPAD
-----------------------
1. Open the GitHub Pages app URL in Safari.
2. Tap Share.
3. Choose Add to Home Screen.
4. Confirm the name and tap Add.

NOTES
-----
The app is a planning and calculation aid. Verify all outputs against
current approved publications, procedures, and aircraft-specific guidance.
