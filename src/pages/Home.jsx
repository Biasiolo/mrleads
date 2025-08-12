import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Proof from "@/components/Proof";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      <Header />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Proof />
      <CTA />
      <FAQ />
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
    </div>
  );
}
