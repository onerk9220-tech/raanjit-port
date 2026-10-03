# Ranjit Nayak — Creative Portfolio

A cinematic multi-page React and Vite portfolio for Ranjit Nayak, photographer, filmmaker, and content creator.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Pages

- `/` — Home
- `/work` — Selected work, category filters, and embedded Instagram reels
- `/work/:id` — Project details
- `/about` — About Ranjit
- `/services` — Services
- `/clients` — Clients and testimonials
- `/contact` — Contact details and email-preparing enquiry form

The contact form performs browser-side validation and opens an email draft; it does not submit to a backend.

## Editable content

- `src/data/projects.js` — project details and galleries
- `src/data/instagramReels.js` — Instagram reel URLs shown on the Work page
- `src/data/services.js` — service descriptions and deliverables
- `src/data/clients.js` — client names
- `src/data/testimonials.js` — testimonials
- `src/data/siteConfig.js` — contact and social links
- `src/data/images.js` — image assets and image URLs

Local image assets belong in `public/images/` and can be referenced from the app as `/images/filename.jpg`.

## Deploy

Import the repository into Vercel or another Vite-compatible host. Use `npm run build` as the build command and `dist` as the output directory. Configure the host to serve `index.html` for client-side routes.
