PEGASUS EXPRESS CALCULATOR — GITHUB RELEASE
=============================================

FILES
-----
index.html
    Main offline-capable application. Keep this file in the repository root.

airports-timezones.json
    Bundled airport/time-zone lookup database used by the SOE profile ICAO
    time-zone lookup. Keep this file beside index.html. The app requests it
    with a relative path (./airports-timezones.json).

DEPLOYMENT (GITHUB PAGES)
-------------------------
1. Create or open the Pegasus-Express GitHub repository.
2. Upload index.html and airports-timezones.json to the repository root.
3. In Settings > Pages, select Deploy from a branch.
4. Select the main branch and /(root), then Save.
5. Open the published site. Test with the network disconnected after the
   first load to confirm the app and bundled airport database work offline.
6. If replacing an existing release, keep the file names exactly as shown.

AIRPORT DATABASE SCOPE
----------------------
The bundled lookup includes the existing civil airport references plus a
curated set of publicly identifiable U.S. Air Force, Navy, Army, Marine Corps,
joint-use, and allied/NATO military airfields.

This is NOT a certified or exhaustive list of every military installation or
every military aerodrome worldwide. Military OneSource explicitly notes that
its installation directory does not list every installation. Some bases do
not have a distinct ICAO identifier; some use a shared civilian ICAO code;
some are not public-use aerodromes; and some identifiers/time-zone mappings
may change. Entries are provided for convenience in local-time conversion,
not for navigation, flight planning, clearance, or operational use.

AIRPORT DATA SOURCES / REFERENCE
--------------------------------
- U.S. Department of Defense MilitaryINSTALLATIONS directory:
  https://installations.militaryonesource.mil/view-all
  The directory is a useful cross-service installation reference, but it
  expressly states that it does not list every installation.
- FAA Joint Civilian/Military Airports:
  https://www.faa.gov/airports/planning_capacity/joint_use_airports
- OurAirports public-domain airport data and data dictionary:
  https://ourairports.com/data/
  https://ourairports.com/help/data-dictionary.html

TIME ZONES
----------
Time-zone values use IANA Time Zone Database identifiers (for example,
America/Los_Angeles and Asia/Tokyo). Verify the ICAO code and local time-zone
mapping against current authoritative aeronautical information before use.

VERSION
-------
Pegasus Express Calculator V1.3.13 baseline.
Airport reference database expanded for this GitHub release.
