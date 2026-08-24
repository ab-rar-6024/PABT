"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface MissionDomain {
  name: string;
  pathway: string;
  description: string;
  bgClass: string;
  accent: string;
  btnClass: string;
  image: string;
  href: string;
}

interface MissionCardsProps {
  domains: MissionDomain[];
}

export default function MissionCards({ domains }: MissionCardsProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    const cards = gsap.utils.toArray<HTMLElement>(grid.querySelectorAll("[data-mission-card]"));
    const images = gsap.utils.toArray<HTMLElement>(grid.querySelectorAll("[data-mission-image]"));

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      // Scroll-triggered reveal — each card fades/slides into place as it enters the viewport
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: "auto",
          }),
      });

      // Parallax — each card's image drifts vertically at a different speed than its frame while scrolling
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest("[data-mission-card]") as HTMLElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {domains.map((domain) => (
        <div
          key={domain.name}
          data-mission-card
          className={`glass-panel rounded-2xl overflow-hidden border p-5 flex flex-col h-full opacity-0 translate-y-14 hover:scale-[1.01] transition-transform duration-300 ${domain.bgClass}`}
        >
          <div className="relative h-44 rounded-xl overflow-hidden mb-6 border border-gray-200/80 dark:border-gray-800/80">
            <img
              data-mission-image
              src={domain.image}
              alt={domain.name}
              className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover will-change-transform"
            />
          </div>
          <div className="flex-grow flex flex-col">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider mb-2 ${domain.accent}`}>
              {domain.pathway}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{domain.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{domain.description}</p>
            <Link
              href={domain.href}
              className={`w-full py-3 rounded-xl text-center text-white font-bold text-sm tracking-wider transition-colors duration-300 ${domain.btnClass}`}
            >
              VIEW PATHWAY DETAILS
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
