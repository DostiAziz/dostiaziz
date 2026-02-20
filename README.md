# DostiAziz — Personal Portfolio

Personal portfolio website built with Vite, React 19, TypeScript, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions.

Live site: https://dostiaziz.github.io

## Tech stack

- Vite 7
- React 19 + TypeScript
- Tailwind CSS
- shadcn/ui (New York style, Radix UI primitives)
- Lucide React icons

## Sections

Hero, About, Experience, Skills, Projects, Publications, Education, Contact

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # TypeScript check + production build → dist/
npm run preview    # Preview production build locally
npx tsc --noEmit   # Type-check only
npm run lint       # ESLint
```

## Customization

- **Profile image**: replace `public/profile.jpg`
- **Section content**: edit files in `src/sections/`
- **Social links**: update the `socialLinks` array in `src/sections/Contact.tsx`

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via the GitHub Actions workflow at `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the project, and publishes the `dist/` output using the official GitHub Pages deploy action.

No manual steps are needed after pushing to `main`.

## Troubleshooting

- **Image not showing**: ensure `public/profile.jpg` exists with correct casing.
- **Type errors**: run `npx tsc --noEmit` to see TypeScript issues.
- **Build errors**: check the terminal output from `npm run build`.
