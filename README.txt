PEGASUS EXPRESS v1.0.1 — GITHUB PAGES PACKAGE

PACKAGE CONTENTS
- index.html: Pegasus Express calculator, release v1.0.1
- manifest.webmanifest: installable app metadata and icon declarations
- service-worker.js: offline app-shell caching and update detection; cache namespace matches v1.0.1
- app-icon-192.png and app-icon-512.png: Pegasus Express app artwork
- apple-touch-icon.png: 180 x 180 iPhone Home Screen icon
- airports-timezones.json: bundled airport ICAO/time-zone database

PUBLISH WITH GITHUB PAGES
1. Unzip this package.
2. Upload all package contents to the root of your GitHub repository, replacing files with matching names.
3. Commit the changes.
4. Confirm GitHub Pages is publishing from the intended branch and /(root).
5. Open the published app online once so the new service worker can install.

VERSIONING
- Current release: 1.0.1
- This is a patch release based on v1.0.0.
- The visible app version is maintained in index.html.
- The service-worker.js cache namespace is updated with each release. The browser detects a changed service worker; it does not compare semantic version numbers.

UPDATE BEHAVIOR
- The app checks for a newer service worker when it opens, when it returns to the foreground, and when CHECK FOR UPDATES is tapped.
- The browser compares the hosted service-worker.js with the installed worker.
- When the worker changes, the new app shell is downloaded and installed in the background while online.
- The current session is not automatically interrupted.
- When the new worker takes control, the app displays an update-ready notice. Tap Reload when ready.
- An internet connection is required to check for updates. The installed app remains available offline using its cached files.
- The service worker caches the app shell, icons, and airport database for offline use.
- Existing calculator data is not deliberately cleared by the update code.

OFFLINE USE
- Open the site online at least once and allow the service worker to install.
- After a release is published, open the app online so it can check for updates.
- If an update notice appears, tap Reload to load the updated app.

IPHONE HOME SCREEN ICON
1. Open the published HTTPS site in Safari.
2. If replacing an earlier icon, remove the old Pegasus Express Home Screen shortcut.
3. Refresh the website in Safari.
4. Tap Share, then Add to Home Screen.
5. The page declares apple-touch-icon.png at 180 x 180 pixels.

V1.0.1 CHANGES
- Retains the original Pegasus Express header and design; no mascot header.
- AR Fuel Summary BALANCE values are color-coded dynamically: negative red, positive green, and zero yellow.
- Color coding applies to each AR balance and the TOTAL balance.

RETAINED V1.0.0 FEATURES
- Five-tab navigation: SOE, FRAG, BINGO, Cold Wx, and CORONET.
- Coronet Tracker AR summary uses LABELS and TOTAL as the first two columns; both remain frozen during horizontal scrolling.
- Receiver table's first column remains frozen during horizontal scrolling.
- Coronet FRAGGED Offload inputs show a faint 0.0 placeholder without treating it as entered data.
- FRAGGED summary row labels are FRAG, ACTUAL, and BALANCE.
- Takeoff Time displays a faint 0000 placeholder when empty; the actual field remains blank until entered.
- Small CHECK FOR UPDATES control is displayed at the bottom beside the app version.
- Existing SOE calculator, FRAG, BINGO, Cold Wx, Coronet calculations, profile handling, airport time-zone data, and offline behavior are retained.
