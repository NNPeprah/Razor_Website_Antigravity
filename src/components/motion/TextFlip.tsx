"use client";

import React from "react";

interface TextFlipProps {
  text: string;
  className?: string;
  delayOffset?: number; // offset increment in seconds (default 0.015s)
}

export default function TextFlip({ text, className = "", delayOffset = 0.015 }: TextFlipProps) {
  const characters = Array.from(text);

  return (
    <span className={`char-flip-group inline-block ${className}`}>
      <span className="char-flip-wrapper">
        {characters.map((char, i) => (
          <span
            key={i}
            className="char-flip-span"
            style={{
              transitionDelay: `${i * delayOffset}s`,
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
