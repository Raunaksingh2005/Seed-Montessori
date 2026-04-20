# The Seed Montessori School — Full-Stack Web Application

A production-grade school website built end-to-end with React and Firebase. This project covers the full spectrum of modern frontend development — component architecture, real-time backend integration, security, animations, and mobile-first responsive design.

---

## Why I Built This

Early childhood schools often have outdated or generic websites that don't reflect the quality of their programs. I set out to build something that feels genuinely professional — a site that parents trust, that works flawlessly on mobile, and that gives the school a real backend to collect and manage enquiries without needing a CMS or third-party form tool.

---

## What I Built

A multi-section single-page application covering:

- **Hero** — Full-bleed background, image mosaic layout, animated pill badge, smooth scroll CTA
- **About** — Tabbed Vision / Mission / Philosophy with animated reveal on scroll
- **Programs** — Three age-group cards (Toddler, Preschool, Pre-K) with focus areas and sample activities
- **Curriculum** — Montessori, Creative Curriculum, and Reggio Emilia approach cards + 4 core learning area breakdowns
- **Daily Routine** — Alternating timeline UI with 6 structured time blocks
- **Facilities** — Image cards with floating icon badges and hover zoom
- **Policies** — Sticky sidebar tab navigation (Admission / Attendance / Health & Safety / Fees)
- **Gallery** — CSS masonry grid with hover overlay captions
- **Contact** — Firebase-connected form with live success/error feedback
- **Enrollment Modal** — Auto-opens on load, CAPTCHA verification, full form validation, Firestore write
- **Loading Screen** — Branded animated splash with pulsing logo and dot loader

---

## Tech Decisions

### React with CSS Modules
Chose CSS Modules over styled-components or Tailwind to keep styles scoped, co-located with components, and free of runtime overhead. Every component is self-contained — easy to maintain and extend.

### Firebase Firestore as Backend
No Express server needed. Firestore handles real-time data storage for enrollment and contact submissions. Security rules enforce write-only access with server-side field validation — no unauthorized reads possible.

### Custom Hooks
- `useIntersectionObserver` — triggers scroll-reveal animations when elements enter the viewport, with configurable threshold and root margin
- `useCounters` — animates number counters from 0 to target using `setInterval` with easing, tied to intersection visibility

### Security
- All user inputs sanitized before Firestore writes (HTML tag stripping to prevent XSS)
- Firebase credentials stored exclusively in `.env`, never committed
- CAPTCHA on enrollment form to block automated submissions
- Firestore rules validate field types, required fields, and value ranges server-side

### Email Notifications
Firebase Cloud Functions listen to Firestore `onCreate` triggers on both `enrollments` and `contacts` collections. On each new document, Nodemailer sends a formatted HTML email to the school — no polling, no cron jobs, purely event-driven.

### Mobile-First Design
Every layout uses CSS Grid with `auto-fit` and `clamp()` for fluid typography. Modals lock body scroll on mobile. The header collapses to a hamburger with a full-screen slide-down menu. Tested across iPhone viewport sizes.

---

## Technical Highlights

```
src/
├── components/          12+ components, each with scoped CSS Module
│   ├── Modals/          Glass-effect modals with backdrop-filter blur
│   ├── Policies/        Sticky sidebar tab UI — pure CSS + React state
│   ├── DailyRoutine/    Alternating timeline — CSS positioning + scroll reveal
│   └── ...
├── firebase/
│   ├── config.js        Firebase init via environment variables only
│   └── services.js      Sanitized Firestore writes with error boundaries
├── hooks/
│   ├── useIntersectionObserver.js
│   └── useCounters.js
└── styles/
    ├── variables.css    Design token system (colors, shadows, radii, transitions)
    └── global.css       Base reset + fluid typography scale
```

---

## Stack

| | |
|---|---|
| Frontend | React 18, CSS Modules |
| Backend | Firebase Firestore |
| Functions | Firebase Cloud Functions + Nodemailer |
| Security | Firestore Rules, Input Sanitization, CAPTCHA |
| Fonts | Inter (UI) + Playfair Display (headings) |
| Icons | Font Awesome 6 |

---

