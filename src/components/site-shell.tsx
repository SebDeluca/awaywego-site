import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: ReactNode;
  headerVariant?: "default" | "floating";
};

export function SiteShell({
  children,
  headerVariant = "default",
}: SiteShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--cream)] text-[var(--navy)]">
      <SiteHeader variant={headerVariant} />
      {children}
      <SiteFooter />
    </div>
  );
}
