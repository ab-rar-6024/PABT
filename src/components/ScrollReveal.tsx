"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealVariant = "default" | "nature" | "circular" | "future" | "esg" | "community";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Pathway pages pass their own entrance style; everything else keeps the default fade-up. */
  variant?: RevealVariant;
}

// [classes while hidden, classes once visible, transition classes]
const STYLES: Record<RevealVariant, [string, string, string]> = {
  default: [
    "opacity-0 translate-y-8 scale-95",
    "opacity-100 translate-y-0 scale-100",
    "transition-all duration-700 ease-out",
  ],
  // Grows up from the ground: soft blur clears as it rises.
  nature: [
    "opacity-0 translate-y-14 scale-[0.97] blur-md",
    "opacity-100 translate-y-0 scale-100 blur-0",
    "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
  ],
  // Swings in from the side like a turning loop.
  circular: [
    "opacity-0 -translate-x-16 -rotate-3",
    "opacity-100 translate-x-0 rotate-0",
    "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
  ],
  // Quick focus-pull from a zoomed, blurred state.
  future: [
    "opacity-0 scale-110 blur-lg",
    "opacity-100 scale-100 blur-0",
    "transition-all duration-[650ms] ease-out",
  ],
  // Flips down from the top edge, like a report page being turned over.
  esg: [
    "opacity-0 origin-top [transform:perspective(900px)_rotateX(-18deg)_translateY(28px)]",
    "opacity-100 origin-top [transform:perspective(900px)_rotateX(0deg)_translateY(0)]",
    "transition-all duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)]",
  ],
  // Springy pop with a little overshoot.
  community: [
    "opacity-0 scale-75 translate-y-8",
    "opacity-100 scale-100 translate-y-0",
    "transition-all duration-[700ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
  ],
};

export default function ScrollReveal({ children, className = "", delay = 0, variant = "default" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [hidden, shown, transition] = STYLES[variant];

  return (
    <div
      ref={ref}
      className={`${transition} motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!blur-0 motion-reduce:transition-none ${
        visible ? shown : hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
