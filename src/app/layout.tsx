import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteCopy } from "@/content/site-copy";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteCopy.domain}`),
  title: {
    default: siteCopy.name,
    template: `%s | ${siteCopy.name}`,
  },
  description: siteCopy.shortDescription,
  openGraph: {
    title: siteCopy.name,
    description: siteCopy.shortDescription,
    url: `https://${siteCopy.domain}`,
    siteName: siteCopy.name,
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
