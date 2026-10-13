"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import TextFlip from "../motion/TextFlip";
import { ArrowUpRight, X, Phone, Mail, MapPin } from "lucide-react";
import { SITE_METADATA } from "@/lib/data";

interface NavigationProps {
  onOpenInquiry?: () => void;
}

export default function Navigation({ onOpenInquiry }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Portfolio", href: "#projects", num: "01" },
    { label: "Philosophy", href: "#philosophy", num: "02" },
    { label: "Expertise", href: "#expertise", num: "03" },
    { label: "Studio", href: "#metrics", num: "04" },
    { label: "Inquiries", href: "#contact", num: "05" },
  ];

  return (
    <>
      {/* Top Floating Glass Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-6">
            {/* Quick Consultation CTA - Desktop */}
            <button
              onClick={onOpenInquiry}
              data-cursor-hover
              data-cursor-text="Inquire"
              className="hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-sky-400/30 bg-slate-900/60 hover:bg-slate-800/80 hover:border-sky-400 text-xs uppercase tracking-widest text-slate-200 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.1)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <TextFlip text="Private Advisory" />
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </button>

            {/* Menu Trigger Button with Character Stagger */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Fullscreen Menu"
              aria-expanded={isOpen}
              data-cursor-hover
              data-cursor-text={isOpen ? "Close" : "Menu"}
              className="group relative flex items-center gap-3 px-5 py-2.5 rounded-full border border-slate-700/60 bg-slate-900/70 hover:border-sky-400/50 hover:bg-slate-800/90 text-xs uppercase tracking-widest text-slate-100 transition-all duration-300"
            >
              <span className="font-mono text-sky-300">
                <TextFlip text={isOpen ? "CLOSE" : "MENU"} />
              </span>

              {/* Animated Hamburger Icon */}
              <div className="relative w-4 h-3 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-slate-100 transition-transform duration-300 ease-out origin-left ${
                    isOpen ? "rotate-45 translate-x-0.5 -translate-y-0.5 bg-sky-400" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-slate-100 transition-opacity duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-slate-100 transition-transform duration-300 ease-out origin-left ${
                    isOpen ? "-rotate-45 translate-x-0.5 translate-y-0.5 bg-sky-400" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Curtain Overlay */}
      <div
        className={`nav-curtain fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-16 lg:p-24 ${
          isOpen ? "is-active" : ""
        }`}
      >
        {/* Background Architectural Accent Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="h-full w-full grid grid-cols-4 md:grid-cols-6 border-x border-slate-700">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-r border-slate-700 h-full" />
            ))}
          </div>
        </div>

        {/* Top Spacer */}
        <div className="flex justify-between items-center pt-8 border-b border-slate-800/50 pb-6">
          <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-slate-400">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Navigation Index
          </div>
          <span className="text-xs font-mono text-slate-500 tracking-wider">
            {SITE_METADATA.yearEstablished} — Present
          </span>
        </div>

        {/* Main Navigation Links with Sibling Dimming */}
        <div className="my-auto py-8">
          <ul className="curtain-menu-list flex flex-col gap-4 md:gap-6">
            {navLinks.map((item, idx) => (
              <li key={item.label} className="curtain-menu-item group overflow-hidden">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  data-cursor-hover
                  data-cursor-text="Navigate"
                  className="flex items-baseline gap-4 md:gap-8 transition-transform duration-500 group-hover:translate-x-3"
                >
                  <span className="font-mono text-xs md:text-sm text-sky-400 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                    [{item.num}]
                  </span>
                  <span className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-200 group-hover:text-sky-300 transition-colors">
                    <TextFlip text={item.label} delayOffset={0.02} />
                  </span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-sky-400 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Metadata & Coordinates */}
        <div className="pt-8 border-t border-slate-800/50 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400">
          <div>
            <span className="block font-mono uppercase tracking-widest text-slate-500 mb-1">
              Direct Inquiries
            </span>
            <a
              href={`mailto:${SITE_METADATA.contactEmail}`}
              className="text-slate-200 hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              {SITE_METADATA.contactEmail}
            </a>
          </div>

          <div>
            <span className="block font-mono uppercase tracking-widest text-slate-500 mb-1">
              Global Presence
            </span>
            <p className="text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              {SITE_METADATA.locations.join(" • ")}
            </p>
          </div>

          <div className="flex md:justify-end items-center">
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenInquiry) onOpenInquiry();
              }}
              className="px-5 py-2.5 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-medium text-xs tracking-widest uppercase transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
