import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { siteCopy } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Support",
  description: `Support contact details for ${siteCopy.name}.`,
};

export default function SupportPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Support</h1>
        <p className="mt-6 text-lg leading-8 text-black/75">
          For help with Away We Go, email{" "}
          <a className="underline" href={`mailto:${siteCopy.supportEmail}`}>
            {siteCopy.supportEmail}
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
