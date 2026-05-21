type Tier = {
  id: string;
  label: string;
  name: string;
  price: string;
  priceNote: string;
  bullets: string[];
  highlight?: boolean;
  pill?: string;
  footnote?: string;
};

const TIERS: Tier[] = [
  {
    id: "discovery",
    label: "DISCOVERY",
    name: "Discovery",
    price: "Free",
    priceNote: "free forever",
    bullets: [
      "Up to 50 hours / year",
      "ADS-B flight verification",
      "Basic compliance export (EASA / UK CAA / FAA)",
      "Logbook import from major platforms",
      "Local encrypted storage",
    ],
  },
  {
    id: "pro",
    label: "PRO",
    name: "Pro",
    price: "$79",
    priceNote: "per year",
    bullets: [
      "Everything in Discovery",
      "Unlimited logging",
      "Instructor endorsement workflow",
      "Milestone detection and shareable certificates",
      "Multi-authority export (EASA FCL.050, UK CAA, FAA)",
      "Mapbox flight globe and dashboard",
      "Premium Obsidian UI, haptics, audio chimes",
    ],
  },
  {
    id: "founding",
    label: "FOUNDING 500",
    name: "Founding 500",
    price: "$79",
    priceNote: "per year, after 12 months free",
    pill: "LIMITED — 500 PILOTS",
    highlight: true,
    bullets: [
      "Everything in Pro",
      "12 months free at launch",
      "Lifetime price lock at $79 — for as long as the subscription stays active",
      "Founding pilot badge on your profile",
      "Direct line to the product team",
    ],
    footnote: "Reserved through the waitlist above.",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-t border-titanium/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="pricing-heading"
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
        >
          Three tiers. No app store markup.
        </h2>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {TIERS.map((tier) => (
            <li
              key={tier.id}
              className={`flex flex-col rounded-lg border bg-graphite p-8 ${
                tier.highlight ? "border-gold/60" : "border-titanium"
              }`}
            >
              {tier.pill && (
                <span className="inline-flex w-fit rounded-full bg-gold/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  {tier.pill}
                </span>
              )}
              <span
                className={`${tier.pill ? "mt-4" : ""} text-xs font-semibold uppercase tracking-[0.18em] ${
                  tier.highlight ? "text-gold" : "text-fog"
                }`}
              >
                {tier.label}
              </span>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-bone">
                {tier.name}
              </h3>
              <div className="mt-4">
                <p className="font-display text-4xl font-bold text-bone">
                  {tier.price}
                </p>
                <p className="mt-1 text-sm text-fog">{tier.priceNote}</p>
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-sm text-fog">
                {tier.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span aria-hidden="true" className="text-gold">
                      ·
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {tier.footnote && (
                <p className="mt-8 rounded-md border border-gold/40 px-3 py-2 text-xs text-gold">
                  {tier.footnote}
                </p>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-fog">
          Pricing in USD. Billed via the web — no App Store or Play Store
          commission. Academy partnership pricing on request.
        </p>
      </div>
    </section>
  );
}
