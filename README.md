# PostFlight Landing

Marketing landing page for **PostFlight** — the pilot logbook that proves itself.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss`
- `next/font/google` for Fraunces, Inter, and JetBrains Mono
- Mailerlite waitlist (via a server API route)
- No CMS, no analytics, no cookies, no third-party JS

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local` and set:

| Var | Where to find it |
| --- | --- |
| `MAILERLITE_API_KEY` | Mailerlite → Integrations → API tokens |
| `MAILERLITE_GROUP_ID` | The ID of the Founding 500 group in Mailerlite |

Without these set, the `/api/waitlist` endpoint returns a 500 with `server_misconfigured`.

## Deploying to Vercel

1. Push to GitHub.
2. Import in Vercel — framework auto-detects as Next.js.
3. Add domains `postflight.com` and `www.postflight.com` under **Project Settings → Domains**.
4. If you also own `postflight.co.uk`, point it at the Vercel project and Vercel will redirect it to the primary domain.
5. Set environment variables in **Project Settings → Environment Variables**:
   - `MAILERLITE_API_KEY`
   - `MAILERLITE_GROUP_ID`
6. SSL provisions automatically.

The site has no analytics and sets no cookies, so no cookie banner is required.

## Project structure

```
src/
  app/
    api/waitlist/route.ts   Mailerlite proxy
    privacy/page.tsx
    terms/page.tsx
    layout.tsx
    page.tsx
    globals.css
    icon.tsx
    opengraph-image.tsx
  components/               All landing-page sections + waitlist form
```
