# Pegasus Express Calculator — V1.6.7

KC-46A flight planning and crew utility calculator.

## GitHub Pages deployment

1. Upload the **contents** of this folder to the root of the `main` branch of the `Pegasus-Express` repository.
2. Replace matching files when prompted.
3. Preserve existing repository data files that are not included in this package, especially `airports-timezones.json`.
4. In GitHub, open **Settings → Pages** and confirm deployment from the `main` branch and `/ (root)`.
5. After deployment, reload the site. If an installed PWA shows an older version, close it and reopen after the service worker updates.

## V1.6.7 updates

- Improved mobile More-tab card label wrapping, including TIME CALCULATOR.
- Refined mobile bottom navigation label sizing and spacing.
- Increased mobile SOE image title, profile name, event names, offsets, and Local/Zulu time typography; desktop export sizing remains unchanged.

## Package contents

- `index.html` — Pegasus Express Calculator V1.6.7
- `manifest.webmanifest` — PWA manifest
- `service-worker.js` — offline app shell and V1.6.7 cache version
- `app-icon-192.png`, `app-icon-512.png`, `apple-touch-icon.png` — app icons
- `assets/pegasus-express-original.png` — original artwork
- `.nojekyll` — GitHub Pages configuration

## Existing repository files to retain

This package does not replace the repository's `airports-timezones.json`, `icon-512.png`, or `pegasus-express-card.png`. Keep those existing files if your current app uses them.
