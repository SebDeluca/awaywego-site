import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { siteCopy } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteCopy.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-black/75">
          <p>
            Away We Go is provided as a consumer software service for creating
            and preserving trip memories, plans, and related content.
          </p>
          <p>
            By using the service, you agree not to misuse the app, interfere
            with its operation, or use it in violation of applicable law.
          </p>
          <p>
            Features may change over time, and paid features or purchases may be
            subject to additional terms presented at checkout.
          </p>
          <p>
            For questions about these terms, contact{" "}
            <a className="underline" href={`mailto:${siteCopy.supportEmail}`}>
              {siteCopy.supportEmail}
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
