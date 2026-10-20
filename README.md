# Rafiul Islam — React Portfolio

A responsive dark portfolio built with React, Vite, Tailwind CSS v3, and Lucide React.

## Requirements
- Node.js LTS
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
Edit `src/data/portfolio.js`:
- Replace `your.email@example.com` with your real email.
- Replace the LinkedIn URL with your actual profile URL.
- Confirm skills and project descriptions match your experience.
- Add a live demo URL to each project's `demo` field when available.

To add your CV, put a PDF named `resume.pdf` in `public/` and add a link to `/resume.pdf` where you want the download button.

## Deploy to Vercel
1. Push the project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Keep the framework preset as Vite (or let Vercel detect it).
5. Build command: `npm run build`; output directory: `dist`.
6. Click Deploy.

No environment variables are required for this starter project.
