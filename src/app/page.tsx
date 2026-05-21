import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Verification from "@/components/Verification";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ForAcademies from "@/components/ForAcademies";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-obsidian"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Verification />
        <Features />
        <HowItWorks />
        <ForAcademies />
        <Pricing />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
