import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white px-6 py-5 text-sm text-black/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p className="font-medium text-black">Away We Go</p>
        <nav className="flex items-center gap-4">
          <Link href="/privacy" className="transition-opacity hover:opacity-70">
            Privacy
          </Link>
          <Link href="/terms" className="transition-opacity hover:opacity-70">
            Terms
          </Link>
          <Link href="/support" className="transition-opacity hover:opacity-70">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
}
