PEGASUS EXPRESS CALCULATOR — OFFLINE V4

WHAT CHANGED
- Navigation requests now return the canonical cached ./index.html directly.
- The service worker no longer calls fetch(event.request) for navigation requests.
- Any recovery network request explicitly uses redirect: "follow".
- The root URL is not precached; Cloudflare root redirects are avoided.
- Added a favicon reference using the existing app icon.
- Calculator HTML, styling, embedded artwork, and calculations are preserved from V3.

DEPLOY
1. Extract this ZIP.
2. In Cloudflare, choose New deployment and upload the CONTENTS of this folder.
3. Ensure index.html, service-worker.js, manifest.webmanifest, and both app icons are all at the deployment root.
4. Deploy and open the site online.
5. Keep internet enabled. Open the site, wait for it to load, and refresh once.
6. In DevTools > Application > Service Workers, confirm the active source is service-worker.js.
7. In DevTools > Application > Cache Storage, confirm pegasus-express-app-shell-v4 contains all four files.
8. Close the site tab and open the site in a new tab. In Console, check:
   navigator.serviceWorker.controller?.scriptURL
   It should return the service-worker.js URL.
9. Only after that, enable Offline in DevTools and test a normal refresh.

IPHONE
- Open the deployed site in Safari while online.
- Share > Add to Home Screen.
- Launch the installed icon once while online, then test in Airplane Mode.

LIMITATION
The calculator shell and cached same-origin resources can be available offline. The current external airport lookup API still requires internet.
