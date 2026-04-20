# 🌱 Seed Montessori — School Website

A production-ready, full-stack web application built for **The Seed Montessori Early Learning Centre** in Aerocity, Punjab. This project demonstrates modern React architecture, Firebase backend integration, real-time data handling, and a polished, mobile-first UI.

**Live Repo:** [github.com/Raunaksingh2005/Seed-Montessori](https://github.com/Raunaksingh2005/Seed-Montessori)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, CSS Modules |
| Backend | Firebase Firestore (NoSQL) |
| Auth / Security | Firebase Security Rules, input sanitization, CAPTCHA |
| Notifications | Firebase Cloud Functions + Nodemailer |
| Hosting | Firebase Hosting / Vercel ready |
| Fonts & Icons | Google Fonts (Inter + Playfair Display), Font Awesome 6 |

---

## Key Features

### Frontend
- **Component-based architecture** — 12+ reusable React components, each with scoped CSS Modules
- **Custom React hooks** — `useIntersectionObserver` for scroll-triggered animations, `useCounters` for animated stat counters
- **Responsive design** — Mobile-first layout, fully optimized for iPhone and all screen sizes
- **Glassmorphism modals** — Enrollment modal with `backdrop-filter` blur, auto-opens on page load
- **Scroll-reveal animations** — Elements animate in as they enter the viewport
- **Image mosaic hero** — Multi-image collage layout with floating animated badges
- **Interactive learning section** — Click-to-reveal educational content for children (colors, numbers, shapes)

### Backend & Security
- **Firebase Firestore** — Stores enrollment and contact form submissions in real-time
- **Input sanitization** — All user inputs stripped of HTML tags before storage (XSS prevention)
- **Firestore security rules** — Write-only collections; no unauthorized reads possible
- **CAPTCHA verification** — Custom alphanumeric CAPTCHA on the enrollment form
- **Environment variables** — All Firebase credentials stored in `.env`, never committed to version control
- **Email notifications** — Firebase Cloud Functions trigger Nodemailer emails to the school on every new submission

### UX / Design
- **Auto-open enrollment modal** — Appears 3 seconds after page load to capture leads
- **Background scroll lock** — `overflow: hidden` on body when any modal is open (mobile-friendly)
- **Loading screen** — Branded animated splash screen on initial load
- **Success modal** — Confirmation screen after successful form submission
- **Smooth scroll navigation** — All nav links scroll to sections with offset for fixed header

---

## Project Structure

```
src/
├── components/
│   ├── Header/          # Fixed nav with scroll effect + mobile hamburger
│   ├── Hero/            # Full-bleed background, image mosaic, CTA buttons
│   ├── About/           # Philosophy section with image stack + feature pillars
│   ├── Facilities/      # 4-card grid with real images and icon badges
│   ├── Gallery/         # Masonry-style photo grid with hover overlays
│   ├── Interactive/     # Kids' learning corner (colors, numbers, shapes)
│   ├── Contact/         # Contact form with Firebase submission
│   ├── Footer/          # 4-column footer with social links
│   ├── LoadingScreen/   # Animated branded splash
│   ├── Modals/
│   │   ├── EnrollmentModal/   # Full form with CAPTCHA + Firebase write
│   │   └── SuccessModal/      # Post-submission confirmation
│   └── common/
│       ├── Button/
│       ├── Container/
│       └── SectionHeader/
├── firebase/
│   ├── config.js        # Firebase initialization via env vars
│   └── services.js      # Firestore write functions with sanitization
├── hooks/
│   ├── useIntersectionObserver.js
│   └── useCounters.js
└── styles/
    ├── variables.css    # Design tokens (colors, shadows, radii, transitions)
    └── global.css       # Base reset + typography
```

---

## Getting Started

### Prerequisites
- Node.js v14+
- A Firebase project with Firestore enabled

### Installation

```bash
git clone https://github.com/Raunaksingh2005/Seed-Montessori.git
cd Seed-Montessori
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

Fill in your Firebase credentials in `.env`:

```env
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

### Run Locally

```bash
npm start
# Opens at http://localhost:3000
```

### Build for Production

```bash
npm run build
```

---

## Firebase Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /enrollments/{doc} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll([
        'parentName', 'email', 'phone', 'childName', 'childAge', 'program', 'createdAt'
      ])
      && request.resource.data.childAge is int
      && request.resource.data.childAge >= 2
      && request.resource.data.childAge <= 6
      && request.resource.data.program in ['toddler', 'primary', 'extended'];
    }
    match /contacts/{doc} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll([
        'name', 'email', 'message', 'createdAt'
      ]);
    }
  }
}
```

---

## Email Notifications

When a form is submitted, a Firebase Cloud Function sends an email to the school with full submission details. See `firebase-functions.js` for the implementation using Nodemailer + Gmail App Password.

---

## What's Coming

- Programs section (in progress)
- Admin dashboard for viewing submissions
- Google reCAPTCHA v3 upgrade
- PWA support

---

## Author

**Raunak Singh**
- GitHub: [@Raunaksingh2005](https://github.com/Raunaksingh2005)

Built as a real-world client project for The Seed Montessori School, Aerocity, Punjab.
