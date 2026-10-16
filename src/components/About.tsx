export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-titanium/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="about-heading"
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
        >
          Built by pilots, for pilots.
        </h2>

        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-fog">
          <p>
            PostAirborne is a small, focused product. We&rsquo;re building it for
            the kind of pilot who keeps their logbook neatly, double-checks
            their hours, and notices when an export is off by a tenth.
          </p>
          <p>
            Made in the UK. Designed for EASA, UK CAA, and FAA from day one.
            Simultaneous launch — no country gets it second.
          </p>
        </div>
      </div>
    </section>
  );
}
