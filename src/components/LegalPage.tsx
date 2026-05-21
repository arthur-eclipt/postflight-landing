import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({ title, updated, children }: Props) {
  return (
    <>
      <Nav />
      <main id="main">
        <article className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fog">
            Last updated {updated}
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-bone sm:text-6xl">
            {title}
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-fog [&_a]:font-medium [&_a]:text-bone [&_a]:underline [&_a]:decoration-gold [&_a]:decoration-2 [&_a]:underline-offset-4 hover:[&_a]:decoration-gold-dim [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-bone">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
