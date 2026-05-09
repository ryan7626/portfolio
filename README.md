# Aryan Raut Portfolio

A Next.js portfolio for Aryan Raut, focused on AI/ML, full-stack engineering, project case studies, resume access, and contact links.

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- next-themes

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

The production build uses `next/font` with Google-hosted Geist fonts, so local builds need network access for font fetching.

## Content

- Profile metadata lives in `app/data/profile.ts`.
- Section content lives in `app/data`.
- Resume assets are served from `public/resume.pdf` and `public/resume.png`.
- `parse_resume.js` extracts text from `Aryan_Raut_Resume.pdf` using `pdf-parse`.
