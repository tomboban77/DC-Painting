# DC-Painting

Marketing website for **DC Fine Painting**, a painting company serving the Greater Toronto Area.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/app` — pages: home, services (+ one page per service), work, about, contact
- `src/components` — shared UI (header, footer, logo, gallery, before/after slider, quote form…)
- `src/lib` — content: business details (`site.ts`), services, projects, testimonials
- `src/assets/images` — client project photos (`work/`) and Unsplash stock photos (`stock/`)

## Before launch

Search the codebase for `TODO` — placeholders that need confirming with the client:
email, domain, business hours, stats, testimonials and project locations.
The quote form currently shows a success state only; it is not yet connected to a backend.
