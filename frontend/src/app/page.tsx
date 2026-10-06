"use client";

import React, { useState } from "react";
import { LandingExperience } from "@/components/landing/LandingExperience";
import { GooeyNav } from "@/components/navigation/GooeyNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsCrickDNA } from "@/components/sections/WhatIsCrickDNA";
import { CricketIntelligence } from "@/components/sections/CricketIntelligence";
import { PlayerPerformance } from "@/components/sections/PlayerPerformance";
import { MatchIntelligence } from "@/components/sections/MatchIntelligence";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductVision } from "@/components/sections/ProductVision";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/footer/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  const [landingComplete, setLandingComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      {/* Landing experience overlay */}
      <LandingExperience onComplete={() => setLandingComplete(true)} />

      {/* Main Navbar */}
      <GooeyNav />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <WhatIsCrickDNA />
        <CricketIntelligence />
        <PlayerPerformance />
        <MatchIntelligence />
        <TrainingSection />
        <HowItWorks />
        <ProductVision />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Restrained Custom Cursor */}
      <CustomCursor />
    </div>
  );
}
