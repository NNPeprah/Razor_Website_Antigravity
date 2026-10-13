"use client";

import React from "react";
import Image from "next/image";
import { SERVICE_PILLARS } from "@/lib/data";
import TextFlip from "../motion/TextFlip";
import { ArrowUpRight, Check } from "lucide-react";

export default function ArchitecturalPillars() {
  return (
    <section id="expertise" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-sky-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Disciplines & Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-100">
            End-to-End <br />
            <span className="font-serif italic font-normal text-sky-200">
              Spatial Execution
            </span>
          </h2>
        </div>

        <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
          From acquisition site audits in the Swiss Alps to custom millwork in Mayfair, our team oversees every millimeter of the structural lifecycle.
        </p>
      </div>

      {/* 4 Pillars Grid with Expandable Hover States & Subtle Background Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {SERVICE_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            data-cursor-hover
            data-cursor-text="Inspect"
            className="group relative rounded-2xl p-8 bg-slate-900/40 border border-slate-800/80 hover:border-sky-400/50 hover:bg-slate-900/90 transition-all duration-500 flex flex-col justify-between min-h-[460px] overflow-hidden"
          >
            {/* Background Relatable Architectural Image (Smooth Hover Reveal) */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-out">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            {/* Origin-Pinned Accent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-slate-900/30 to-slate-950 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Bar: Number & Animated Rotating Icon */}
            <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate-800/60">
              <span className="font-mono text-xs text-sky-400 tracking-widest font-semibold">
                [{pillar.num}]
              </span>
              <div className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-sky-300 group-hover:border-sky-400/60 transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45 text-sky-400" />
              </div>
            </div>

            {/* Middle: Subtitle & Staggered Scope List */}
            <div className="relative z-10 my-auto py-6">
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {pillar.subtitle}
              </p>

              <ul className="space-y-2.5">
                {pillar.scope.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-300 transition-all duration-300"
                  >
                    <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Pillar Heading with Kinetic Character Flip */}
            <div className="relative z-10 pt-6 border-t border-slate-800/60">
              <h3 className="text-xl font-light text-slate-100 group-hover:text-sky-200 transition-colors">
                <TextFlip text={pillar.title} />
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
