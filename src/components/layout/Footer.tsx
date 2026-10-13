"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import TextFlip from "../motion/TextFlip";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { SITE_METADATA } from "@/lib/data";

interface FooterProps {
  onOpenInquiry?: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-slate-800/80 pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background Architectural Watermark Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full grid grid-cols-6 border-x border-slate-700">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-slate-700 h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand Info & Vision */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Logo size="lg" className="mb-6" />
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
                {SITE_METADATA.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenInquiry}
                data-cursor-hover
                data-cursor-text="Inquire"
                className="px-6 py-3 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-medium text-xs font-mono uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(56,189,248,0.2)]"
              >
                Book Private Viewing
              </button>
            </div>
          </div>

          {/* Navigation Links with Character Flip */}
          <div className="md:col-span-3">
            <span className="block font-mono text-xs text-sky-400 uppercase tracking-widest mb-6">
              Navigation
            </span>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#projects" className="text-slate-300 hover:text-sky-300 transition-colors">
                  <TextFlip text="Selected Portfolio" />
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-slate-300 hover:text-sky-300 transition-colors">
                  <TextFlip text="Design Philosophy" />
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-slate-300 hover:text-sky-300 transition-colors">
                  <TextFlip text="Spatial Capabilities" />
                </a>
              </li>
              <li>
                <a href="#metrics" className="text-slate-300 hover:text-sky-300 transition-colors">
                  <TextFlip text="Studio Milestones" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenInquiry}
                  className="text-slate-300 hover:text-sky-300 transition-colors text-left"
                >
                  <TextFlip text="Direct Concierge" />
                </button>
              </li>
            </ul>
          </div>

          {/* Studios & Presence */}
          <div className="md:col-span-4">
            <span className="block font-mono text-xs text-sky-400 uppercase tracking-widest mb-6">
              Global Studios
            </span>
            <div className="space-y-4 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100 block">Zurich Headquarters</strong>
                  <span className="text-slate-400">Gotthardstrasse 26, 8002 Zürich</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100 block">London Mayfair</strong>
                  <span className="text-slate-400">14 Berkeley Square, London W1J 6BL</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 text-slate-400">
                <Mail className="w-4 h-4 text-sky-400" />
                <a href={`mailto:${SITE_METADATA.contactEmail}`} className="hover:text-sky-300 transition-colors">
                  {SITE_METADATA.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Editorial Display Wordmark (inspired by leome-and-partners footer-text-display) */}
        <div className="my-12 md:my-16 text-center select-none overflow-hidden">
          <div className="text-[16vw] font-light tracking-tighter text-slate-800/40 uppercase leading-none whitespace-nowrap hover:text-slate-700/60 transition-colors duration-700">
            RAZOR<span className="text-sky-400/30">.</span>
          </div>
        </div>

        {/* Bottom Legal, Dynamic Year, and Back-to-Top */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-6">
            <span>© {year} Razor Architects. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-sky-400/80">Monolithic Architecture & Living</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              data-cursor-hover
              data-cursor-text="Top"
              className="flex items-center gap-2 hover:text-sky-300 transition-colors uppercase tracking-widest"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
