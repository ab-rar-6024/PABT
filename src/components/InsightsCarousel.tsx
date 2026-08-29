"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

interface InsightCardData {
  title: string;
  description: string;
  domain: string;
  author: string;
  role: string;
  image: string;
  readTime: string;
  href: string;
}

const insights: InsightCardData[] = [
  {
    title: "Why Native Species Beat Fast-Growing Trees",
    description: "Fast-growing exotic saplings look good in year-one photos, but native species are what actually rebuild a degraded ecosystem's soil and water table long-term. We focus on biodiversity over quick green covers.",
    domain: "Nature",
    author: "Arun Dev",
    role: "Forestry Lead",
    image: "/images/journal/1.webp",
    readTime: "5 min read",
    href: "/nature",
  },
  {
    title: "What Happens to Textile Waste After Collection",
    description: "A look inside the Tiruppur recycling loop — from offcut collection to reprocessed yarn — and where the biggest leakage points still are. We track every kilogram of waste to ensure full loop integrity.",
    domain: "Circularity",
    author: "Priya Sharma",
    role: "Circularity Director",
    image: "/images/journal/2.webp",
    readTime: "6 min read",
    href: "/circular",
  },
  {
    title: "Powering a Village at 12,000 Feet",
    description: "The logistics of getting solar panels, batteries, and technicians up to high-altitude Ladakh hamlets — and keeping the grid running through winter. Clean energy is a life-line, not just a metric.",
    domain: "Clean Energy",
    author: "Tsering Wangyal",
    role: "Solar Grid Lead",
    image: "/images/journal/3.webp",
    readTime: "7 min read",
    href: "/future",
  },
  {
    title: "Reading a BRSR Report Without Getting Lost",
    description: "A plain-language breakdown of what India's Business Responsibility and Sustainability Reporting framework actually asks companies to disclose, and how we verify true community impact.",
    domain: "ESG & CSR",
    author: "Meera Sen",
    role: "ESG Advisory",
    image: "/images/journal/4.webp",
    readTime: "8 min read",
    href: "/esg",
  },
  {
    title: "How a School Eco-Club Actually Starts",
    description: "The first three steps we walk every partner school through, from picking a student council to running the first waste audit. True transformation starts in the classroom and flows outwards.",
    domain: "Community",
    author: "Sanjay Dutt",
    role: "Outreach Lead",
    image: "/images/journal/5.webp",
    readTime: "4 min read",
    href: "/community",
  },
  {
    title: "Measuring Sapling Survival, Honestly",
    description: "Why we report 87% survival instead of rounding up, and how our field teams verify it season over season using geotagged photo audits. Integrity is our currency in ecosystem restoration.",
    domain: "Nature",
    author: "Karan Johar",
    role: "Verification Lead",
    image: "/images/journal/1.webp",
    readTime: "5 min read",
    href: "/nature",
  },
];

export default function InsightsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.2,
    restDelta: 0.001,
  });

  // Translates cards from right to left (150px to -650px) as user scrolls down the page naturally
  const x = useTransform(smoothProgress, [0, 1], ["120px", "-680px"]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-gray-50 dark:bg-[#070908] py-16 transition-colors duration-500 overflow-hidden"
    >
      {/* Giant Watermark Text in Background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none pointer-events-none text-center z-0 overflow-hidden">
        <h2 className="text-[15vw] font-black uppercase tracking-tighter text-gray-200/35 dark:text-gray-900/15 leading-none whitespace-nowrap">
          FIELD NOTES
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative space-y-8">
        {/* Heading & Scroll Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200/80 dark:border-gray-800/80 pb-6">
          <div>
            <span className="text-green-600 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-1 block">
              PABT Insights & Outcomes
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Trusted Partners.
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm hidden sm:block">
              Explore our latest ecosystem insights, forestry research, and community action notes.
            </p>

            {/* Left/Right Arrow Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/40 shadow-sm transition-all cursor-pointer"
              >
                ←
              </button>
              <button
                type="button"
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/40 shadow-sm transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Scroll-Driven Translating Cards Container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-none py-4 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          <motion.div
            style={{ x }}
            className="flex gap-8 w-max px-4 select-none"
          >
            {insights.map((card, index) => {
              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    scale: isHovered ? 1.03 : isOtherHovered ? 0.97 : 1,
                    filter: isOtherHovered ? "blur(3px) brightness(0.6)" : "blur(0px) brightness(1)",
                    opacity: isOtherHovered ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className={`w-[320px] sm:w-[360px] shrink-0 rounded-3xl p-7 flex flex-col justify-between cursor-pointer border transition-all duration-300 ${
                    isHovered
                      ? "bg-white dark:bg-zinc-900 border-green-500/40 shadow-2xl"
                      : "bg-white/90 dark:bg-zinc-900/85 border-gray-200/60 dark:border-zinc-800/60 shadow-lg"
                  }`}
                >
                  {/* User Header */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src={card.image}
                      alt={card.author}
                      className="w-11 h-11 rounded-full object-cover border-2 border-green-500/20"
                    />
                    <div>
                      <h4 className="font-extrabold text-gray-900 dark:text-white text-sm leading-none">
                        {card.author}
                      </h4>
                      <p className="text-[10px] text-green-600 dark:text-green-400 font-mono uppercase tracking-widest mt-1">
                        {card.role} • {card.domain}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-center my-4">
                    <h3 className="font-black text-gray-900 dark:text-white text-base tracking-tight leading-snug mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
                      &ldquo;{card.description}&rdquo;
                    </p>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex justify-between items-center border-t border-gray-100 dark:border-zinc-800/80 pt-4">
                    <span className="text-[10px] font-mono font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      {card.readTime}
                    </span>
                    <Link
                      href={card.href}
                      className="text-[11px] font-mono font-bold uppercase tracking-wider text-green-600 dark:text-green-400 flex items-center gap-1 group"
                    >
                      Read Post
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
