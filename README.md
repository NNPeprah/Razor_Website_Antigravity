# RAZOR — Luxury Architecture & Private Residences

An award-caliber, modern website built for high-end architecture, real estate, and luxury residences. Directly inspired by the motion engineering of **[Leome & Partners](https://leome-and-partners.com/)**, this project specializes in fluid, physics-driven web animations, kinetic typography, and smooth inertia scrolling.

---

## 🎨 Visual Identity & Palette

Designed around **Light Grey** and **Light Blue** atop deep architectural slate and obsidian:
- **Light Blue Accents**: `#38bdf8` (primary sky highlight), `#7dd3fc` (light cyan glow), `#bae6fd` (soft ice blue)
- **Light Grey Tones**: `#f8fafc` (pearl white), `#e2e8f0` (platinum grey), `#94a3b8` (muted stone)
- **Monolithic Backgrounds**: `#080c13` (obsidian black), `#0f1623` (deep slate), `#141d2e` (card surface)
- **Monogram & Logo**: Precision geometric elevation wireframe with cantilever accents in light grey and light blue (ready to swap with client logo).

---

## ⚡ Motion & Animation Architecture

1. **Lenis Smooth Scroll + GSAP Ticker Sync**:
   - Inertia scrolling decoupled from browser wheel stutter.
   - Synchronized with `ScrollTrigger.update` and GSAP ticker with `lagSmoothing(0)` for zero layout jitter.
2. **Kinetic Typography (Rolling Character Flip)**:
   - Letter-by-letter vertical flip with staggered `transition-delay` offsets and CSS `text-shadow: 0px 1.3em currentColor`.
3. **Dynamic Low-Latency Cursor (`gsap.quickTo`)**:
   - Sub-millisecond spring follower tracking the mouse.
   - Contextual action badges (*"Explore Residence"*, *"View Penthouse"*, *"Inquire"*) when hovering interactive elements.
   - Automatically disabled on touch devices to conserve resources.
4. **Fullscreen Curtain Navigation**:
   - Smooth `clip-path: polygon(...)` diagonal curtain reveal.
   - Sibling hover dimming: hovering any link dims siblings to `0.2` opacity.
5. **Interactive Bento Grid & Hover Expansions**:
   - Origin-pinned background cards with 180° icon rotation and staggered architectural features.
6. **Responsive Scrubbed Parallax**:
   - Image depth scrolling with `gsap.matchMedia`, gracefully optimized for mobile.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel (Free Client Preview)

This project is built on **Next.js 16 (App Router)** and is 100% native to Vercel.

### Method 1: Using the Vercel CLI (Instant)
```bash
npx vercel
```
Follow the simple prompts (accept defaults) to receive a live preview URL in under 60 seconds.

### Method 2: Git Repository
1. Push this folder to a GitHub/GitLab repository.
2. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
3. Vercel will auto-detect Next.js and build with zero extra configuration.
