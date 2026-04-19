import { HomeStorySections } from "@/components/home-story-sections";
import { SiteHero } from "@/components/site-hero";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell headerVariant="floating">
      <main>
        <SiteHero />
        <HomeStorySections />
      </main>
    </SiteShell>
  );
}
