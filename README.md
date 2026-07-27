# FixItNow Client (Next.js)

Frontend scaffold for the FixItNow home services marketplace, matching the Express/Prisma backend.

## Structure

- `app/(public)` — homepage, service/technician browsing (no auth)
- `app/(auth)` — login/register
- `app/(dashboard)` — shared layout (Sidebar + Navbar), with `admin/`, `customer/`, `technician/` role folders inside
- `components/` — `ui/`, `dashboard/`, `shared/`, and feature-specific components (booking, service, technician, payment)
- `lib/api/` — one file per backend module, all calls go through `axiosInstance` (JWT auto-attached)
- `lib/validations/` — Zod schemas for forms
- `hooks/` — `useAuth`, `useBookings`, `useServices`
- `store/` — Zustand stores (`authStore`, `uiStore`)
- `types/` — shared TypeScript types mirroring the Prisma schema
- `middleware.ts` — role-based route protection for `/admin`, `/customer`, `/technician`

## Setup

```bash
npm install
cp .env.example .env.local
# set NEXT_PUBLIC_API_URL to your backend URL
npm run dev
```

## Notes

- Every page file has `// TODO:` comments marking where to wire up API calls/forms — the scaffold gives you the correct file location and imports, not full business logic.
- `middleware.ts` currently checks a `role` cookie — make sure your login flow sets both `accessToken` and `role` cookies after a successful login.
- Sidebar/Navbar are shared across all three roles via `(dashboard)/layout.tsx`; menu items come from `components/dashboard/sidebarConfig.ts`.
- Install `shadcn/ui` separately if you want pre-built `components/ui/*` primitives (`npx shadcn@latest init`).
