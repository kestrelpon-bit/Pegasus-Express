PEGASUS EXPRESS CALCULATOR — V1.2.2
===================================

COMPLETE GITHUB PAGES PACKAGE
-----------------------------
This folder contains the complete deployable app package, including the
V1.2.2 application and its install/offline support files.

FILES
-----
index.html              Main Pegasus Express Calculator app (V1.2.2)
service-worker.js       Offline caching and update handling (cache V1.2.2)
manifest.webmanifest    Installable web app settings
app-icon-192.png        Web app icon
icon-512.png            High-resolution web app icon
apple-touch-icon.png    iPhone / iPad Home Screen icon
.nojekyll               Prevents GitHub Pages Jekyll processing
README.txt              These deployment instructions

DEPLOY TO GITHUB PAGES
----------------------
1. Download and unzip this package.
2. Open the Pegasus-Express repository on GitHub.
3. Upload ALL CONTENTS of this folder to the repository root.
4. Replace the existing files when prompted.
5. Commit the changes and allow GitHub Pages to finish deploying.

IMPORTANT: Upload the files themselves, not the containing folder. Keep
all filenames unchanged and together in the published repository root.

OFFLINE USE AND UPDATES
-----------------------
Open the deployed app once while online so the service worker can install
and cache the app shell. After that, the app can load offline once cached.
The service worker cache is versioned for V1.2.2. When a new version is
deployed, the app's update handling can install the new cached version.

INSTALL ON IPHONE / IPAD
------------------------
1. Open the GitHub Pages app URL in Safari.
2. Tap Share.
3. Choose Add to Home Screen.
4. Confirm the name and tap Add.

NOTES
-----
This is the complete static GitHub Pages package. No build step or external
package installation is required. The app is a planning and calculation aid.
Verify all outputs against current approved publications, procedures, and
aircraft-specific guidance.
