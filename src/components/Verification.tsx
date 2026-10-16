export default function Verification() {
  return (
    <section
      id="verification"
      aria-labelledby="verification-heading"
      className="border-t border-titanium/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <h2
          id="verification-heading"
          className="max-w-3xl font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl"
        >
          Absolute Authority.
        </h2>

        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-fog">
          <p>
            PostAirborne runs every flight you log against ADS-B radar data. If
            it flew, it&rsquo;s proven. If it didn&rsquo;t, it can&rsquo;t be
            in your logbook.
          </p>
          <p>
            Then your instructor seals it. One tap from a push notification, no
            app login required. The endorsement is signed, timestamped, and
            bound to the record.
          </p>
          <p>
            Two layers of truth. The kind of audit trail a CAA examiner
            doesn&rsquo;t argue with.
          </p>
        </div>

        <div className="mt-12 max-w-md rounded-lg border border-titanium bg-graphite p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-[0.18em] text-gold">
              FLIGHT RECORD
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-verified/40 bg-verified/10 px-2.5 py-1 text-xs font-medium text-verified">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-verified"
              />
              ADS-B VERIFIED
            </span>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-fog">
                Date
              </dt>
              <dd className="mt-1 text-bone">08 MAY 2026</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-fog">
                Route
              </dt>
              <dd className="mt-1 text-bone">EGLC → EGKB</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-fog">
                Aircraft
              </dt>
              <dd className="mt-1 text-bone">G-CESSN</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-fog">
                Block
              </dt>
              <dd className="mt-1 text-bone">1.5 H</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center justify-between border-t border-titanium/60 pt-4 font-mono text-xs text-fog">
            <span>PF00789</span>
            <span>SEALED · DAVID B. SMITH, FI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
