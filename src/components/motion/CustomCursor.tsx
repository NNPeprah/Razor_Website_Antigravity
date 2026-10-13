"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only initialize on devices with fine pointer
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      xTo(mouseX);
      yTo(mouseY);

      // Check hovered element
      const target = document.elementFromPoint(mouseX, mouseY);
      const hoverItem = target?.closest("[data-cursor-hover]");

      if (hoverItem) {
        setIsHovered(true);
        const text = hoverItem.getAttribute("data-cursor-text") || "Explore";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: "translate(-50%, -50%)" }}
      aria-hidden="true"
    >
      {isHovered ? (
        <div
          ref={pillRef}
          className="cursor-pill flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-sky-400/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(56,189,248,0.25)] text-sky-100 text-xs font-medium tracking-wider uppercase scale-100 transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
          <span>{cursorText}</span>
        </div>
      ) : (
        <div className="relative flex items-center justify-center w-8 h-8">
          <div className="absolute inset-0 rounded-full border border-sky-400/30 scale-100 animate-ping opacity-25" />
          <div className="w-6 h-6 rounded-full border border-slate-300/40 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.15)]">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_6px_#38bdf8]" />
          </div>
        </div>
      )}
    </div>
  );
}
