"use client";

import React, { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import SelectedWorks from "@/components/sections/SelectedWorks";
import StudioPhilosophy from "@/components/sections/StudioPhilosophy";
import ArchitecturalPillars from "@/components/sections/ArchitecturalPillars";
import SpatialStats from "@/components/sections/SpatialStats";
import Footer from "@/components/layout/Footer";
import InquiryDrawer from "@/components/sections/InquiryDrawer";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleOpenInquiry = () => setIsInquiryOpen(true);
  const handleCloseInquiry = () => setIsInquiryOpen(false);

  return (
    <main className="relative min-h-screen bg-[#080c13] text-slate-100 selection:bg-sky-400 selection:text-slate-950 overflow-x-hidden">
      {/* Persistent Fullscreen Curtain Navigation */}
      <Navigation onOpenInquiry={handleOpenInquiry} />

      {/* Hero Section */}
      <Hero onOpenInquiry={handleOpenInquiry} />

      {/* Selected Architectural Portfolio */}
      <SelectedWorks onOpenInquiry={handleOpenInquiry} />

      {/* Studio Philosophy & Manifesto (Full-bleed Parallax) */}
      <StudioPhilosophy onOpenInquiry={handleOpenInquiry} />

      {/* Capabilities & Architectural Disciplines */}
      <ArchitecturalPillars />

      {/* Quantitative Milestones & Stats */}
      <SpatialStats />

      {/* Editorial Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Confidential Client Commission Inquiry Drawer */}
      <InquiryDrawer isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
    </main>
  );
}
