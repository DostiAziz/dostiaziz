# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for DostiAziz built with Vite, React, TypeScript, and Tailwind CSS. The site uses shadcn/ui components (New York style) and deploys to GitHub Pages via GitHub Actions.

## Development Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server at http://localhost:5173
npx tsc --noEmit        # Type-check without emitting files

# Build & Preview
npm run build           # TypeScript check + production build (outputs to dist/)
npm run preview         # Preview production build locally

# Code Quality
npm run lint            # Run ESLint on TypeScript files
```

## Architecture

### Section-Based Single-Page Application

The app renders a single-page portfolio with sections displayed in sequence. All sections are imported and rendered in `src/App.tsx`:

```
Navigation (sticky)
├── Hero
├── About
├── Experience
├── Skills
├── Projects
├── Publications
├── Education
├── Contact
└── Footer
```

Each section is a standalone component in `src/sections/` that renders its own content.

### Path Aliases

The project uses `@/` as an alias for `src/`:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

Configured in:
- `vite.config.ts` (Vite resolver)
- `tsconfig.json` (TypeScript paths)
- `components.json` (shadcn/ui aliases)

### GitHub Pages Deployment

The site deploys to GitHub Pages with base path `/dostiaziz/`:

- Set in `vite.config.ts`: `base: '/dostiaziz/'`
- Public assets use `import.meta.env.BASE_URL` when needed
- GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-deploys on push to `main`

## Customization Points

### Personal Content
- **Sections**: Edit files in `src/sections/` (Hero, About, Experience, Skills, Projects, Publications, Education, Contact)
- **Profile Image**: Replace `public/profile.jpg` (or update import in `src/sections/About.tsx`)
- **Social Links**: Update `socialLinks` array in `src/sections/Contact.tsx`

### Styling
- **Theme Configuration**: `tailwind.config.js` defines custom colors, animations, shadows, and timing functions
- **Custom Colors**: Primary blue (#3898ec), accent purple (#6366f1), plus semantic colors
- **Custom Animations**: float, pulse-glow, gradient-shift, slide-up/down/left/right, scale-in, fade-in, bounce-in
- **Custom Timing Functions**: neural, synapse, deep, flow, bounce (used with `ease-neural`, `ease-synapse`, etc.)
- **Global Styles**: `src/index.css` contains CSS custom properties and base styles

### shadcn/ui Components

Components are in `src/components/ui/`. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Configuration in `components.json`:
- Style: new-york
- Base color: slate
- CSS variables: enabled
- Icon library: lucide

## Important Configuration Files

- `vite.config.ts`: Base path, plugins (inspectAttr, react), path aliases
- `tailwind.config.js`: Extensive custom theme with colors, animations, timing functions
- `tsconfig.json`: TypeScript project references setup with path aliases
- `components.json`: shadcn/ui configuration
- `eslint.config.js`: ESLint with TypeScript, React Hooks, and React Refresh rules

## Deployment Notes

- Production builds are created in `dist/` directory
- GitHub Actions workflow runs on every push to `main` branch
- Workflow steps: checkout → install → build → deploy to GitHub Pages
- Node version: 20 (specified in workflow)
