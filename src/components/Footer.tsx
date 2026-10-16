import Link from "next/link";
import Wordmark from "./Wordmark";

const EXPLORE_LINKS = [
  { href: "#verification", label: "Verification" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#academies", label: "For academies" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-titanium/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Wordmark />
            <p className="mt-3 text-sm text-fog">
              Log it. Prove it. Share it.
            </p>
            <p className="mt-6 text-sm text-fog">© 2026 PostAirborne Ltd</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              EXPLORE
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fog transition-colors hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              GET IN TOUCH
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@postairborne.com"
                  className="text-fog transition-colors hover:text-bone"
                >
                  hello@postairborne.com
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-fog transition-colors hover:text-bone"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-fog transition-colors hover:text-bone"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gold/40" />
        <p className="mt-8 text-center font-display text-sm italic text-fog">
          Log it. Prove it. Share it.
        </p>
      </div>
    </footer>
  );
}
