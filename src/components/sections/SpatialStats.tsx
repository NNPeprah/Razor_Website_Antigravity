"use client";

import React, { useRef } from "react";
import { STUDIO_METRICS } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SpatialStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      gsap.from(".stat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="metrics"
      ref={containerRef}
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STUDIO_METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="stat-card relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800/80 hover:border-sky-400/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs text-sky-400/80 uppercase tracking-widest mb-4">
                Metric 0{idx + 1}
              </div>
              <div className="text-4xl md:text-5xl font-light text-slate-100 tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-slate-200 mb-2">
                {metric.label}
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-800/60 leading-relaxed">
              {metric.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
