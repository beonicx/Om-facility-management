# Om Facility Management — website

A two-part project built from the OFM brochure:

```
om-facility-management/
├── frontend/   Next.js 16 (App Router) + Tailwind CSS v4
└── backend/    Node.js + Express (contact form + content API)
```

## Pages (frontend)

- `/` — hero, vision & mission, service pillars, "why OFM", presence, clients
- `/about` — full company description, vision/mission/goal, the 16-point "why OFM" list
- `/services` — all six service pillars, engineering disciplines, security /
  office-support / soft-services lists, target segments, the security /
  housekeeping / technical checklists, and site operating standards (QAR, CFR,
  MIS, KPIs, etc.)
- `/presence` — the 12 active cities plus the states OFM covers, Pan-India
- `/clients` — the client list from the brochure
- `/careers` — recruitment policy (age, height, qualification, ID) and the
  company training programme
- `/contact` — address, email and a contact form that posts to the backend

All brochure copy lives in one place: `frontend/src/data/content.ts`. Edit
that file to update text anywhere on the site.

## Running it locally

**Backend** (http://localhost:4000):

```bash
cd backend
npm install
cp .env.example .env
npm run dev        # or: npm start
```

Contact-form submissions are saved to `backend/data/submissions.json`. To
also get an email notification for each submission, fill in the `SMTP_*`
values in `.env` (any SMTP provider works — Gmail, SendGrid, etc.). Without
SMTP configured, submissions are still saved, just not emailed.

**Frontend** (http://localhost:3000):

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Open http://localhost:3000. The contact form calls the backend at the URL in
`NEXT_PUBLIC_API_URL` (defaults to `http://localhost:4000`).

## Deploying

- **Frontend**: deploys as a standard Next.js app (Vercel, or `npm run build`
  + `npm start` on any Node host). Set `NEXT_PUBLIC_API_URL` to the deployed
  backend's URL.
- **Backend**: deploys as a standard Express app (Railway, Render, a VPS,
  etc.). Set `CORS_ORIGIN` to the deployed frontend's URL.

## Notes

- The design intentionally avoids stock photography (none was supplied) —
  the hero uses an inline SVG "building schematic" instead, and the client
  list is set typographically rather than as logo images. Swap in real
  photos/logos under `frontend/public/` and reference them directly if you
  have brand assets.
- Fonts (Archivo + IBM Plex Sans) load from Google Fonts via `next/font`,
  which needs outbound internet access at build time.
