import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: LegalPageProps) {
  return (
    <SiteShell>
      <main className="paper-grain relative overflow-hidden px-6 pb-20 pt-14 md:px-10 md:pb-24 md:pt-20">
        <div className="absolute right-6 top-10 hidden rounded-full border border-[rgba(176,74,58,0.7)] px-6 py-8 text-center text-[0.72rem] uppercase tracking-[0.24em] text-[var(--brick)] [font-family:var(--font-accent)] md:block">
          Away
          <br />
          We Go
        </div>

        <div className="mx-auto max-w-5xl">
          <p className="text-[0.8rem] uppercase tracking-[0.28em] text-[var(--brick)] [font-family:var(--font-accent)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.8rem,7vw,4.4rem)] leading-[0.95] [font-family:var(--font-display)]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--sepia)]">
            {intro}
          </p>

          <article className="mt-12 max-w-3xl space-y-8 text-base leading-8 text-[var(--sepia)] md:text-lg md:leading-9">
            {children}
          </article>
        </div>
      </main>
    </SiteShell>
  );
}
