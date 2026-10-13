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
    md: "text-base tracking-[0.3em]",
    lg: "text-xl tracking-[0.35em]",
  };

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Razor Architectural Studio"
    >
      {/* Precision Razor Monogram in Light Grey & Light Blue */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-transform duration-500 group-hover:scale-105"
        >
          {/* Outer Technical Grid / Bounding Coordinate Box */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            stroke="#94a3b8"
            strokeWidth="0.75"
            strokeDasharray="2 3"
            opacity="0.35"
          />

          {/* Sharp Monolithic 'R' Geometry - Light Grey */}
          <path
            d="M12 38V10H26C31.5228 10 36 14.4772 36 20C36 25.5228 31.5228 30 26 30H12"
            stroke="#f1f5f9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Diagonal Razor Cantilever Strut - Light Grey */}
          <path
            d="M23 29L36 38"
            stroke="#e2e8f0"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Razor-Sharp Precision Line - Light Sky Blue */}
          <line
            x1="8"
            y1="20"
            x2="42"
            y2="20"
            stroke="#38bdf8"
            strokeWidth="1.75"
            strokeLinecap="round"
          />

          {/* Structural Node Anchor - Light Blue Glow */}
          <circle
            cx="26"
            cy="20"
            r="2.5"
            fill="#38bdf8"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Typography: RAZOR */}
      <div className="flex flex-col">
        <span className={`font-semibold font-mono text-slate-100 uppercase ${textSizes[size]}`}>
          RAZOR<span className="text-sky-400 font-light">.</span>
        </span>
        <span className="text-[9px] tracking-[0.35em] text-slate-400 uppercase -mt-0.5">
          ARCHITECTURAL STUDIO
        </span>
      </div>
    </Link>
  );
}
