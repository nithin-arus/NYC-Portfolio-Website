# Personal Portfolio Website

Personal portfolio site by **Nithin Aruswamy**, inspired by Massimo Vignelli's NYC Subway signage.

Built as a static site: one HTML file + CSS + React components loaded in the browser. No build step, no server, no database.

---

## What's in this folder

| File / Folder | What it is |
|---|---|
| `index.html` | Main entry page (served by default by every host) |
| `Portfolio.html` | Same as `index.html`, kept as a backup copy |
| `Portfolio Explorations.html` | Alternate design exploration page |
| `portfolio.css` | Main desktop styles |
| `portfolio-mobile.css` | Mobile/responsive styles (kicks in below 820px) |
| `styles.css` | Legacy styles (still referenced; safe to keep) |
| `portfolio/` | React component files (one per view) |
| `design-canvas.jsx` | Unused design-canvas wrapper, ignore for now |

The site has six sections (Home, Experience, Research & Patents, Awards, Interests & Skills, Favorite Media). Each section is a separate `.jsx` file inside `portfolio/`.

---

## Editing your content

All the text on the site is in plain English inside the `.jsx` files in the `portfolio/` folder. Anything wrapped in square brackets — like `[Your Title / Role]` or `[Current Project A]` — is a placeholder.

To edit:
1. Open the relevant file in any text editor (TextEdit, VS Code, Sublime, etc.).
2. Find the placeholder string.
3. Replace it with your real text. Keep the surrounding quotes and commas.
4. Save the file. Refresh the page in your browser.

| Section | File to edit |
|---|---|
| Home / bio / "Next Departures" | `portfolio/view-home.jsx` |
| Experience timeline | `portfolio/view-experience.jsx` |
| Projects / Papers / Patents | `portfolio/view-research.jsx` |
| Awards table | `portfolio/view-awards.jsx` |
| Skills + Interests | `portfolio/view-interests.jsx` |
| Books / Films / Albums | `portfolio/view-media.jsx` |
| Email / LinkedIn / GitHub / Twitter links | `portfolio/primitives.jsx` (search for `PfStatusLights`) |
| Sidebar name + coordinates | `portfolio/sidebar.jsx` |

---

## Preview locally

Open the folder in Finder and double-click `index.html`. It opens in your default browser. Some browsers block local React loading via `file://`; if you see a blank page, run a tiny local server instead:

```bash
cd "/Users/NithinAwasome/Downloads/Personal Portfolio Website"
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

---

## Hosting on Cloudflare Pages with your Spaceship domain

Cloudflare Pages is free, fast, and works well with Spaceship-registered domains. Steps below assume you already own a domain on spaceship.com.

### Part 1 — Get the site online

1. **Make a free GitHub account** at https://github.com if you don't have one.
2. **Create a new public repository** on GitHub. Name it anything (e.g. `portfolio`).
3. **Upload the files**:
   - On the new repo page, click **"uploading an existing file"**.
   - Drag every file and folder from `Personal Portfolio Website/` onto the page.
   - Click **Commit changes**.
4. **Sign up for Cloudflare** at https://dash.cloudflare.com/sign-up (free).
5. In Cloudflare, go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
6. Authorize Cloudflare to read your GitHub repos, then pick the portfolio repo.
7. **Build settings**: leave Framework as **"None"**, Build command **blank**, Build output directory **`/`** (just a forward slash). Click **Save and Deploy**.
8. After ~30 seconds the site is live at something like `portfolio-abc.pages.dev`. Click the link to confirm it works.

### Part 2 — Connect your Spaceship domain

1. In Cloudflare Pages, open your project → **Custom domains** → **Set up a custom domain**. Enter your Spaceship domain (e.g. `nithinaru.com`).
2. Cloudflare will show you **two nameservers** like:
   ```
   abby.ns.cloudflare.com
   bob.ns.cloudflare.com
   ```
   Copy these.
3. Log in to **spaceship.com** → **Manage** your domain → **Nameservers**.
4. Switch from "Spaceship Default Nameservers" to **"Custom Nameservers"**.
5. Paste in the two Cloudflare nameservers. Save.
6. Wait. Propagation takes 5 minutes to a few hours. Cloudflare will email you when it detects the change.
7. Once active, Cloudflare auto-issues an HTTPS certificate. Your site is live on your custom domain.

### Done. To update the site later

Edit the `.jsx` files locally → drag the changed files into your GitHub repo (or commit through GitHub's web editor) → Cloudflare redeploys automatically within a minute.

---

## Known limitations

- The site loads React + Babel from `unpkg.com` over the internet. This is fine for a personal portfolio but adds ~1–2 seconds to the first load. If you want it faster later, the site can be pre-compiled to plain JS.
- The Travel Blog button in the sidebar is decorative — it doesn't link anywhere yet.

---

## Credits

Design inspired by Massimo Vignelli's 1972 NYC Subway map and signage system.
