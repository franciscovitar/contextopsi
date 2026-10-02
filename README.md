# Contexto.Psi

Real client website for **Contexto.Psi**, a multidisciplinary mental-health network offering in-person care in Buenos Aires and virtual care internationally.

**Live site:** https://www.contextopsi.com.ar/  
**Repository:** https://github.com/franciscovitar/contextopsi

## Recruiter / Engineering Snapshot

**Problem.** Turn a real clinical team, service offering and contact/admission journey into a maintainable public product that is easy to navigate, keeps institutional content current and supports discoverability.

**Architecture.**
- **Next.js 14 App Router + React 18** for the application and route structure.
- Reusable home/page sections under `components/home/`.
- Real team/coordinator content centralized in `components/home/teamData.js` and rendered through reusable professional cards/modals.
- **React Slick** for team/content carousels and **Framer Motion** for viewport motion.
- Component-level **Sass**, plus Bootstrap utilities/icons where useful.
- Public routes include the main site plus contact, talks/content/course and supervision surfaces.

## Forms and integrations

The contact form is a controlled client flow using **EmailJS**:

- required-field validation before submission;
- explicit loading/disabled state;
- success only after `sendForm()` resolves;
- error feedback through `react-hot-toast`;
- form reset after successful delivery;
- a Google Analytics `generate_lead` event after a successful submission.

No server-side email backend is implied by this repository.

## SEO and metadata

The root layout defines:

- a descriptive title and meta description;
- relevant keyword metadata;
- canonical URL for `https://www.contextopsi.com.ar/`;
- Google site-verification tags;
- Google Analytics loading through `next/script`.

The site’s current metadata is written around its real mental-health service and location/virtual-care offering rather than generic template copy.

## Engineering decisions

- Keep real team bios and professional identifiers in one shared data module instead of duplicating them across views.
- Use reusable cards and an accessible modal flow for team detail rather than separate hard-coded pages for every professional.
- Keep user feedback truthful around form delivery: a failed EmailJS request does not produce a success state.
- Preserve the client’s existing visual/product structure while making targeted, reversible changes instead of broad rewrites.

## Verification

Available repository checks:

```bash
npm run lint
npm run build
```

The current repository does **not** define an automated test script, so this README does not claim automated test coverage. For UI/content changes, browser verification remains necessary in addition to lint/build checks.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Current status

Active client product with real institutional/team content and a live public site. This README documents only behavior visible in the current repository; it does not claim unsupported traffic, conversion, accessibility or business-impact metrics.
