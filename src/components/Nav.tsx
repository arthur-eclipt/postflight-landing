import Link from "next/link";
import Wordmark from "./Wordmark";

const NAV_LINKS = [
  { href: "#verification", label: "Verification" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#academies", label: "For academies" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-titanium/70 bg-obsidian/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Wordmark />

        <div className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-fog transition-colors hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-obsidian transition-colors hover:bg-gold-dim"
          >
            Join the Founding 500
          </Link>
        </div>

        <Link
          href="#waitlist"
          className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-obsidian transition-colors hover:bg-gold-dim sm:hidden"
        >
          Join waitlist
        </Link>
      </nav>
    </header>
  );
}
