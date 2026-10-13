"use client";

import React, { useRef } from "react";
import ParallaxImage from "../motion/ParallaxImage";
import TextFlip from "../motion/TextFlip";
import { Compass, MoveRight } from "lucide-react";

interface PhilosophyProps {
  onOpenInquiry?: () => void;
}

export default function StudioPhilosophy({ onOpenInquiry }: PhilosophyProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col justify-between py-24 md:py-36 px-6 md:px-12 my-12 overflow-hidden bg-slate-950 border-y border-slate-800/80"
    >
      {/* Background Parallax Architectural Materiality (Bush-Hammered Concrete & Sculptural Light) */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80"
          alt="Architectural sculptural concrete and spatial light choreography"
          containerClassName="w-full h-full"
          speed={22}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/75 to-slate-950" />
      </div>

      {/* Top Floating Coordinates */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-slate-800/60 pb-6 text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          Manifesto & Design Philosophy
        </div>
        <div className="hidden sm:flex items-center gap-3 text-sky-400/80">
          <Compass className="w-3.5 h-3.5" />
          <span>Acoustic Silence • Monolithic Mass • Zero Carbon</span>
        </div>
      </div>

      {/* Main Massive Editorial Text Statement */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-16">
        <div className="max-w-4xl">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 leading-tight tracking-tight">
            “Architecture must not merely shelter life; it must{" "}
            <span className="font-serif italic font-normal text-sky-200 underline decoration-sky-400/40 decoration-1 underline-offset-8">
              elevate consciousness
            </span>
            . We fuse raw geological permanence with the highest threshold of
            spatial and acoustic silence.”
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between pt-8 border-t border-slate-800/60">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <span className="text-sky-400 font-semibold">EST. 2018</span>
            <span>•</span>
            <span>Independent Swiss-British Practice</span>
          </div>

          <button
            onClick={onOpenInquiry}
            data-cursor-hover
            data-cursor-text="Inquire"
            className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-sky-300 hover:text-slate-100 transition-colors"
          >
            <span>Read Studio Manifesto & Monographs</span>
            <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-sky-400" />
          </button>
        </div>
      </div>

      {/* Bottom Technical Grid Points */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-800/60 text-xs font-mono text-slate-400">
        <div>
          <span className="block text-slate-500 mb-1">01 / MATERIALITY</span>
          <span className="text-slate-200">Local quarry limestone & blackened larch</span>
        </div>
        <div>
          <span className="block text-slate-500 mb-1">02 / THERMAL</span>
          <span className="text-slate-200">Decoupled sub-slab geothermal loops</span>
        </div>
        <div>
          <span className="block text-slate-500 mb-1">03 / GLAZING</span>
          <span className="text-slate-200">Structural frameless low-iron crystal</span>
        </div>
        <div>
          <span className="block text-slate-500 mb-1">04 / DISCRETION</span>
          <span className="text-slate-200">Strict non-disclosure for all private estates</span>
        </div>
      </div>
    </section>
  );
}
