# Away We Go Site Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the public Away We Go site so `awaywegoapp.com` reflects the supplied scrapbook landing-page design across the homepage and the existing legal/support routes.

**Architecture:** Keep the existing Next.js App Router site, but replace the current minimal homepage with a componentized adaptation of the supplied HTML and introduce shared branded site chrome for the legal/support pages. Keep the waitlist forms visual-only and drive the work through Playwright smoke coverage first.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS v4, Playwright, Vercel

---

## File Structure

**Modify:**
- `/Users/sebdeluca/awaywego-site/src/app/globals.css`
- `/Users/sebdeluca/awaywego-site/src/app/layout.tsx`
- `/Users/sebdeluca/awaywego-site/src/app/page.tsx`
- `/Users/sebdeluca/awaywego-site/src/app/privacy/page.tsx`
- `/Users/sebdeluca/awaywego-site/src/app/terms/page.tsx`
- `/Users/sebdeluca/awaywego-site/src/app/support/page.tsx`
- `/Users/sebdeluca/awaywego-site/src/components/site-footer.tsx`
- `/Users/sebdeluca/awaywego-site/src/content/site-copy.ts`
- `/Users/sebdeluca/awaywego-site/tests/smoke.spec.ts`

**Create:**
- `/Users/sebdeluca/awaywego-site/src/components/site-header.tsx`
- `/Users/sebdeluca/awaywego-site/src/components/site-shell.tsx`
- `/Users/sebdeluca/awaywego-site/src/components/legal-page.tsx`
- `/Users/sebdeluca/awaywego-site/src/components/site-hero.tsx`
- `/Users/sebdeluca/awaywego-site/src/components/home-story-sections.tsx`
- `/Users/sebdeluca/awaywego-site/public/home-collage.png`

### Task 1: Lock in the New Public Behavior with a Failing Smoke Test

**Files:**
- Modify: `/Users/sebdeluca/awaywego-site/tests/smoke.spec.ts`

- [ ] **Step 1: Write the failing test**

Add assertions that cover the refreshed public contract:
- homepage nav includes `Privacy`, `Terms`, and `Support`
- homepage shows the scrapbook-style headline and visual-only form controls
- submitting the homepage form reveals a local success state
- legal/support pages still render their route headings and support email

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
cd /Users/sebdeluca/awaywego-site
pnpm exec playwright test tests/smoke.spec.ts
```

Expected: FAIL because the current homepage does not expose the new headline or local success-state behavior.

- [ ] **Step 3: Commit**

```bash
git add tests/smoke.spec.ts
git commit -m "test: cover awaywego site refresh behavior"
```

### Task 2: Build the Shared Brand System

**Files:**
- Modify: `/Users/sebdeluca/awaywego-site/src/app/layout.tsx`
- Modify: `/Users/sebdeluca/awaywego-site/src/app/globals.css`
- Modify: `/Users/sebdeluca/awaywego-site/src/content/site-copy.ts`
- Create: `/Users/sebdeluca/awaywego-site/src/components/site-header.tsx`
- Create: `/Users/sebdeluca/awaywego-site/src/components/site-shell.tsx`
- Modify: `/Users/sebdeluca/awaywego-site/src/components/site-footer.tsx`

- [ ] **Step 1: Implement the shared tokens and chrome**

Add:
- display and body fonts appropriate to the scrapbook direction
- shared color variables and paper-texture styling
- branded header and footer components used by all routes
- content updates for support email, homepage copy, and footer text

- [ ] **Step 2: Run the smoke test**

Run:

```bash
cd /Users/sebdeluca/awaywego-site
pnpm exec playwright test tests/smoke.spec.ts
```

Expected: still FAIL, but only on homepage-specific assertions until the new homepage is implemented.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css src/content/site-copy.ts src/components/site-header.tsx src/components/site-shell.tsx src/components/site-footer.tsx
git commit -m "feat: add awaywego shared brand system"
```

### Task 3: Rebuild the Homepage

**Files:**
- Modify: `/Users/sebdeluca/awaywego-site/src/app/page.tsx`
- Modify: `/Users/sebdeluca/awaywego-site/src/components/site-hero.tsx`
- Create: `/Users/sebdeluca/awaywego-site/src/components/home-story-sections.tsx`
- Create: `/Users/sebdeluca/awaywego-site/public/home-collage.png`

- [ ] **Step 1: Implement the new homepage**

Rebuild `/` as a componentized adaptation of the supplied landing page:
- travel-paper hero
- scrapbook headline and supporting copy
- visual-only email form with success-state swap
- supporting story sections and closing CTA

- [ ] **Step 2: Run the smoke test to verify it passes**

Run:

```bash
cd /Users/sebdeluca/awaywego-site
pnpm exec playwright test tests/smoke.spec.ts
```

Expected: PASS for homepage and route checks.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx src/components/site-hero.tsx src/components/home-story-sections.tsx public/home-collage.png
git commit -m "feat: rebuild awaywego homepage"
```

### Task 4: Restyle Privacy, Terms, and Support

**Files:**
- Modify: `/Users/sebdeluca/awaywego-site/src/app/privacy/page.tsx`
- Modify: `/Users/sebdeluca/awaywego-site/src/app/terms/page.tsx`
- Modify: `/Users/sebdeluca/awaywego-site/src/app/support/page.tsx`
- Create: `/Users/sebdeluca/awaywego-site/src/components/legal-page.tsx`

- [ ] **Step 1: Implement the calmer legal layout**

Create a shared legal/support wrapper that uses the same palette and chrome as the homepage with text-first content sections and restrained decoration.

- [ ] **Step 2: Run the smoke test**

Run:

```bash
cd /Users/sebdeluca/awaywego-site
pnpm exec playwright test tests/smoke.spec.ts
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/app/privacy/page.tsx src/app/terms/page.tsx src/app/support/page.tsx src/components/legal-page.tsx
git commit -m "feat: restyle awaywego legal pages"
```

### Task 5: Final Verification and Deploy

**Files:**
- Modify only if verification uncovers defects

- [ ] **Step 1: Run full local verification**

Run:

```bash
cd /Users/sebdeluca/awaywego-site
pnpm lint
pnpm build
pnpm exec playwright test
```

Expected: all commands exit successfully.

- [ ] **Step 2: Start the local dev server for spot-checking**

Run:

```bash
cd /Users/sebdeluca/awaywego-site
pnpm dev
```

Expected: local server starts and the refreshed site is available for a manual spot-check.

- [ ] **Step 3: Deploy to Vercel**

Run:

```bash
cd /Users/sebdeluca/awaywego-site
vercel --prod
```

Expected: Vercel reports a successful production deployment for the linked `awaywego-site` project.
