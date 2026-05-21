import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — PostFlight",
  description: "How PostFlight handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="21 May 2026">
      <h2>About PostFlight</h2>
      <p>
        This is the privacy policy for the PostFlight mobile app, web app, and
        the postflight.com website. PostFlight is built by PostFlight Ltd, a
        company registered in England.
      </p>

      <h2>What we collect when you create an account</h2>
      <p>
        Email, name, license type and number, optional academy affiliation.
        Pilots provide these knowingly to use the product.
      </p>

      <h2>Flight and logbook data</h2>
      <p>
        Stored on our PostgreSQL backend, encrypted at rest. A local encrypted
        SQLite cache lives on your device so the app works offline. You can
        export and delete your data at any time from inside the app or by
        request.
      </p>

      <h2>ADS-B verification</h2>
      <p>
        When a flight is logged, we query FlightAware AeroAPI with flight
        metadata (registration, route, times) to cross-reference against radar
        data. No personal information is sent to FlightAware.
      </p>

      <h2>Payments</h2>
      <p>
        Subscriptions are processed through Adapty (App Store / Google Play)
        and Stripe (web and Academy partners). We don&rsquo;t store full card
        details.
      </p>

      <h2>Waitlist</h2>
      <p>
        If you join the Founding 500 waitlist, your email is stored by
        Mailerlite for the purpose of contacting you about launch. You can
        unsubscribe at any time from any email we send.
      </p>

      <h2>Third parties</h2>
      <p>
        FlightAware AeroAPI (verification), Adapty / Stripe (payments),
        Mailerlite (waitlist email), Google Cloud (hosting infrastructure). No
        advertising SDKs. No third-party analytics on the marketing website.
      </p>

      <h2>Children&rsquo;s data</h2>
      <p>
        PostFlight is intended for licensed pilots and student pilots aged 16
        and over. We do not knowingly collect data from anyone under 16.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK GDPR you can access, correct, export, or delete your data,
        and object to processing. Email{" "}
        <a href="mailto:dpo@postflight.com">dpo@postflight.com</a>.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, we&rsquo;ll update the date at the top and
        notify active subscribers by email if the change is material.
      </p>

      <h2>Contact</h2>
      <p>
        <a href="mailto:dpo@postflight.com">dpo@postflight.com</a> for data
        requests,{" "}
        <a href="mailto:hello@postflight.com">hello@postflight.com</a> for
        everything else. PostFlight Ltd, registered in England.
      </p>
    </LegalPage>
  );
}
