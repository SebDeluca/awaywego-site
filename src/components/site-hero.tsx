"use client";

import { useState } from "react";

import { siteCopy } from "@/content/site-copy";

const postcardStops = [
  { className: "left-[36%] top-[59%] -rotate-6", label: "Lisbon" },
  { className: "left-[47%] top-[27%] rotate-3", label: "Paris" },
  { className: "left-[61%] top-[56%] -rotate-2", label: "Rome" },
  { className: "left-[76%] top-[69%] rotate-4", label: "Cairo" },
  { className: "left-[78%] top-[33%] -rotate-4", label: "Istanbul" },
] as const;

export function SiteHero() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="paper-grain relative min-h-[100svh] overflow-hidden bg-[var(--paper)]">
      <HeroMapBackdrop />

      <div className="absolute right-5 top-28 z-20 hidden -rotate-12 rounded-full border-2 border-[var(--brick)] p-4 text-center text-[0.7rem] uppercase tracking-[0.18em] text-[var(--brick)] [font-family:var(--font-accent)] md:block">
        <div className="rounded-full border border-dashed border-[var(--brick)] px-5 py-8">
          <div>Postcard</div>
          <div className="mt-1 text-[1.7rem] leading-none [font-family:var(--font-display)]">
            club
          </div>
          <div className="mt-1">2026</div>
        </div>
      </div>

      {postcardStops.map((stop) => (
        <div
          key={stop.label}
          className={`pointer-events-none absolute z-10 hidden w-28 bg-[var(--cream)] p-2 pb-6 shadow-[0_10px_24px_rgba(20,29,48,0.24)] md:block ${stop.className}`}
        >
          <div className="aspect-square bg-[linear-gradient(180deg,#e8d9a8,#d9c17c)]" />
          <div className="mt-2 text-center text-[0.68rem] uppercase tracking-[0.18em] text-[var(--navy)] [font-family:var(--font-accent)]">
            {stop.label}
          </div>
        </div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-3 text-[0.8rem] uppercase tracking-[0.32em] text-[var(--brick)] [font-family:var(--font-accent)]">
            <span className="h-px w-8 bg-[var(--brick)]" />
            {siteCopy.hero.eyebrow}
            <span className="h-px w-8 bg-[var(--brick)]" />
          </p>
          <h1 className="mt-6 max-w-[10ch] text-[clamp(4rem,11vw,6.7rem)] leading-[0.9] text-[var(--navy)] [font-family:var(--font-display)] [text-wrap:balance]">
            {siteCopy.name}
          </h1>
          <p className="mt-5 text-sm uppercase tracking-[0.28em] text-[var(--sepia)] [font-family:var(--font-accent)] md:text-base">
            {siteCopy.hero.badgeLine}
          </p>
          <p className="mt-6 max-w-lg text-xl leading-8 text-[var(--sepia)]">
            {siteCopy.shortDescription}
          </p>
          <p className="mt-4 max-w-lg text-base leading-8 text-[var(--sepia-light)] md:text-lg">
            {siteCopy.hero.lead}
          </p>

          <div id="waitlist" className="mt-9 max-w-[28rem]">
            {submitted ? (
              <p className="rounded-md border border-[var(--navy)] bg-[var(--cream)] px-5 py-4 text-sm uppercase tracking-[0.18em] text-[var(--brick)] [font-family:var(--font-accent)] shadow-[3px_3px_0_0_var(--navy)]">
                {siteCopy.waitlist.success}
              </p>
            ) : (
              <form
                className="travel-shadow rounded-md border border-[var(--navy)] bg-[var(--cream)] p-1.5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label className="sr-only" htmlFor="email-address">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    name="email"
                    placeholder={siteCopy.waitlist.placeholder}
                    required
                    className="min-h-12 flex-1 bg-transparent px-4 text-base text-[var(--navy)] outline-none placeholder:text-[var(--sepia-light)]"
                  />
                  <button
                    type="submit"
                    className="rounded-md bg-[var(--brick)] px-5 py-3 text-sm font-semibold text-[var(--cream)] transition-colors hover:bg-[var(--brick-deep)]"
                  >
                    {siteCopy.waitlist.buttonLabel}
                  </button>
                </div>
              </form>
            )}
            <p className="mt-4 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--sepia-light)] [font-family:var(--font-accent)]">
              {siteCopy.hero.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMapBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="routeFade" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#b04a3a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#b04a3a" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="vignette" cx="50%" cy="50%" r="72%">
          <stop offset="45%" stopColor="#f7efd9" stopOpacity="0" />
          <stop offset="100%" stopColor="#5a4a32" stopOpacity="0.18" />
        </radialGradient>
      </defs>

      <rect width="1440" height="900" fill="#f7efd9" />

      <g fill="none" opacity="0.18" stroke="#1d2a44" strokeWidth="1">
        <path d="M0 292 Q 180 270 360 292 T 720 292 T 1080 292 T 1440 292" />
        <path d="M0 350 Q 180 330 360 350 T 720 350 T 1080 350 T 1440 350" />
      </g>

      <g fill="#ebddb8" stroke="#5a4a32" strokeWidth="1.4">
        <path d="M 380 340 Q 560 260 810 292 Q 960 316 920 450 Q 830 520 650 512 Q 460 540 392 478 Z" />
        <path d="M 960 368 Q 1038 360 1120 382 Q 1200 402 1240 452 Q 1260 510 1220 540 Q 1160 558 1102 542 Q 1040 520 998 480 Q 972 436 960 368 Z" />
        <path d="M 360 618 Q 440 580 560 580 Q 700 580 840 600 Q 980 618 1120 640 Q 1230 660 1322 700 Q 1360 760 1320 820 Q 1200 860 1040 860 Q 820 860 620 840 Q 438 820 340 780 Q 300 740 340 680 Q 350 640 360 618 Z" />
      </g>

      <g opacity="0.45">
        <path
          d="M 540 540 Q 680 350 880 500 Q 1000 560 1110 642"
          fill="none"
          stroke="url(#routeFade)"
          strokeDasharray="2 8"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <polygon points="872,486 898,498 874,510" fill="#1d2a44" />
      </g>

      <g transform="translate(220 718)" opacity="0.72">
        <circle r="54" fill="none" stroke="#5a4a32" strokeWidth="1" />
        <circle
          r="46"
          fill="none"
          stroke="#5a4a32"
          strokeDasharray="2 3"
          strokeWidth="0.5"
        />
        <polygon points="0,-44 5,0 0,44 -5,0" fill="#1d2a44" />
        <polygon points="-44,0 0,-5 44,0 0,5" fill="#b04a3a" />
      </g>

      <g fontFamily="var(--font-accent)" fontSize="12" fill="#1d2a44">
        <text x="554" y="540">
          LIS
        </text>
        <text x="694" y="304">
          CDG
        </text>
        <text x="896" y="504">
          FCO
        </text>
        <text x="1114" y="646">
          CAI
        </text>
        <text x="1134" y="324">
          IST
        </text>
      </g>

      <rect width="1440" height="900" fill="url(#vignette)" />
    </svg>
  );
}
