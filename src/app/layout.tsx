import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://postflight.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PostFlight — The pilot logbook that proves itself.",
  description:
    "Every flight verified against radar. Every milestone sealed by your instructor. The premium digital logbook for EASA, UK CAA, and FAA pilots.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "PostFlight",
    title: "PostFlight — The pilot logbook that proves itself.",
    description:
      "Every flight verified against radar. Every milestone sealed by your instructor. The premium digital logbook for EASA, UK CAA, and FAA pilots.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PostFlight — The pilot logbook that proves itself.",
    description:
      "Every flight verified against radar. Every milestone sealed by your instructor.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
