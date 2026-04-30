# Cyber Intelligence Portfolio

Premium bilingual single-page portfolio for a cyber intelligence builder. The site is designed for GitHub Pages and works without a build step, external icon libraries, paid services, or runtime dependencies.

## What It Includes

- English and Arabic interface with automatic browser-language detection.
- Manual language switcher.
- Cyber intelligence and OSINT positioning.
- Defensive, regulatory, and network-security analysis sections.
- Flagship private project section.
- Future mobile oversight system concept.
- Open-source security tooling direction.
- Motion-editing / visual craft section.
- Animated radar, particle background, sharp dashboard UI, sticky navigation, mobile menu, and active section tracking.
- Local inline SVG icons and local SVG metadata assets.
- SEO and OpenGraph metadata.

## File Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── favicon.svg
│   └── og-image.svg
├── .nojekyll
└── README.md
```

## Run Locally

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Deploy to GitHub Pages

For a user/organization GitHub Pages site:

1. Create a public repository named `<username>.github.io`.
2. Place these files in the repository root.
3. Commit and push to the default branch.
4. Open **Settings > Pages** in GitHub.
5. Select **Deploy from branch**.
6. Choose the default branch and `/ root`.
7. Wait for the Pages deployment to finish.

## Customization

Edit public profile links and contact surfaces in `script.js`:

```js
const socialLinks = {
  github: "...",
  x: "...",
  website: "...",
  email: "mailto:...",
};
```

Most bilingual content also lives in `script.js` inside the `content.en` and `content.ar` objects.

## Technical Notes

- No React, Vite, npm install, CDN, or icon dependency is required.
- `.nojekyll` is included so GitHub Pages serves the site as plain static files.
- The project is intentionally static for speed, resilience, and easy deployment.
- Animations respect `prefers-reduced-motion`.
