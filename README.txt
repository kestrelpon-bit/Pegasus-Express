PEGASUS EXPRESS CALCULATOR — V1.3.14
======================================

THIS IS THE COMPLETE GITHUB PAGES PACKAGE.
Upload every file in this folder to the ROOT of the repository. Do not omit
service-worker.js, manifest.webmanifest, or the icon files.

FILES
-----
index.html
    Main calculator application.

service-worker.js
    Registers the offline app shell, caches the application and airport
    database, checks for new releases, and applies updates when the user
    chooses Reload.

manifest.webmanifest
    Progressive Web App metadata for Add to Home Screen / installation.

airports-timezones.json
    Bundled airport/time-zone reference database. Keep beside index.html.

app-icon-192.png
icon-512.png
apple-touch-icon.png
    Android/PWA and Apple home-screen icons.

GITHUB PAGES DEPLOYMENT
-----------------------
1. Open the Pegasus Express GitHub repository.
2. Upload ALL files in this package to the repository root.
3. Keep the filenames exactly as provided.
4. In Settings > Pages, choose Deploy from a branch.
5. Select the main branch and /(root), then Save.
6. Wait for GitHub Pages to publish the new release.
7. Open the site once while online so the new service worker can install.
8. Test the app offline after the first successful load.

UPDATE BUTTON
-------------
The CHECK FOR UPDATES button asks the browser to check the registered
service-worker script for a newer version. When a new worker is installed,
the app displays an update-ready notice. Selecting Reload activates the
waiting worker and reloads the calculator with the new release.

If an older service worker is already installed, the browser may need one
online visit to fetch this new service-worker.js. If the app still shows an
old version, close all Pegasus Express tabs and reopen the GitHub Pages URL.
On iPhone/iPad, if the Home Screen copy remains stale, remove that old
Home Screen shortcut and add the published site again after the first
successful online visit.

AIRPORT DATABASE
----------------
The same expanded airport reference set is used by the standard ICAO lookup
and the PMCR time-zone lookup. It includes the existing civil references and
curated publicly identifiable U.S. Air Force, Navy, Army, Marine Corps,
joint-use, and allied/NATO military airfields.

The list is not a certified or exhaustive inventory of every military
installation or aerodrome. Some installations do not have a distinct public
ICAO identifier; some use shared civilian identifiers. Confirm current
identifiers and time-zone data using authoritative aeronautical information
before operational use. This app is a planning convenience only and is not
a substitute for approved flight-planning sources.

DATA REFERENCES
---------------
U.S. Department of Defense MilitaryINSTALLATIONS:
https://installations.militaryonesource.mil/view-all

FAA Joint Civilian/Military Airports:
https://www.faa.gov/airports/planning_capacity/joint_use_airports

OurAirports public airport data:
https://ourairports.com/data/

VERSION
-------
V1.3.14 — updater/service-worker package correction.
Based on the V1.3.13 calculator with no intended calculator logic changes.
