import Link from "next/link";
import Image from "next/image";

import { siteCopy } from "@/content/site-copy";

export function HomeStorySections() {
  return (
    <>
      <section className="paper-grain bg-[var(--cream)] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.8rem] uppercase tracking-[0.28em] text-[var(--brick)] [font-family:var(--font-accent)]">
              How it works
            </p>
            <h2 className="mt-4 text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.95] [font-family:var(--font-display)]">
              A boarding pass for the story you want to keep.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--sepia)]">
              The landing page tone stays intact, but the product message is
              direct: capture the trip, shape the book, and bring the memory
              home.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {siteCopy.journeyCards.map((card, index) => (
              <article
                key={card.step}
                className={`ticket-cut travel-shadow relative grid min-h-[320px] grid-cols-[1fr_84px] gap-5 bg-[var(--cream)] p-6 ${
                  index === 0
                    ? "-rotate-1"
                    : index === 1
                      ? "rotate-1"
                      : "-rotate-[0.4deg]"
                } transition-transform duration-300 hover:translate-y-[-6px] hover:rotate-0`}
              >
                <div>
                  <div className="mb-5 flex items-baseline justify-between border-b border-[var(--navy)] pb-4">
                    <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--sepia)] [font-family:var(--font-accent)]">
                      {card.route}
                    </span>
                    <span className="text-lg tracking-[0.08em] text-[var(--navy)] [font-family:var(--font-display)]">
                      AWG
                    </span>
                  </div>
                  <div className="mb-5 rounded-md border border-[rgba(29,42,68,0.15)] bg-[rgba(247,239,217,0.85)] px-3 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--brick)] [font-family:var(--font-accent)]">
                    {card.stamp}
                  </div>
                  <h3 className="max-w-[14ch] text-[2rem] leading-[1.02] [font-family:var(--font-display)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--sepia)]">
                    {card.body}
                  </p>
                </div>

                <div className="flex flex-col justify-between border-l-2 border-dashed border-[var(--navy)] pl-4">
                  <div className="text-[3.5rem] leading-none text-[var(--navy)] [font-family:var(--font-display)]">
                    {card.step}
                  </div>
                  <div>
                    <div className="flex h-9 items-end gap-px">
                      {[1, 1, 2, 1, 3, 1, 2, 1, 1, 2, 3, 1].map((width, i) => (
                        <span
                          key={`${card.step}-${i}`}
                          className="block bg-[var(--navy)]"
                          style={{ width, height: `${16 + (i % 4) * 4}px` }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--sepia)] [font-family:var(--font-accent)]">
                      Seat {card.step}A
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[rgba(235,221,184,0.3)] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <p className="text-[0.8rem] uppercase tracking-[0.28em] text-[var(--brick)] [font-family:var(--font-accent)]">
              {siteCopy.collage.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[13ch] text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.96] [font-family:var(--font-display)]">
              {siteCopy.collage.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--sepia)]">
              {siteCopy.collage.body}
            </p>
            <Link
              href="/#waitlist"
              className="mt-8 inline-flex rounded-md border border-[var(--navy)] px-5 py-3 text-[0.8rem] uppercase tracking-[0.2em] text-[var(--navy)] [font-family:var(--font-accent)] transition-colors hover:border-[var(--brick)] hover:text-[var(--brick)]"
            >
              {siteCopy.collage.ctaLabel}
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="travel-shadow relative aspect-[4/5] overflow-hidden rounded-md border border-[rgba(29,42,68,0.15)] bg-[var(--cream)]">
              <Image
                src="/home-collage.png"
                alt="A scrapbook-style travel collage used as the visual centerpiece for Away We Go."
                fill
                sizes="(min-width: 1024px) 42rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] px-6 pb-24 pt-6 md:px-10">
        <div className="airmail-edge mx-auto max-w-5xl border-y border-[rgba(29,42,68,0.14)] bg-[var(--navy)] px-6 py-14 text-center text-[var(--cream)] md:px-12">
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] leading-[0.96] [font-family:var(--font-display)]">
            Start the book before the trip fades into the scroll.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--cream-deep)]">
            The live site now matches the keepsake mood of the landing page, and
            the signup stays lightweight until the real waitlist goes live.
          </p>
          <Link
            href="/#waitlist"
            className="mt-8 inline-flex rounded-md border border-[var(--cream)] px-5 py-3 text-[0.8rem] uppercase tracking-[0.2em] [font-family:var(--font-accent)] transition-colors hover:border-[var(--cream-deep)] hover:text-[var(--cream-deep)]"
          >
            Return to the form
          </Link>
        </div>
      </section>
    </>
  );
}
