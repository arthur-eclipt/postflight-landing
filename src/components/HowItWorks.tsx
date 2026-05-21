type Step = {
  number: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Log the flight",
    body: "Open PostFlight on shutdown. OOOI times pre-fill. Add role, remarks, route notes if you need to. Save.",
  },
  {
    number: "02",
    title: "Verified on landing",
    body: "Once you're back on signal, your flight is reconciled against ADS-B radar. The verification badge appears automatically. No further input.",
  },
  {
    number: "03",
    title: "Sealed by your instructor",
    body: "Push notification fires to your linked CFI with the flight details. One tap to approve. Signed, sealed, locked.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-t border-titanium/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="how-it-works-heading"
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
        >
          Three steps. Wheels-up to sealed.
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step) => (
            <li key={step.number}>
              <span className="font-display text-7xl font-bold tracking-tight text-gold">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-bone">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-fog">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
