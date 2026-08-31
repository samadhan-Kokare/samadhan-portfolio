# Samadhan Kokare — Frontend Developer Portfolio

A clean, fast, recruiter-focused portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Every line of content — experience, skills, project, education, contact details — is pulled directly from the resume; nothing invented.

## Design

- **Palette**: cool off-white paper (`#F5F6F8`), near-black ink (`#12141C`), a single restrained indigo accent (`#2F5FE0`) for links/CTAs, and a green "metric" accent (`#1FAE83`) used only for quantified achievements.
- **Type**: `Sora` for headings, `Inter` for body copy, `IBM Plex Mono` for labels, stats, and tags — a nod to the metrics-driven, systems-minded profile.
- **Signature motif**: real numbers from the resume (40%, 30%, 500+, 1,000+, 3.9+) are pulled out as inline badges next to the bullet that earned them, plus a stat strip in the hero — so the achievements are impossible to skim past.
- No 3D scene, no particle universe, no heavy animation libraries. Motion is limited to subtle fade/slide-on-scroll — appropriate for a performance-focused engineer's own site.

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # fonts + SEO metadata
│   ├── page.tsx           # composes all sections
│   └── globals.css
├── components/
│   ├── site-header.tsx    # sticky nav + resume download
│   ├── hero.tsx            # headline + stat strip
│   ├── about.tsx
│   ├── experience.tsx      # Cloudrevel + TCS, with metric badges
│   ├── project.tsx         # Key Project (ATS/HR dashboards)
│   ├── skills.tsx          # grouped exactly as on the resume
│   ├── contact.tsx         # email, phone, LinkedIn, GitHub, resume download
│   └── section-heading.tsx
├── data/
│   ├── profile.ts          # name, summary, contact links, hero stats
│   ├── experience.ts        # both roles + education, verbatim from resume
│   ├── skills.ts             # skill groups, verbatim from resume
│   └── projects.ts           # Key Project section
└── public/
    └── SAMADHAN_KOKARE_Frontend.pdf   # your resume — wired to the download buttons
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build for production with `npm run build && npm run start`.

## Before you publish — please update

1. **`data/profile.ts`** — `linkedin` and `github` are placeholders (`linkedin.com/in/samadhankokare`, `github.com/samadhankokare`). Swap in your real profile URLs.
2. **Resume PDF** — already copied into `public/SAMADHAN_KOKARE_Frontend.pdf` and wired to both "Resume" buttons. Replace this file whenever you update your resume, keeping the same filename (or update `resumeFile` in `data/profile.ts`).
3. **Key Project ambiguity** — the resume's "Key Project" section overlaps with your Cloudrevel bullets. I labelled it "built while at Cloudrevel Innovation Pvt Ltd" in `data/projects.ts` — edit `context` if that's not accurate (e.g. if it was a separate personal/freelance build).
4. Consider adding 1–2 more projects (even side projects) once you have live links — `data/projects.ts` supports multiple entries.

## Accessibility & performance

- Respects `prefers-reduced-motion` (animations are disabled at the CSS level for users who request it).
- Visible focus rings on every interactive element.
- Fonts self-hosted via `next/font/google` — no layout shift, no external font requests at runtime.
- Fully responsive: single-column on mobile, comfortable two/three-column grids from tablet breakpoints up, sticky header collapses into a mobile menu below `md`.
- No client-heavy dependencies (no Three.js, no GSAP, no smooth-scroll library) — kept deliberately lean.
