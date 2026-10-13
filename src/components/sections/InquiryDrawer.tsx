"use client";

import React, { useState } from "react";
import { X, Send, Shield, Lock, CheckCircle2 } from "lucide-react";
import TextFlip from "../motion/TextFlip";
import { SITE_METADATA } from "@/lib/data";

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryDrawer({ isOpen, onClose }: InquiryDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "Switzerland",
    type: "Private Residence",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulated success reset
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-500 animate-fadeIn"
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-xl bg-slate-950 border-l border-slate-800 h-full overflow-y-auto p-8 md:p-12 flex flex-col justify-between shadow-2xl">
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Confidential Advisory
            </div>

            <button
              onClick={onClose}
              aria-label="Close Inquiry Drawer"
              className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900 flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Heading */}
          <div className="mt-8 mb-8">
            <h3 className="text-3xl font-light text-slate-100 mb-3">
              Initiate a Private Commission
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We accept a limited volume of bespoke residential projects per calendar year to ensure uncompromised principal involvement.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-sky-300 mb-6">
                <CheckCircle2 className="w-8 h-8 text-sky-400" />
              </div>
              <h4 className="text-2xl font-light text-slate-100 mb-2">
                Inquiry Received
              </h4>
              <p className="text-sm text-slate-400 max-w-xs leading-relaxed mb-6">
                Our principal architect will review your dossier and contact you via secure channels within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full border border-slate-700 text-xs font-mono uppercase tracking-widest text-slate-200 hover:border-sky-400"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Client / Representative Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Julian Sterling"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Direct Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="client@sanctuary.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Region / Parcel
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="Switzerland">Switzerland (Alpine/Lakes)</option>
                    <option value="UK">United Kingdom (London/Cotswolds)</option>
                    <option value="France">French Riviera / Provence</option>
                    <option value="Scandinavia">Norway / Sweden</option>
                    <option value="International">Other International</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Commission Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="Private Residence">New Private Residence</option>
                    <option value="Interior Architecture">Interior Architecture</option>
                    <option value="Terrain Integration">Terrain & Landscape</option>
                    <option value="Site Advisory">Acquisition Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Project Notes & Vision
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide approximate parcel acreage, structural aspirations, or site requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-medium text-xs font-mono uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
              >
                <span>Transmit Confidential Dossier</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* NDA & Privacy Notice */}
        <div className="pt-8 border-t border-slate-800/80 flex items-center gap-3 text-[11px] font-mono text-slate-500">
          <Lock className="w-4 h-4 text-sky-400 shrink-0" />
          <span>Strict client confidentiality guaranteed under bilateral Swiss NDA.</span>
        </div>
      </div>
    </div>
  );
}
