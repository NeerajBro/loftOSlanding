# LoftPOS Landing

Premium marketing site for **LoftPOS** — the complete white-label gaming, café & restaurant management platform.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4
- Framer Motion
- React Icons
- React CountUp
- React Helmet Async (SEO)

## Run locally

```bash
cd loftpos-landing
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/     # Page sections + shared UI
  context/        # Dark/light theme
  data/           # Marketing copy, FAQs, pricing
  hooks/          # Intersection observer helpers
```

## Blog

SEO guides live at `/blog` (React Router + Helmet):

- `/blog/gaming-cafe-software`
- `/blog/menu-management-software`
- `/blog/qr-menu-management-software`

Content source: `src/data/blogPosts.js`

For production hosting, configure SPA fallback so `/blog/*` serves `index.html` (included `public/_redirects` for Netlify-style hosts; nginx: `try_files $uri $uri/ /index.html;`).

Update canonical URL / OG image hosts in `index.html` and `src/components/SEO.jsx` before production deploy (currently `https://loftpos.com`).
