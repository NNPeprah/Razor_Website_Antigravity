"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FEATURED_PROJECTS, Project } from "@/lib/data";
import TextFlip from "../motion/TextFlip";
import { ArrowUpRight, MapPin, CheckCircle2, X, Layers, Compass, Sparkles } from "lucide-react";

interface SelectedWorksProps {
  onOpenInquiry?: () => void;
}

export default function SelectedWorks({ onOpenInquiry }: SelectedWorksProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeProject) {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  const handleOpenDossier = (project: Project) => {
    setActiveProject(project);
    setSelectedGalleryIdx(0);
  };

  const handleCloseDossier = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header with Typographic Split */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-sky-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Selected Monographic Works
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-100">
            Monolithic Works & <br />
            <span className="font-serif italic font-normal text-sky-200">
              Private Sanctuaries
            </span>
          </h2>
        </div>

        <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
          Each residence is engineered as an irreversible commitment to permanence, sculpted from local geological bedrock and elevated through light. Click any monograph to inspect full spatial blueprints.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        {FEATURED_PROJECTS.map((project, index) => {
          // Layout variations for an organic architectural bento rhythm
          let colSpan = "md:col-span-6";
          if (index === 0) colSpan = "md:col-span-7";
          else if (index === 1) colSpan = "md:col-span-5";
          else if (index === 2) colSpan = "md:col-span-5";
          else if (index === 3) colSpan = "md:col-span-7";

          return (
            <div
              key={project.id}
              onClick={() => handleOpenDossier(project)}
              data-cursor-hover
              data-cursor-text={project.accentText}
              className={`${colSpan} group relative rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800/80 transition-all duration-500 hover:border-sky-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.18)] flex flex-col cursor-pointer`}
            >
              {/* Image Frame with Zoom Effect */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono uppercase tracking-widest text-sky-300">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-sky-300 group-hover:border-sky-400/50 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Project Location & Area Floating Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 z-10">
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {project.location}
                  </span>
                  <span className="text-slate-400">{project.area}</span>
                </div>
              </div>

              {/* Card Body & Dynamic Expandable Scope */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl md:text-3xl font-light text-slate-100 group-hover:text-sky-200 transition-colors">
                      <TextFlip text={project.title} />
                    </h3>
                    <span className="font-mono text-xs text-sky-400/80">
                      [{project.year}]
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Architectural Features Staggered on Card Hover */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {project.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/50 border border-slate-700/40 text-[11px] text-slate-300 font-mono"
                    >
                      <CheckCircle2 className="w-3 h-3 text-sky-400" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Project Dossier Modal / Lightbox */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div
            onClick={handleCloseDossier}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl animate-fadeIn"
          />

          {/* Dossier Card Container */}
          <div className="relative z-10 w-full max-w-5xl bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col animate-scaleUp">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                  Architectural Dossier • Ref #{activeProject.id.toUpperCase()}
                </span>
              </div>

              <button
                onClick={handleCloseDossier}
                aria-label="Close Project Dossier"
                className="w-9 h-9 rounded-full border border-slate-700 bg-slate-850 hover:bg-slate-800 hover:border-sky-400 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto flex-1 p-6 md:p-10 space-y-8">
              {/* Main High-Res Gallery Preview */}
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
                  <Image
                    src={activeProject.gallery[selectedGalleryIdx] || activeProject.image}
                    alt={`${activeProject.title} perspective`}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>
                      Perspective 0{selectedGalleryIdx + 1} of 0{activeProject.gallery.length}
                    </span>
                    <span className="text-sky-300 font-semibold">{activeProject.location}</span>
                  </div>
                </div>

                {/* Gallery Thumbnail Selectors */}
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {activeProject.gallery.map((thumbUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGalleryIdx(idx)}
                      className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        selectedGalleryIdx === idx
                          ? "border-sky-400 scale-102 shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                          : "border-slate-800 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={thumbUrl}
                        alt={`Thumbnail 0${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Core Meta */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400 block mb-2">
                    {activeProject.category} • {activeProject.year}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-light text-slate-100 tracking-tight">
                    {activeProject.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
                  <div>
                    <span className="block text-slate-600 uppercase">Gross Area</span>
                    <span className="text-slate-200 text-sm">{activeProject.area}</span>
                  </div>
                  <div>
                    <span className="block text-slate-600 uppercase">Location</span>
                    <span className="text-slate-200 text-sm">{activeProject.location}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Architectural Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5" />
                    Spatial Narrative & Concept
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {activeProject.description}
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                      Lead Architect Synthesis
                    </span>
                    <p className="text-xs text-sky-200 italic font-serif">
                      “{activeProject.architectNote}”
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    Materiality & Engineering
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4">
                    <span className="text-[11px] font-mono uppercase text-slate-500 block mb-1">
                      Primary Material Palette
                    </span>
                    <p className="text-xs text-slate-200 font-mono">
                      {activeProject.materials}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {activeProject.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-300 font-mono"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-500">
                  Full construction drawings and structural dossiers provided under Swiss NDA.
                </span>
                <button
                  onClick={() => {
                    handleCloseDossier();
                    if (onOpenInquiry) onOpenInquiry();
                  }}
                  className="px-6 py-3 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-medium text-xs font-mono uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center gap-2 shrink-0"
                >
                  <span>Inquire Regarding Similar Commission</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
