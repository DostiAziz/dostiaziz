# Dosti Aziz Portfolio

A professional portfolio website for Machine Learning Developer and PhD Candidate.

![Portfolio Preview](./public/profile.jpg)

## Features

- Modern React + TypeScript + Vite stack
- Responsive design for all devices
- Interactive particle network animation
- Smooth scroll animations
- 3D card hover effects
- Contact form with validation
- GitHub Actions auto-deployment

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

## Quick Start

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `dosti-aziz-portfolio`
2. Make it **Public** (required for free GitHub Pages)
3. Don't initialize with README (we already have one)

### 2. Push Code to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/dosti-aziz-portfolio.git

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (or click "Pages" in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 4. Access Your Website

After the workflow completes (usually 1-2 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/dosti-aziz-portfolio/
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
.
├── .github/workflows/    # GitHub Actions deployment
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   ├── sections/         # Page sections
│   ├── App.tsx          # Main app component
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Customization

### Update Personal Information

Edit the following files to customize:

- `src/sections/Hero.tsx` - Name, title, tagline
- `src/sections/About.tsx` - About text, stats
- `src/sections/Experience.tsx` - Work experience
- `src/sections/Skills.tsx` - Technical skills
- `src/sections/Projects.tsx` - Projects
- `src/sections/Publications.tsx` - Research papers
- `src/sections/Education.tsx` - Education & certificates
- `src/sections/Contact.tsx` - Contact information

### Update Profile Photo

Replace `public/profile.jpg` with your own photo (recommended size: 800x800px).

### Change Colors

Edit `tailwind.config.js` to update the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: "#3898ec",  // Change this
    // ...
  },
}
```

## Deployment

The site automatically deploys when you push to the `main` branch. You can also manually trigger deployment:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Troubleshooting

### Site shows 404

- Wait 2-3 minutes after deployment for GitHub Pages to propagate
- Check that the repository is **Public**
- Verify GitHub Pages is enabled in Settings > Pages

### Assets not loading

- Make sure `base: '/dosti-aziz-portfolio/'` in `vite.config.ts` matches your repository name
- If using a custom domain, change `base: './'`

### Build fails

- Check Node.js version (requires v18+)
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors with `npm run build`

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
