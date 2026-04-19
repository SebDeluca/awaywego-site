# Away We Go Site Refresh Design

Date: 2026-04-18

## Goal

Refresh the live `awaywego-site` Vercel site so the public website adopts the supplied landing-page design as its new visual direction, while keeping the current Next.js site maintainable and easy to extend.

The redesign applies to:

- `/`
- `/privacy`
- `/terms`
- `/support`

## Design Source

Use `/Users/sebdeluca/Downloads/Away We Go - Landing Page.html` as the primary homepage reference.

The live implementation should preserve the reference page's defining character:

- vintage paper and postcard palette
- editorial serif display typography
- scrapbook and travel-ephemera styling
- faux waitlist interaction
- richer branded header and footer treatment

The shipped site does not need to reproduce the bundled HTML byte-for-byte. It does need to feel recognizably derived from that design rather than loosely inspired by it.

## Chosen Approach

Use a hybrid refresh:

- rebuild the homepage as a close Next.js adaptation of the supplied landing page
- restyle legal and support pages with the same brand system
- keep legal and support layouts calmer and text-first instead of copying the full scrapbook density from the homepage

This is the best balance between fidelity and usability.

## Why This Approach

### Rejected: literal port of the bundled HTML everywhere

Pros:

- fastest way to mimic the reference
- maximum visual fidelity to the supplied file

Cons:

- hard to maintain in a real Next.js app
- poor fit for dense policy text
- encourages placeholder links and one-off behavior

### Rejected: light styling pass on the existing site

Pros:

- simplest implementation
- lowest risk of layout regressions

Cons:

- does not satisfy the request to use the supplied code as the new landing page
- would leave the live site feeling only partially refreshed

### Chosen: close homepage rebuild plus calmer legal pages

Pros:

- keeps the homepage visually faithful
- gives the whole site a coherent system
- keeps policy and support pages readable
- produces maintainable React components instead of a pasted bundle

Cons:

- requires more translation work than a direct embed
- fidelity must be managed carefully during the rebuild

## Scope

### In Scope

- replace the current homepage with a close adaptation of the supplied landing page
- update `/privacy`, `/terms`, and `/support` to match the refreshed brand system
- preserve the current four-route site shape
- keep the homepage waitlist/email form visual-only
- update shared chrome, colors, typography, footer, and page metadata as needed to support the new presentation
- verify the site locally and preserve smoke coverage for the public routes

### Out of Scope

- real waitlist submission or backend integration
- analytics or event tracking for the form
- new public routes beyond the current site
- inventing social profiles or external URLs that do not already exist
- CMS or content management changes

## Page Shape

### Homepage

The homepage should be the expressive page.

It should include:

- branded top navigation
- hero adapted from the supplied landing page
- faux email capture form with client-side success state only
- supporting scrapbook and travel-story sections derived from the reference
- richer branded footer

The homepage should look like the new site, not like the old site with a themed hero.

### Privacy, Terms, Support

These pages should share the same site identity but use calmer reading layouts.

They should include:

- the refreshed header
- the same palette and typography family as the homepage
- restrained decorative accents such as paper texture, borders, or small motifs
- single-column text-first content layout
- refreshed footer

They should not reuse the homepage's dense collage treatment if it gets in the way of readability.

## Technical Architecture

Implement the redesign as native Next.js components in the existing site repository at `/Users/sebdeluca/awaywego-site`.

Do not ship the bundled HTML as a raw embedded document or a `dangerouslySetInnerHTML` dump.

### Principles

- translate the design into maintainable React/Next.js components
- keep shared site styling centralized
- reuse one site shell across public pages
- isolate homepage-only decorative complexity from the legal page layouts

### Shared System

Create or update shared site primitives for:

- header
- footer
- brand tokens
- paper and texture backgrounds
- section wrappers
- visual-only form behavior

### Homepage-Specific Structure

Break the homepage into a small number of focused sections rather than a single giant file. The exact section count can adjust during implementation, but the architecture should separate:

- hero
- supporting story/value sections
- decorative travel or scrapbook elements
- closing CTA block

## Content Rules

- keep the homepage copy close to the supplied design where it supports the product story
- tighten copy when the supplied text reads like a placeholder or conflicts with the current product positioning
- replace placeholder contact and nav behavior with real site behavior
- keep legal and support copy factual and scan-friendly

### Links

- use internal links for `Privacy`, `Terms`, and `Support`
- use `mailto:support@awaywegoapp.com` for support contact
- do not publish placeholder social links unless real destinations are available

## Interaction Behavior

The waitlist/email UI is presentational only for this release.

Expected behavior:

- user can type into the field
- submit prevents default browser navigation
- form swaps to a local success state
- no network request is sent
- no data is stored

This behavior can be replaced later when a real waitlist flow exists.

## Accessibility and Responsive Rules

Treat these as first-class requirements during the redesign:

- preserve semantic headings and readable document structure
- keep contrast sufficient against the paper palette
- support keyboard interaction for form controls and links
- ensure the homepage remains legible on narrow mobile widths
- keep legal pages easy to scan on both desktop and mobile
- avoid decorative elements that overlap or hide important text

## Verification

Verification for the redesign should include:

- local run of the Next.js app
- smoke coverage for `/`, `/privacy`, `/terms`, and `/support`
- check that the visual-only form transitions to its success state
- manual review of mobile and desktop layouts

The verification goal is not pixel-perfect diffing against the bundled file. It is a faithful branded rebuild that renders correctly and preserves core public-site behavior.

## Deployment Outcome

When this work is complete and deployed, the Vercel-hosted `awaywego-site` should feel like one coherent branded refresh:

- the homepage clearly reflects the supplied landing-page direction
- legal and support pages feel intentionally restyled, not left behind
- the site remains maintainable inside the existing Next.js app
