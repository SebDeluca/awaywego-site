import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { siteCopy } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy information for ${siteCopy.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-base leading-7 text-black/75">
          <p>
            Away We Go collects the information needed to provide and improve the
            app, including account details, trip content, and app usage data.
          </p>
          <p>
            We use the information you provide to operate the service, support
            your account, and process transactions when paid features are
            offered.
          </p>
          <p>
            We do not sell your personal information. We may work with service
            providers that help us host, secure, and operate the product.
          </p>
          <p>
            If you have privacy questions, contact{" "}
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
