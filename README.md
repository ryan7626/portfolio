# Aryan Raut - Portfolio

Engineering Intelligent Systems Across Complex Universes

A cinematic, space-themed portfolio website showcasing AI and systems engineering projects.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Features

- **Space Theme**: Cinematic design with starfield background
- **Interactive Projects**: Planet-style project cards with hover effects
- **Skills Constellation**: SVG-based skill visualization
- **Animated Metrics**: Count-up animations for key statistics
- **Performance Optimized**: < 250kb JS bundle, Lighthouse 90+
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Accessibility**: Semantic HTML, proper contrast, keyboard navigation

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── space/
│   │   └── StarField.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Philosophy.tsx
│       ├── Projects.tsx
│       ├── SkillsConstellation.tsx
│       ├── Metrics.tsx
│       └── Contact.tsx
└── lib/
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ryan7626/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment to Vercel

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Deploy**
   ```bash
   npx vercel --prod
   ```

## Performance Optimization

- **Bundle Size**: < 250kb JS (target achieved)
- **Dynamic Imports**: Non-critical components loaded lazily
- **Image Optimization**: Next.js automatic optimization
- **Compression**: Enabled in next.config.js
- **Lighthouse Score**: Target 90+ (verify with `npm run build && npm run start`)

## Security

- No exposed API keys
- Security headers configured in `next.config.js`
- Static resume served from `/public/resume.pdf`
- No client-side secrets

## Customization

1. **Update personal information** in components
2. **Replace project data** in `Projects.tsx`
3. **Modify skills** in `SkillsConstellation.tsx`
4. **Update metrics** in `Metrics.tsx`
5. **Replace resume.pdf** in `/public/`

## Contact

Aryan Raut
- Email: aryan.raut@rutgers.edu
- GitHub: [@ryan7626](https://github.com/ryan7626)
- LinkedIn: [Aryan Raut](https://linkedin.com/in/aryan-raut)

Rutgers University • Computer Science • 3.8 GPA Magna Cum Laude
