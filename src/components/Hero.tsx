import WaitlistForm from "./WaitlistForm";
import { GreatCircleMap } from "./Decoration";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 text-fog opacity-[0.06]">
        <GreatCircleMap className="h-full w-full" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          FOUNDING 500 · LIMITED TO THE FIRST 500 PILOTS
        </p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-bone sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          The pilot logbook that proves itself.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-fog sm:text-xl">
          Every flight cross-verified against radar. Every milestone sealed by
          your instructor. A logbook that holds up under audit — and looks like
          it.
        </p>

        <WaitlistForm />

        <p className="mt-8 font-mono text-xs uppercase tracking-wider text-fog">
          ADS-B VERIFIED · EASA FCL.050 · UK CAA · FAA · 12 MONTHS FREE FOR
          FOUNDERS
        </p>
      </div>
    </section>
  );
}
