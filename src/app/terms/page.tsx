import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — PostFlight",
  description: "The terms under which PostFlight is offered.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="21 May 2026">
      <h2>About</h2>
      <p>
        These are the terms for using the PostFlight app, web app, and the
        postflight.com website. By using PostFlight you agree to these terms.
      </p>

      <h2>Use of the service</h2>
      <p>
        Personal, non-commercial use by licensed pilots and student pilots.
        Don&rsquo;t redistribute the app or its data exports as your own
        product.
      </p>

      <h2>Logbook accuracy is your responsibility</h2>
      <p>
        PostFlight is a record-keeping tool, not a substitute for the
        pilot&rsquo;s legal responsibility to maintain accurate flight records
        as required by their licensing authority. Always verify exports before
        submission to a CAA, FAA, or EASA examiner.
      </p>

      <h2>ADS-B verification is best-effort</h2>
      <p>
        Verification depends on third-party radar data availability, aircraft
        transponder status, and coverage in your region. A flight may be
        unverifiable through no fault of the pilot. Verification status is
        informational, not a legal certification.
      </p>

      <h2>Subscriptions</h2>
      <p>
        Pro subscriptions are billed annually at $79 USD. The Founding 500
        lifetime price lock applies as long as the subscription remains
        continuously active; if it lapses, the lock resets and the
        then-current price applies on resubscription.
      </p>

      <h2>Instructor endorsements</h2>
      <p>
        Endorsements made through PostFlight are a digital record of the
        instructor&rsquo;s sign-off. The instructor remains responsible for
        the accuracy and authority of their endorsement under applicable
        aviation law.
      </p>

      <h2>As-is</h2>
      <p>
        The service is provided as-is, without warranty. We do our best to
        keep it accurate, available, and audit-ready, but you use it at your
        own discretion.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent permitted by law, PostFlight Ltd is not liable for
        indirect or incidental loss. Nothing limits liability that cannot be
        limited under English law.
      </p>

      <h2>Changes</h2>
      <p>These terms may change. We&rsquo;ll update the date at the top.</p>

      <h2>Governing law</h2>
      <p>
        England and Wales. Courts of England and Wales for any dispute.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:hello@postflight.com">hello@postflight.com</a>.
      </p>
    </LegalPage>
  );
}
