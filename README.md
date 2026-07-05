# Moonlorddev — Portfolio

Personal portfolio site, built with Next.js 15, TypeScript, and Tailwind CSS v4.
Adapted from the open-source [nextjs-portfolio-template](https://github.com/AbdulBasit313/nextjs-portfolio-template) (MIT licensed).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Create `.env.local` in the project root:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_FORM_ACTION_URL=
```

- `NEXT_PUBLIC_SITE_URL` — the site's canonical URL (used for metadata, sitemap, robots.txt).
- `CONTACT_FORM_ACTION_URL` — endpoint for the contact form. Using [Formspree](https://formspree.io):
  1. Create a project and form on Formspree.
  2. Copy the form endpoint URL.
  3. Set it as `CONTACT_FORM_ACTION_URL`.
  Any compatible form backend (Formspree, Formcarry, Getform, your own API) works — just make sure the form field names (`name`, `email`, `subject`, `message`) match what it expects.

## Project structure

- `src/appData` — expertise cards, skill list, footer links, theme colors.
- `content/projects/*.json` — featured project case studies.
- `src/components/*` — page sections (Hero, Projects, Experience, Technical Expertise, Technology Stack, Engineering Philosophy, Education & Certifications, Awards, Contact).

## Build

```bash
npm run build
npm run start
```

## License

MIT — original template by Abdul Basit.
