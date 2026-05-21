type Feature = {
  label: string;
  lead: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    label: "VERIFIED LOGBOOK",
    lead: "Reconciled against radar.",
    body: "Every flight cross-referenced with ADS-B data. Tamper-evident, audit-ready, defensible.",
  },
  {
    label: "INSTRUCTOR ENDORSEMENT",
    lead: "Sealed by your CFI.",
    body: "One-tap sign-off from your linked instructor. Signed and bound to the record, not stapled to it.",
  },
  {
    label: "MILESTONE CARDS",
    lead: "First Solo. 500 hours. Type rating.",
    body: "Share-ready certificates carrying your academy's mark. The career moments, properly recorded.",
  },
  {
    label: "MULTI-AUTHORITY EXPORT",
    lead: "EASA, UK CAA, FAA.",
    body: "Same data, authority-correct layouts. The export your examiner expects, generated in seconds.",
  },
  {
    label: "PORTABLE",
    lead: "Bring your hours with you.",
    body: "Import from LogTen Pro, ForeFlight, MyFlightbook, CrewLounge, FlyLog, SafeLog. Nothing left behind.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-titanium/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="features-heading"
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
        >
          Five reasons it stays on your phone.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-fog">
          Designed for working pilots. Built for the authorities. Tuned for the
          kind of pilot who notices the difference.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((feature) => (
            <li
              key={feature.label}
              className="flex flex-col rounded-lg border border-titanium bg-graphite p-6 transition-colors hover:border-gold/40"
            >
              <span className="text-xs font-semibold tracking-[0.18em] text-gold">
                {feature.label}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-bone">
                {feature.lead}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
