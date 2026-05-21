export default function ForAcademies() {
  return (
    <section
      id="academies"
      aria-labelledby="academies-heading"
      className="border-t border-titanium/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="academies-heading"
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
        >
          Built with flight schools in mind.
        </h2>

        <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-fog">
          <p>
            Academy partnership puts every student pilot on PostFlight Pro at
            no cost. Their logbooks are verified, their endorsements are
            sealed, and every milestone they share carries your academy&rsquo;s
            mark.
          </p>
          <p>
            Your CFIs get a single dashboard: outstanding endorsements,
            response times, escalations. No more chasing signatures across
            paper books.
          </p>
          <p>
            When a student transitions to the airlines, their full verified
            history goes with them. The provenance stays with your name on it.
          </p>
        </div>

        <p className="mt-10 text-fog">
          Talk to us about Academy partnership —{" "}
          <a
            href="mailto:academies@postflight.com"
            className="text-bone underline decoration-gold decoration-2 underline-offset-4 hover:decoration-gold-dim"
          >
            academies@postflight.com
          </a>
        </p>
      </div>
    </section>
  );
}
