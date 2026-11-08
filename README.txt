# Pegasus Express Calculator — GitHub Pages / Offline Package

## Upload to GitHub
1. Create or open your GitHub repository.
2. Upload **the contents of this folder** to the repository root (not the folder itself).
3. Confirm `index.html`, `service-worker.js`, `manifest.webmanifest`, `airports-timezones.json`, and both app icons are at the top level.
4. In GitHub, open **Settings → Pages**. Select **Deploy from a branch**, choose your deployment branch (usually `main`) and **/(root)**, then Save.
5. Open the published HTTPS Pages address once while online. Allow a few seconds for the service worker to install and cache the app.
6. Open the site again, then test by enabling airplane mode. The calculator and bundled airport time-zone list should continue to work.

## iPhone installation
Open the published HTTPS site in Safari → Share → **Add to Home Screen**. Launch it from the new home-screen icon. Visit once while online before relying on offline access.

## Offline behavior
- The calculator HTML, app icons, manifest, and bundled airport database are cached by the service worker.
- The bundled database contains the 77 airport codes from the previously selected offline list.
- Airport codes outside that bundled list may use the existing online lookup when connected; they cannot be resolved offline unless added to the bundled database.
- First visit must be online over HTTPS for the service worker to install. Opening the HTML directly as a local file (`file://`) does not enable service-worker offline caching.

## Airport database note
The previously supplied list included `SAE`, which is not a standard four-letter ICAO airport identifier and could not be confidently matched to an airport. It is retained as a placeholder with UTC fallback; please do not rely on it for local-time conversion. All other listed codes have named airport/time-zone entries.

## Operational note
This is a convenience calculator, not an approved operational source. Independently verify all calculations, airport time zones, and applicable limitations against current approved publications and procedures before operational use.
