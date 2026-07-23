# Unique Diamond Horse Sanctuary

A modern React + TypeScript rebuild of the Unique Diamond Horse Sanctuary website.

## Included

- Responsive React/Vite frontend
- Home, About, Rescue Horses, Gallery, Donate, Shop, News, Blog, FAQs, and Contact pages
- Mobile navigation, scroll animations, lightbox gallery, FAQ accordions, and accessible forms
- Zeffy donation and shop configuration
- GitHub Pages deployment workflow
- Optimized sanctuary images stored locally in `public/images`

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

## Zeffy setup

1. Open `.env`.
2. Replace `VITE_ZEFFY_DONATION_URL` with the live public Zeffy donation campaign URL.
3. Optionally add `VITE_ZEFFY_EMBED_URL` if Zeffy provides an embeddable form URL.
4. The existing sanctuary Zeffy shop URL is already included, but it can be replaced through `VITE_ZEFFY_SHOP_URL`.

The site falls back to the sanctuary's current donation page until a Zeffy campaign URL is added.

## Contact form

Set `VITE_CONTACT_FORM_ENDPOINT` to a form endpoint if submissions should be posted directly. Without it, the form opens a pre-addressed email draft.

## GitHub Pages

The included workflow deploys the `main` branch to GitHub Pages. The Vite base path is already set for the repository name:

`uniquediamondhorsesanctuary`

In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source.
