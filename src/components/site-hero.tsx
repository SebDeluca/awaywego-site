import Image from "next/image";

import { siteCopy } from "@/content/site-copy";

export function SiteHero() {
  return (
    <section className="relative min-h-[82svh] overflow-hidden bg-black text-white">
      <Image
        src="/hero.jpg"
        alt="A scenic travel view from a winding coastal road."
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto flex min-h-[82svh] max-w-6xl items-end px-6 pb-16 pt-24 sm:pb-20">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase text-white/78">iPhone app</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight sm:text-6xl">
            {siteCopy.name}
          </h1>
          <p className="mt-5 text-lg text-white/92">{siteCopy.shortDescription}</p>
          <p className="mt-3 max-w-lg text-base text-white/74">
            {siteCopy.longDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
