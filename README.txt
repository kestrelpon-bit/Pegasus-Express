PEGASUS EXPRESS V11 — GITHUB PAGES PACKAGE

PACKAGE CONTENTS
- index.html: Pegasus Express V9 calculator with responsive five-tab navigation and update notification
- manifest.webmanifest: installable app metadata and icon declarations
- service-worker.js: offline app-shell caching and V11 cache version
- app-icon-192.png and app-icon-512.png: supplied Pegasus Express artwork
- apple-touch-icon.png: 180 x 180 iPhone Home Screen icon
- airports-timezones.json: bundled airport ICAO/time-zone database

PUBLISH WITH GITHUB PAGES
1. Unzip this package.
2. Upload all package contents to the root of your GitHub repository, replacing files with matching names.
3. Commit the changes.
4. Confirm GitHub Pages is publishing from the intended branch and /(root).

V9 TAB LAYOUT
- SOE, FRAG, BINGO, Cold Wx, and CORONET appear as five equal-width tabs.
- The tabs remain in one row on desktop and mobile; mobile sizing is reduced to fit the available width.
- Horizontal tab scrolling is not used.

AUTOMATIC UPDATE BEHAVIOR
- The app checks for a newer service worker when it opens and when the installed app returns to the foreground.
- New app-shell files download in the background when online.
- The current session is not automatically interrupted.
- When the new service worker takes control, the app displays an "update ready" notice.
- Tap Reload to load the updated app.
- The service worker caches the app shell, icons, and airport database for offline use.
- Existing app data stored by the calculator is not deliberately cleared by the update code.

IPHONE HOME SCREEN ICON
1. Open the published HTTPS site in Safari.
2. Delete the old Pegasus Express Home Screen shortcut if replacing an earlier icon.
3. Refresh the website in Safari.
4. Tap Share, then Add to Home Screen.
5. The page declares apple-touch-icon.png at 180 x 180 pixels.

OFFLINE USE
- Open the site online at least once and allow the service worker to install.
- After a release is published, open the app online so it can check for updates.
- An update notice appears when the new worker takes control; tap Reload to switch the open page to the new version.

V9 DEFAULTS / INPUT FIX
- Takeoff/LFA date defaults to today's Zulu date when a profile has no saved date.
- New Coronet Tracker setup starts with 0 ARs and 0 receivers; both controls allow zero.
- Estimated travel time to destination starts visually blank. A blank value is calculated as 00+00.
- Coronet editable numeric fields no longer rebuild the table on every keystroke; totals update in place so multi-digit and decimal input can be entered normally.

V10 CHANGE
- Coronet Tracker defaults to 1 AR and 1 receiver for a fresh setup. Both counts can still be set to 0.


V11 CHANGE — ZULU DATE DEFAULT
- On every app launch, the active SOE profile's DATE (ZULU) field is initialized to the current UTC/Zulu calendar date, even if that profile had an older date saved from a previous session.
- The date remains editable during the session. A manually selected date is saved and remains in effect until the app is launched again.
- Other saved profiles are not changed merely by launching the app.
