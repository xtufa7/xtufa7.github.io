# Cyber Intelligence Portfolio

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=140&color=0:1C1C1C,100:2D5BFF&section=header"/>

<h1>🛰️ Cyber Intelligence Portfolio</h1>

<p>
A clean bilingual single-page portfolio for a cyber intelligence builder,
focused on projects, tools, research direction, and contact links.
</p>

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=18&pause=1000&color=2D5BFF&center=true&vCenter=true&width=720&lines=Cyber+intelligence+builder...;OSINT+and+network+analysis...;Defensive+security+tooling...;Projects,+contact,+and+support+in+one+place..." />

<br><br>

<img src="https://img.shields.io/badge/type-Portfolio-2D5BFF?style=for-the-badge">
<img src="https://img.shields.io/badge/hosting-GitHub%20Pages-1C1C1C?style=for-the-badge">
<img src="https://img.shields.io/badge/build-static%20site-2D5BFF?style=for-the-badge">
<img src="https://img.shields.io/badge/languages-EN%20%2F%20AR-1C1C1C?style=for-the-badge">

<br><br>

<img src="https://media.tenor.com/8Qxg8vS4Y9AAAAAi/loading.gif" width="75">

</div>

---

## ✨ Overview

Cyber Intelligence Portfolio is a premium bilingual single-page website built for GitHub Pages.

It is designed to present a personal technical identity without turning the site into a heavy resume.
The focus is simple: who I am, what I build, where to find my work, and how to support future projects.

The site works without a build step, external icon libraries, paid services, or runtime dependencies.

---

## 🧩 What It Includes

* English and Arabic interface with automatic browser-language detection
* Manual language switcher
* Cyber intelligence and OSINT positioning
* Defensive, regulatory, and network-security analysis sections
* Flagship private project section
* Future mobile oversight system concept
* Open-source security tooling direction
* Motion-editing / visual craft section
* Lightweight radar visual
* Sharp dashboard-style UI
* Sticky navigation
* Mobile menu
* Active section tracking
* Local inline SVG icons
* Local SVG metadata assets
* SEO and OpenGraph metadata

---

## 🗂️ File Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── favicon.svg
│   ├── site-icon.svg
│   └── og-image.svg
├── .nojekyll
└── README.md
```

---

## ▶️ Run Locally

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

---

## 🚀 Deploy to GitHub Pages

For a user or organization GitHub Pages site:

1. Create a public repository named `<username>.github.io`.
2. Place these files in the repository root.
3. Commit and push to the default branch.
4. Open **Settings > Pages** in GitHub.
5. Select **Deploy from branch**.
6. Choose the default branch and `/ root`.
7. Wait for the Pages deployment to finish.

---

## 🎛️ Customization

Edit public profile links, email, and contact surfaces in `script.js`:

```js
const contactEmail = "your@email.com";

const socialLinks = {
  github: "...",
  x: "...",
  instagram: "...",
  email: `mailto:${contactEmail}`,
};
```

Most bilingual content also lives in `script.js` inside the `content.en` and `content.ar` objects.

To replace the navbar or favicon mark, swap:

```text
assets/site-icon.svg
```

with another local SVG using the same filename.

---

## 💙 Support Section

The portfolio can include a small support area for people who want to help keep projects active.

Recommended support style:

* Keep it optional
* Keep it subtle
* Avoid aggressive donation wording
* Use a clean card with wallet links or QR codes
* Place it near the end of the page, not at the top

Suggested wording:

```text
Support the work

If you find my tools or research useful, you can support future development.
Every bit helps keep the projects active, independent, and improving.
```

---

## 🛠️ Technical Notes

* No React, Vite, npm install, CDN, or icon dependency is required
* `.nojekyll` is included so GitHub Pages serves the site as plain static files
* The project is intentionally static for speed, resilience, and easy deployment
* Animations respect `prefers-reduced-motion`

---

<div align="center">

<img src="https://media.tenor.com/DimzPZMypFcAAAAi/love-heart.gif" width="65">

### 💙 Made with care, curiosity, and late-night debugging

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=15&pause=1000&color=D5D8DE&center=true&vCenter=true&width=520&lines=Built+to+stay+clean...;Built+to+feel+personal...;Built+without+heavy+dependencies...;Made+for+projects,+links,+and+future+ideas..." />

<br>

⭐ If you like the project, consider giving it a star

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&height=120&color=0:2D5BFF,100:1C1C1C&section=footer"/>

</div>
