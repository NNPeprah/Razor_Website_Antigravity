import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CustomCursor from "@/components/motion/CustomCursor";

export const metadata: Metadata = {
  title: "RAZOR | Monolithic Architecture & Private Residences",
  description:
    "Sculpting light, stone, and space into enduring residential and institutional sanctuaries worldwide.",
  openGraph: {
    title: "RAZOR | Monolithic Architecture & Private Residences",
    description:
      "Sculpting light, stone, and space into enduring residential and institutional sanctuaries worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className="bg-[#080c13] text-slate-100 antialiased selection:bg-sky-400 selection:text-slate-950"
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
