"use client";

import React, { useRef } from "react";
import ParallaxImage from "../motion/ParallaxImage";
import TextFlip from "../motion/TextFlip";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HeroProps {
  onOpenInquiry?: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef1 = useRef<HTMLHeadingElement>(null);
  const headlineRef2 = useRef<HTMLHeadingElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef1.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
      })
        .from(
          headlineRef2.current,
          {
            y: 60,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.9"
        )
        .from(
          bottomBarRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 md:pt-40 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Spatial Coordinate Grid */}
      <div className="absolute top-12 right-12 hidden lg:flex items-center gap-3 font-mono text-[11px] text-slate-500 uppercase tracking-widest pointer-events-none">
        <Compass className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: "20s" }} />
        <span>47.3769° N, 8.5417° E — ZURICH HQ</span>
      </div>

      {/* Main Editorial Hero Layout */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Top Subtitle Pill */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-sky-400/20 text-[10px] font-mono uppercase tracking-[0.2em] text-sky-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Private Architecture Portfolio
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-500 tracking-wider">
            Volume VIII • 2026 Edition
          </span>
        </div>

        {/* Dynamic Split Editorial Headlines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1
              ref={headlineRef1}
              className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-slate-100 leading-[1.05]"
            >
              Sculpting <br />
              <span className="font-serif italic font-normal text-sky-200">
                sanctuary
              </span>{" "}
              in stone.
            </h1>
          </div>

          {/* Central Architectural Imagery Frame with Parallax */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.1)]">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
                alt="Cantilevered Swiss alpine luxury residence"
                containerClassName="aspect-[4/3] w-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  Elysian Pavilion — Lake Lucerne
                </span>
                <span className="text-sky-300">2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Headline & Value Statement */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p
              ref={headlineRef2}
              className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed"
            >
              We craft monolithic, climate-resilient private estates that fuse
              structural daring with quiet architectural intimacy.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href="#projects"
              data-cursor-hover
              data-cursor-text="View Works"
              className="group px-7 py-3.5 rounded-full bg-slate-100 hover:bg-sky-400 text-slate-950 font-medium text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <TextFlip text="Explore Projects" />
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <button
              onClick={onOpenInquiry}
              data-cursor-hover
              data-cursor-text="Connect"
              className="px-6 py-3.5 rounded-full border border-slate-700/80 bg-slate-900/60 hover:border-sky-400/60 hover:bg-slate-800 text-slate-300 text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
            >
              <TextFlip text="Schedule Consultation" />
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Pillars Bar (inspired by leome-and-partners hero footer) */}
      <div
        ref={bottomBarRef}
        className="mt-16 pt-6 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono tracking-wider text-slate-400 uppercase"
      >
        <div className="flex items-center gap-2">
          <span className="text-sky-400">01</span>
          <span>Private Residences</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sky-400">02</span>
          <span>Interior Architecture</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sky-400">03</span>
          <span>Terrain & Landscape</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sky-400">04</span>
          <span>Discreet Acquisitions</span>
        </div>
      </div>
    </section>
  );
}
