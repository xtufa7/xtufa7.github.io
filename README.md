# 0xTuffa7 Portfolio

Premium single-page personal website for **0xTuffa7 / xtufa7**, focused on defensive cybersecurity, regulatory monitoring, DNS intelligence, AI-assisted security systems, and the private GodEye project.

## Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── favicon.svg
│   └── og-image.svg
└── .nojekyll
```

## Run Locally

Because this site is dependency-free, you can open `index.html` directly in a browser.

For a local server:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Deploy to GitHub Pages

1. Create or use the repository named `0xtufa7.github.io`.
2. Add these files to the repository root.
3. Commit and push to the default branch.
4. In GitHub, open **Settings > Pages**.
5. Set the source to deploy from the default branch root.
6. Visit `https://0xtufa7.github.io`.

## Editing Links

Update public profile links in `index.html` and contact values in `script.js`.

Current configured links:

- GitHub profile: `https://github.com/xtufa7`
- Website: `https://0xtufa7.github.io`
- GodEye repository: marked as coming soon / private

## Notes

- No external icon libraries.
- No paid services.
- No build step required.
- Includes responsive layout, sticky navigation, active section highlighting, animated radar/eye visual, roadmap timeline, skill chips, and SEO/OpenGraph metadata.
