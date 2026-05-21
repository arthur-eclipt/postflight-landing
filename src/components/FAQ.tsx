type Item = {
  q: string;
  a: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    q: "When does PostFlight launch?",
    a: "iOS, Android, and web. Founding 500 pilots are first through the door. Join the waitlist above and you'll hear from us before launch.",
  },
  {
    q: "What does “ADS-B verified” mean?",
    a: "After each flight, PostFlight cross-references your logged entry against publicly broadcast ADS-B radar data. If a flight didn't fly, it can't appear in your logbook. The result is a verification badge bound to the record.",
  },
  {
    q: "Which authorities are supported at launch?",
    a: "EASA FCL.050, UK CAA, and FAA. The export engine is template-driven, so additional authorities only require a configuration update.",
  },
  {
    q: "Can I import from my current logbook?",
    a: "Yes. LogTen Pro, ForeFlight, MyFlightbook, CrewLounge (mccPILOTLOG), FlyLog, and SafeLog are supported out of the box. For other formats, a manual column mapping import is available.",
  },
  {
    q: "Will it work offline?",
    a: "Yes. The app is offline-first with an encrypted local database. Log at altitude, sync on the ground. ADS-B verification runs server-side once you reconnect.",
  },
  {
    q: "What does the Founding 500 lifetime lock mean?",
    a: "The first 500 pilots get 12 months free, then $79 / year for as long as the subscription stays continuously active. If you let it lapse, the lock resets.",
  },
  {
    q: "How do I get in touch?",
    a: (
      <>
        A real person reads{" "}
        <a
          href="mailto:hello@postflight.com"
          className="text-bone underline decoration-gold decoration-2 underline-offset-4 hover:decoration-gold-dim"
        >
          hello@postflight.com
        </a>
        . Academy enquiries:{" "}
        <a
          href="mailto:academies@postflight.com"
          className="text-bone underline decoration-gold decoration-2 underline-offset-4 hover:decoration-gold-dim"
        >
          academies@postflight.com
        </a>
        . Data requests:{" "}
        <a
          href="mailto:dpo@postflight.com"
          className="text-bone underline decoration-gold decoration-2 underline-offset-4 hover:decoration-gold-dim"
        >
          dpo@postflight.com
        </a>
        .
      </>
    ),
  },
];

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="shrink-0 text-fog transition-transform duration-200 group-open:rotate-45"
    >
      <path d="M 8 2 L 8 14" />
      <path d="M 2 8 L 14 8" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-titanium/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="faq-heading"
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
        >
          Common questions.
        </h2>

        <div className="mt-12 max-w-3xl divide-y divide-titanium border-y border-titanium">
          {ITEMS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-lg font-medium text-bone">
                <span>{item.q}</span>
                <PlusIcon />
              </summary>
              <div className="pb-6 pr-12 leading-relaxed text-fog">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
