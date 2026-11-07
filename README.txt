PEGASUS EXPRESS CALCULATOR — OFFLINE V5

WHAT CHANGED
- Improved the Takeoff Date field sizing/alignment on mobile Safari.
- Added a bundled offline ICAO airport/time-zone database (airports-timezones.json).
- Airport lookups check the bundled database first; known airports work without internet.
- The selected date is used with the IANA time-zone identifier, so daylight-saving offsets are calculated for that date.
- Airports not in the bundled database still attempt the existing online lookup; if offline, use the manual Zulu correction or Phone TZ.
- Existing calculator calculations, profiles, design, and footer are preserved.

DEPLOY
1. Upload the CONTENTS of this folder to the root of the GitHub Pages repository (not the enclosing folder).
2. Ensure index.html, service-worker.js, manifest.webmanifest, app-icon-192.png, app-icon-512.png, and airports-timezones.json are all at repository root.
3. Commit the changes and wait for GitHub Pages to finish deploying.
4. Open the site online once and allow the new service worker to activate and cache all files.
5. Test offline by enabling airplane mode and reopening the site.

AIRPORT DATA
- Bundled lookup is keyed by ICAO code. It includes a curated starter set of frequently used civil and military airports.
- It is not an authoritative or exhaustive aeronautical database. Verify airport identifiers and time zones against current operational sources.
- Time-zone rules are evaluated by the browser's IANA time-zone database for the selected date.


V6 AIRPORT DATABASE
- Expanded the bundled offline airport/time-zone database from 81 to 174 ICAO entries.
- Adds additional US military bases, European military airfields, Middle East operating locations, Pacific/Indo-Pacific locations, and tanker divert/alternate airports.
- Time zones use IANA identifiers and are evaluated for the selected Zulu date, including daylight-saving transitions where applicable.
- Airports not in the bundled list may still use the existing online lookup when connected.
