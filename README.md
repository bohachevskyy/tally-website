# Tally — marketing site

Source for [tallyslips.com](https://tallyslips.com), the landing page for **Tally**, a free iPhone app for screen-time limits that keeps count of every time you break your own rules.

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

When the app goes live, put its App Store link in `APP_STORE_URL` in `src/config.ts`. The download buttons switch from "Coming soon" to a link automatically.
