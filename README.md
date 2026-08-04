# LoftOS Landing

Premium marketing site for **LoftOS** — the complete white-label gaming, café & restaurant management platform.

## Stack

- React 19 + Vite 8
- Tailwind CSS v4
- Framer Motion
- React Icons
- React CountUp
- React Helmet Async (SEO)

## Run locally

```bash
cd loftos-landing
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

Update canonical URL / OG image hosts in `index.html` and `src/components/SEO.jsx` before production deploy (currently `https://loftos.loftsixtyfour.com`).
