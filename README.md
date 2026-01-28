# DostiAziz — Personal Website

A fast, minimal personal portfolio website built with Vite + React/Preact (TypeScript) and Tailwind CSS.

This repository hosts my portfolio, projects, publications, and contact information.

## Live demo
Replace with your deployed URL (GitHub Pages, Vercel, Netlify, etc.):

https://<your-username>.github.io/dostiaziz/

## Features
- Responsive single-page portfolio layout
- Sections: About, Experience, Education, Projects, Publications, Contact
- Social links including GitHub, LinkedIn, Google Scholar
- Vite dev server and production build
- Tailwind CSS for styling

## Tech stack
- Vite
- React (Preact-compatible) + TypeScript
- Tailwind CSS
- Lucide icons + a few custom SVG icons

## Quick start (local)
1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
# open http://localhost:5173
```

3. Type-check

```bash
npx tsc --noEmit
```

4. Build for production

```bash
npm run build
npm run preview    # preview production build locally
```

## Where to customize (personal info)
- Profile image
  - Current path: `public/profile.jpg`
  - Replace the file at `public/profile.jpg` with your photo (keep the same filename), or import a new image from `src` and update `src/sections/About.tsx`.

- Google Scholar link
  - File: `src/sections/Contact.tsx`
  - Edit the `socialLinks` array and update the `href` for Google Scholar. Example:

```ts
{ icon: GoogleScholarIcon, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID' }
```

Replace `YOUR_SCHOLAR_ID` with your actual Google Scholar ID or paste the full profile URL.

- Other social links
  - Also in `src/sections/Contact.tsx` — add/remove entries in the `socialLinks` array.

## Vite `base` setting
This project sets a `base` in `vite.config.ts` (for GitHub Pages deploys). The app uses `import.meta.env.BASE_URL` for public assets where appropriate. When you preview locally with `npm run dev`, assets are served from `/`.

## Deploying
- Vercel / Netlify: connect your GitHub repository and deploy — both detect Vite projects automatically.
- GitHub Pages: set `base` in `vite.config.ts` to `/dostiaziz/` (or your repo name), then build and publish the `dist/` output to `gh-pages` branch. Example using `gh-pages`:

```bash
npm run build
npx gh-pages -d dist
```

I can add a GitHub Action workflow to automate this if you want.

## Troubleshooting
- Image not showing: ensure `public/profile.jpg` exists with correct casing and that you use `import.meta.env.BASE_URL` if `base` is set in `vite.config.ts`.
- Type errors during build: run `npx tsc --noEmit` to see TypeScript issues.
- Dev server errors: check the browser console and the terminal logs from `npm run dev`.

