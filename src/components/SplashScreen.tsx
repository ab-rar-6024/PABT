"use client";

import { useEffect, useRef, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [entered, setEntered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // This splash screen now runs only once on initial website load (mount).
    // It does not block or slow down client-side page transitions.
    setVisible(true);
    setFading(false);
    setEntered(false);
    setProgress(0);

    const duration = 1600; // Elegant and snappy loading duration
    const enterTimer = setTimeout(() => setEntered(true), 50);

    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setFading(true);
        setTimeout(() => setVisible(false), 700); // Allow exit transition to complete
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      clearTimeout(enterTimer);
      cancelAnimationFrame(frame);
    };
  }, []); // Empty dependency array ensures it only runs once on initial page load

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground transition-all duration-700 ease-in-out ${
        fading
          ? "opacity-0 scale-98 -translate-y-4 pointer-events-none"
          : "opacity-100 scale-100 translate-y-0"
      }`}
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <span
        className={`relative flex items-center justify-center px-6 py-5 transition-all duration-1000 ease-out ${
          entered ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-12 opacity-0"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-black.png" alt="PABT Foundation" className="h-14 sm:h-16 w-auto dark:hidden" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-white.png" alt="PABT Foundation" className="hidden h-14 sm:h-16 w-auto dark:block" />
        <span className="absolute -inset-2 rounded-full border-2 border-green-500/30 animate-ping" style={{ animationDuration: "1.8s" }} />
        <span className="absolute -inset-4 rounded-full border border-green-500/15 animate-pulse" />
      </span>

      <div
        className={`mt-10 w-64 sm:w-72 transition-all duration-1000 delay-400 ${
          entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="h-1.5 w-full rounded-full bg-gray-150 dark:bg-gray-800/80 overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 transition-[width] duration-100 ease-linear shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
          <span className="font-semibold text-[10px]">Planting a Billion Trees</span>
          <span className="font-bold text-[11px]">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
