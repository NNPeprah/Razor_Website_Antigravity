"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base tracking-[0.25em]",
    lg: "text-xl tracking-[0.3em]",
  };

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Aura & Stone Architecture"
    >
      {/* Precision Monogram in Light Grey & Light Blue */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_10px_rgba(56,189,248,0.25)] transition-transform duration-500 group-hover:scale-105"
        >
          {/* Subtle Outer Spatial Grid / Frame */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            stroke="#94a3b8"
            strokeWidth="0.75"
            strokeDasharray="2 3"
            opacity="0.4"
          />

          {/* Precision Architectural Elevation Geometry - Light Grey */}
          <path
            d="M6 38L24 8L42 38"
            stroke="#f1f5f9"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Cantilever Horizon Line - Light Blue Accent */}
          <line
            x1="12"
            y1="28"
            x2="44"
            y2="28"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Secondary Structural Anchor - Light Blue */}
          <circle
            cx="24"
            cy="28"
            r="3"
            fill="#38bdf8"
            className="animate-pulse"
          />

          {/* Modernist Vertical Axis - Light Grey */}
          <line
            x1="24"
            y1="16"
            x2="24"
            y2="40"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="1.5 2"
          />
        </svg>
      </div>

      {/* Typography with Light Grey Main & Light Blue Ampersand */}
      <div className="flex flex-col">
        <span className={`font-semibold font-mono text-slate-100 uppercase ${textSizes[size]}`}>
          AURA <span className="text-sky-400 font-light">&</span> STONE
        </span>
        <span className="text-[9px] tracking-[0.35em] text-slate-400 uppercase -mt-0.5">
          ARCHITECTURAL STUDIO
        </span>
      </div>
    </Link>
  );
}
