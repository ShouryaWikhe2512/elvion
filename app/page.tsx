"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThreatSection } from "@/components/ThreatSection";
import { AISection } from "@/components/AISection";
import { HoneypotSection } from "@/components/HoneypotSection";
import { AudioVideoSection } from "@/components/AudioVideoSection";
import { EvidenceSection } from "@/components/EvidenceSection";
import { MarketSection } from "@/components/MarketSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Page() {
  return (
    <main className="w-full bg-background">
      <Navbar />
      <Hero />
      <section id="threat">
        <ThreatSection />
      </section>
      <section id="defense">
        <AISection />
      </section>
      <HoneypotSection />
      <AudioVideoSection />
      <EvidenceSection />
      <section id="market">
        <MarketSection />
      </section>
      <FinalCTA />
    </main>
  );
}
