"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Particle System ─────────────────────────────────────────── */
type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  char: string;
  color: string;
};

const CHARS = ["🌱", "🌿", "🌲", "🍃", "✦", "◆", "◇", "⬡"];
const COLORS = [
  "rgba(34,197,94,0.8)",
  "rgba(16,185,129,0.7)",
  "rgba(6,182,212,0.7)",
  "rgba(52,211,153,0.8)",
  "rgba(134,239,172,0.6)",
];

function useParticles(count = 40) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const initial: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.08,
      vy: -(Math.random() * 0.06 + 0.02),
      size: Math.random() * 14 + 10,
      opacity: Math.random() * 0.5 + 0.2,
      char: CHARS[Math.floor(Math.random() * CHARS.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setParticles(initial);
  }, [count]);

  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let x = p.x + p.vx;
          let y = p.y + p.vy;
          if (x < -5) x = 105;
          if (x > 105) x = -5;
          if (y < -5) y = 105;
          return { ...p, x, y };
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, [particles.length]);

  return particles;
}

/* ─── Main Component ──────────────────────────────────────────── */
export default function NotFound() {
  const particles = useParticles(35);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [mounted, setMounted] = useState(false);
  const [typed, setTyped] = useState("");
  const fullText = "Something grew here...";

  useEffect(() => {
    setMounted(true);
  }, []);

  /* typewriter */
  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, [mounted]);

  /* mouse parallax */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const parallaxX = (mousePos.x - 50) * 0.15;
  const parallaxY = (mousePos.y - 50) * 0.15;

  return (
    <div
      ref={containerRef}
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#020804] flex items-center justify-center"
    >
      {/* ── Particle Field ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute select-none transition-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize: `${p.size}px`,
              opacity: p.opacity,
              filter: "blur(0.3px)",
              willChange: "left, top",
            }}
          >
            {p.char}
          </span>
        ))}
      </div>

      {/* ── Deep Radial Glow (mouse-parallax) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(ellipse 55% 55% at ${mousePos.x}% ${mousePos.y}%, rgba(22,163,74,0.22) 0%, rgba(6,182,212,0.10) 40%, transparent 70%)`,
        }}
      />

      {/* ── Secondary glow bottom-right ── */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-900/30 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-900/20 blur-[100px] pointer-events-none z-0" />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* ── Central Content ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full px-6 gap-8"
        style={{
          transform: `translate(${parallaxX * -0.3}px, ${parallaxY * -0.3}px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* Big glowing 404 */}
        <div className="relative select-none">
          {/* outer ring pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full border border-emerald-500/20 animate-ping-slow" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border border-teal-500/20 animate-ping-slow [animation-delay:1s]" />
          </div>

          <h1
            className="text-[9rem] sm:text-[12rem] font-black tracking-tighter leading-none"
            style={{
              background:
                "linear-gradient(135deg, #22c55e 0%, #14b8a6 35%, #06b6d4 65%, #22c55e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(34,197,94,0.45)) drop-shadow(0 0 80px rgba(6,182,212,0.25))",
            }}
          >
            404
          </h1>
        </div>

        {/* Typewriter line */}
        <p className="text-emerald-400/80 font-mono text-sm sm:text-base tracking-[0.25em] uppercase min-h-[1.5em]">
          {typed}
          <span className="animate-pulse text-emerald-400">|</span>
        </p>

        {/* Description */}
        <div className="space-y-2 max-w-md mx-auto">
          <p className="text-white/80 text-base sm:text-lg font-semibold tracking-tight leading-relaxed">
            The root you followed leads to uncharted terrain.
          </p>
          <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
            Like a sapling that needs the right soil, this page hasn&apos;t found its ground yet. Let us guide you back to where life is thriving.
          </p>
        </div>

        {/* CTA Row */}
        <div className="flex flex-wrap gap-3 items-center justify-center pt-2">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white overflow-hidden"
          >
            {/* animated gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-[background-position] duration-500 rounded-full" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.6)]" />
            <svg xmlns="http://www.w3.org/2000/svg" className="relative w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="relative">Return Home</span>
          </Link>

          <Link
            href="/missions"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15 hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
            Explore Missions
          </Link>
        </div>

        {/* Footer hint */}
        <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase mt-4">
          🌳 Plant A Billion Trees Foundation
        </p>
      </div>

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(0.9); opacity: 0.6; }
          70% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
