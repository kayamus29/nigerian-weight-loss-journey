# Plan: Nigerian Weight Loss Ebook Landing Page

A single-page, mobile-first sales site with a warm, premium health-brand feel — rich green (#0F8B4C), off-white (#F7F9F8), and warm orange (#FF9F1C) accents. No countdown timers, no fake urgency.

## Design system (src/styles.css)
- Replace default tokens with the specified palette in oklch.
- Typography: Fraunces (display serif) for headings + Inter (body) — loaded via `<link>` in `__root.tsx`, registered in `@theme`.
- Soft shadows, generous radii (rounded-2xl/3xl), generous spacing, subtle grain-free surfaces.
- Animation utilities: fade-in, scale-in, slide-up; use Tailwind `animate-*` + intersection-triggered reveals via a tiny hook.

## Route & SEO
- All content in `src/routes/index.tsx`. Update `head()` with real title, description, OG tags, JSON-LD `Book` + `Product` schema. Update `__root.tsx` defaults (remove "Lovable App").
- Semantic HTML: one `<h1>`, sectioned `<section>` with aria-labels, alt text on every image, lazy-loaded images (`loading="lazy"`, `decoding="async"`).

## Sections (componentized under `src/components/landing/`)
1. **Nav** — minimal: logo wordmark + single "Get the Ebook" link.
2. **Hero** — left copy + CTA + trust line; right authentic Nigerian woman eating healthy meal (generated image). Soft green halo behind image.
3. **Problem** — "Why Most Diets Fail" 4-card grid with Lucide icons (Frown, Utensils, Brain, TargetOff).
4. **Solution** — "A Smarter Way To Lose Weight" with healthy plate image + 6 check bullets.
5. **What's Inside** — 6 chapter cards with small generated illustrations.
6. **Featured Nigerian Foods** — 12-item responsive grid; hover (and tap on mobile) reveals calories + serving size overlay.
7. **Sample Calorie Table** — clean responsive table with approximation disclaimer.
8. **Testimonials** — 3 elegant placeholder cards ("Reader Testimonial" / "Your feedback could appear here.") with clear `data-editable` markers and a code comment showing where to edit.
9. **FAQ** — shadcn Accordion with the 6 questions; thoughtful Nigerian-context answers.
10. **Final CTA** — soft green gradient band, large headline + button.
11. **Footer** — copyright, Privacy, Terms, Contact email, educational-purposes disclaimer.
12. **Mobile sticky buy bar** — fixed bottom CTA visible on `<md`, hides when final CTA is on-screen.

All CTAs scroll to a single `#get` anchor (placeholder for the future checkout link) so there's one conversion path.

## Imagery (generated, authentic Nigerian)
Generated via imagegen (standard tier, jpg) and imported as ES modules. Prompts emphasize authentic Nigerian people, warm natural light, documentary photography, no AI-look:
- Hero: Nigerian woman ~30 smiling, eating jollof + vegetables, natural daylight kitchen.
- Solution: overhead Nigerian plate (jollof, beans, moi-moi, fish, vegetables).
- 6 chapter thumbnails (small, square): office worker, simple digestive diagram illustration, Nigerian staples flatlay, divided plate, walking outdoors, calendar planner.
- 12 food grid images: jollof rice, white rice, beans, moi-moi, eba, amala, pounded yam, plantain, fish, eggs, suya, vegetables — each shot warmly on Nigerian tableware.

Total ~20 images. All `loading="lazy"` except hero (eager + `fetchpriority="high"`).

## Technical
- Pure presentation; no backend, no Cloud needed.
- React 19 + TanStack Start (existing stack). No new deps required — Lucide, shadcn Accordion, Tailwind animations already available.
- Intersection-observer reveal hook (~20 lines) for smooth on-scroll fades.
- Fully responsive using grid + `min-w-0` + `shrink-0` patterns; mobile-first breakpoints.
- Accessibility: focus-visible rings, semantic landmarks, sufficient contrast, prefers-reduced-motion respected.

## Out of scope (call out, don't build)
- Actual payment/checkout — CTAs anchor to `#get` with a comment showing where to wire Paystack/Flutterwave/Gumroad later.
- Email capture / analytics — easy to add after.

Deliverable: one cohesive, fast, trustworthy landing page ready for Facebook ad traffic.
