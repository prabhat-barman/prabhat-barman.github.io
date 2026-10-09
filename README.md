# Prabhat.dev — Premium Interactive Developer Portfolio

An art-directed, editorial developer portfolio engineered with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. Combining the editorial minimalism and visual hierarchy inspired by [Leo Parpeix](https://www.leoparpeix.com/) with an original brand identity for **Prabhat.dev**.

---

## ⚡ Highlights & Architecture

- **Editorial Minimalism**: Warm off-white canvas (`#F9F9F6`), near-black typography (`#121214`), subtle architectural hairlines, and restrained acid-lime accents (`#CCFF00`).
- **Typography System**: Paired display typeface (**Syne**) for oversized headlines with modern grotesque (**Plus Jakarta Sans**) for body text and technical monospace (**JetBrains Mono**) for metadata.
- **Fluid Layout**: Responsive `clamp()` typography and container scales spanning 1440px+ ultra-wides, laptops, tablets, and 375px mobile viewports.
- **Interactive Project Showcase**:
  - **WellValet**: Mobile grocery & ingredient scanner mockup with simulated barcode laser and real-time allergen risk verification.
  - **PlayDrama / PlayCinema**: Cinematic 4K stream player simulation with custom HUD, episode switching, and timeline scrubber.
  - **floq_ui**: Enterprise UI system with interactive data grid virtualizer and Zod schema-driven form toggles.
  - **In-Depth Case Study Modal**: Comprehensive breakdown covering Problem, Goals, Role, Technical Approach, Key Decisions, and Verified Highlights.
- **Creative Playground**:
  - `01 / Kinetic Typography`: Pointer-velocity letter spacing and dynamic weight modulation.
  - `02 / Wave Grid Canvas`: 60fps damped sine-wave physics with zero external 3D dependencies.
  - `03 / Tactile Micro-UI`: Haptic switches, spring-morphing pills, and accessible sliders.
  - `04 / DSP Frequency FFT`: Real-time audio spectrum analyzer simulator with sensitivity controls.
- **Production Experience & Skills**: Configurable timeline with categorized technical proficiencies (without arbitrary percentage bars).
- **Contact & Inquiries**: Client-side validated form with mailto fallback and single-click email copy with instant feedback.
- **Accessibility & Motion**: Full keyboard focus management, ARIA roles, WCAG AA contrast compliance, and automatic `prefers-reduced-motion` detection.
- **SEO & Social**: Meta tags, OpenGraph previews, JSON-LD Schema (`Person`), `sitemap.xml`, and `robots.txt`.

---

## 📁 Project Structure

```text
src/
├── data/                    # Centralized, single-source-of-truth configuration
│   ├── profile.ts           # Bio, metrics, contact info, availability toggle
│   ├── projects.ts          # Project records, case-study narratives, links
│   ├── experience.ts        # Career timeline, responsibilities, outcomes
│   └── skills.ts            # Grouped technical competencies and notes
├── types/
│   └── portfolio.ts         # Strict TypeScript definitions
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Hide-on-scroll-down header with active spy
│   │   ├── MobileMenu.tsx   # Fullscreen accessible mobile navigation
│   │   └── Footer.tsx       # Editorial footer with live IST clock
│   ├── sections/
│   │   ├── Hero.tsx         # Oversized hero, availability badge, CTAs
│   │   ├── Work.tsx         # Editorial project showcase & interactive previews
│   │   ├── CaseStudyModal.tsx # In-depth architectural case studies
│   │   ├── About.tsx        # Engineering philosophy & principles
│   │   ├── ExperienceSection.tsx # Career history & skills matrix
│   │   ├── Playground.tsx   # Interactive creative coding laboratory
│   │   └── Contact.tsx      # Verified contact form & network links
│   ├── playground/          # Interactive experiments
│   │   ├── KineticTypography.tsx
│   │   ├── WaveGrid.tsx
│   │   ├── MicroInteractions.tsx
│   │   └── FrequencyVisualizer.tsx
│   └── ui/                  # Reusable UI primitives
│       ├── AvailabilityBadge.tsx
│       ├── MagneticButton.tsx
│       ├── SectionHeading.tsx
│       ├── Toast.tsx
│       └── Icons.tsx        # Pixel-perfect SVG brand icons
├── hooks/
│   ├── useScrollSpy.ts      # Active section observer
│   ├── useScrollDirection.ts # Navbar scroll detection
│   └── useReducedMotion.ts  # System accessibility detector
├── utils/
│   └── cn.ts
├── index.css                # Tailwind v4 import & design tokens
└── App.tsx                  # Root application landmark structure
```

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Run Linter
```bash
npm run lint
```

---

## ✏️ How to Customize Content

All text, projects, career history, and links are separated from UI logic in `src/data/`:

| File | What to edit |
| :--- | :--- |
| `src/data/profile.ts` | Brand name, email, GitHub/LinkedIn URLs, availability status, resume path |
| `src/data/projects.ts` | Add/edit projects, case studies, demo links, tech stacks, or toggle visibility |
| `src/data/experience.ts` | Career roles, company names, periods, key achievements |
| `src/data/skills.ts` | Frontend, mobile, state management, tooling, and practices |

### Adding a Resume PDF
Place your resume in `/public/resume.pdf` and set `hasResumeFile: true` in `src/data/profile.ts`.

---

## 🚀 Deployment

The project produces a standard static output in `dist/` ready for any CDN:
- **Vercel**: Deploy with root directory, build command `npm run build`, output directory `dist`.
- **Netlify**: Set build command `npm run build` and publish directory `dist`.
- **Cloudflare Pages**: Framework preset `Vite`, build command `npm run build`, output directory `dist`.
