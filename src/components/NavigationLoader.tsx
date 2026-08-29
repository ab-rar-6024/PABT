"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationLoader() {
  const pathname = usePathname();
  const isFirst = useRef(true);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    // Skip initial mount so splash screen or normal load handles it
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    setFading(false);
    setPopped(false);
    setVisible(true);

    // Trigger pop-in animation right after mount
    const popTimer = setTimeout(() => setPopped(true), 20);

    const hideTimer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        setFading(false);
        setPopped(false);
      }, 300);
    }, 550);

    return () => {
      clearTimeout(popTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070b09] transition-opacity duration-300 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Soft background ambient glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Pop Container */}
      <div
        style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
        className={`relative flex flex-col items-center justify-center space-y-5 transition-all duration-500 ${
          popped
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-75 opacity-0 translate-y-4"
        }`}
      >
        {/* Logo with soft green glowing aura (NO circle line) */}
        <div className="relative flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
          
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt="PABT Foundation"
            className="h-16 w-auto object-contain relative z-10 drop-shadow-lg"
          />
        </div>

        {/* Brand Text */}
        <div className="text-center space-y-1">
          <h4 className="text-xl font-extrabold tracking-tight text-white">
            PABT <span className="text-green-500 font-bold">Foundation</span>
          </h4>
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            Planting a Billion Trees
          </p>
        </div>
      </div>
    </div>
  );
}
