# AS Café

Cozy café marketing site built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Development

```bash
npm install
npm run dev
```

Production preview (uses `/AS_Cafe.io/` base path):

```bash
npm run build
npm run preview
```

Then open the preview URL with `/AS_Cafe.io/` in the path so assets resolve correctly.

## GitHub Pages

This repo is configured for a **project site** at `https://astridbonoan.github.io/AS_Cafe.io/` (replace with your username if different).

### Option A — GitHub Actions (recommended)

1. Push to `main`.
2. In the repository: **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions** (not “Deploy from a branch”).
4. The workflow `.github/workflows/deploy-pages.yml` builds the site, adds `404.html` for SPA routing, and publishes.

### Option B — Deploy from branch (`gh-pages`)

If you prefer **Settings → Pages → Deploy from a branch** → branch **`gh-pages`** / folder **`/(root)`**:

1. Disable or delete `.github/workflows/deploy-pages.yml` if you do not want duplicate publishes.
2. Run the workflow **Publish to gh-pages branch** manually under **Actions** (`.github/workflows/deploy-gh-pages-branch.yml`).

---

Design palette: warm brown, cream, and olive green — mobile-first layout with featured drinks, menu categories, loyalty callout, gallery, locations, testimonials, and contact form.
