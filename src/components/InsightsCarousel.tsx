"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
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

// Helper Tick Component for scroll indicator wave animation
function Tick({
  index,
  scrollYProgress,
  total,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  const distance = useTransform(scrollYProgress, (progress) => {
    const activeIndex = progress * (total - 1);
    return Math.abs(index - activeIndex);
  });

  const height = useTransform(distance, [0, 3, 6], [18, 9, 4]);
  const opacity = useTransform(distance, [0, 3, 6], [1, 0.4, 0.08]);
  const backgroundColor = useTransform(
    distance,
    [0, 2, 4],
    ["#22c55e", "#10b981", "#9ca3af"]
  );

  return (
    <motion.div
      style={{ height, opacity, backgroundColor }}
      className="w-[2px] rounded-full shrink-0"
    />
  );
}

export default function InsightsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewports to fall back to horizontal swipe layout
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Create a smoothed spring progress value to emulate GSAP's scroll scrub easing (fluid lag)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 18,
    mass: 1,
    restDelta: 0.001
  });

  // Scroll horizontal cards translation using the smoothed spring progress value
  // Moves from 15vw (initial padding) to -135vw (scroll end)
  const x = useTransform(smoothProgress, [0, 1], ["15vw", "-135vw"]);

  const numTicks = 70;

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: isMobile ? "auto" : "280vh" }}>
      {/* Parallax / Sticky Container - Offset by navbar height (top-20) and height adjusted */}
      <div className={isMobile ? "relative w-full py-16" : "sticky top-20 h-[calc(100vh-5rem)] w-full flex flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500"}>
        
        {/* Giant Watermark Text in Background */}
        {!isMobile && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none pointer-events-none text-center z-0 overflow-hidden">
            <h2 className="text-[16vw] font-black uppercase tracking-tighter text-gray-200/30 dark:text-gray-900/10 leading-none whitespace-nowrap">
              FIELD NOTES
            </h2>
          </div>
        )}

        {/* Heading Section - Tighter margins to fit vertical viewport */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full z-10 flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-green-600 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-1.5 block">
              PABT Insights & Outcomes
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Trusted Partners.
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
            Hover over the cards to highlight project details. Scroll down to translate pages horizontally and explore outcomes.
          </p>
        </div>

        {/* Scroll Progress Tick Bar (Hidden on Mobile) - Tighter margins */}
        {!isMobile && (
          <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full z-10 flex items-center justify-center gap-1.5 h-6 mb-8 select-none">
            {Array.from({ length: numTicks }).map((_, i) => (
              <Tick key={i} index={i} scrollYProgress={smoothProgress} total={numTicks} />
            ))}
          </div>
        )}

        {/* Carousel / Cards List */}
        {isMobile ? (
          // Mobile Layout: Touch swipe scrollable row
          <div className="flex overflow-x-auto gap-6 px-6 py-6 snap-x snap-mandatory scrollbar-none w-full z-10">
            {insights.map((card, index) => (
              <div
                key={index}
                className="w-[300px] shrink-0 snap-center rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={card.image}
                    alt={card.author}
                    className="size-11 rounded-full object-cover border border-green-500/20"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                      {card.author}
                    </h4>
                    <p className="text-[10px] text-green-600 dark:text-green-400 font-mono uppercase tracking-wider">
                      {card.role} • {card.domain}
                    </p>
                  </div>
                </div>
                <h3 className="font-extrabold text-gray-900 dark:text-white text-base leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-6">
                  {card.description}
                </p>
                <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
                  <span>{card.readTime}</span>
                  <Link href={card.href} className="text-green-600 dark:text-green-400 hover:underline">
                    Read Post →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Layout: Parallax horizontal scroll on vertical page scroll - Adjusted card width/aspect ratio
          <motion.div
            style={{ x }}
            className="flex gap-8 w-max px-[10vw] z-10 py-4 select-none"
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
                    filter: isOtherHovered ? "blur(4px) brightness(0.5)" : "blur(0px) brightness(1)",
                    opacity: isOtherHovered ? 0.45 : 1,
                  }}
                  transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                  className={`w-[370px] shrink-0 aspect-[1/1] rounded-2xl p-6 flex flex-col justify-between cursor-pointer border transition-all duration-500 ${
                    isHovered
                      ? "bg-stone-100 dark:bg-stone-900 border-green-500/25 shadow-2xl"
                      : "bg-white/80 dark:bg-zinc-900/85 border-gray-200/50 dark:border-zinc-800/50 shadow-lg"
                  }`}
                >
                  {/* Top Section: User Meta */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src={card.image}
                      alt={card.author}
                      className="size-11 rounded-full object-cover border-2 border-green-500/20"
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

                  {/* Middle Section: Quote / Post snippet */}
                  <div className="flex-grow flex flex-col justify-center my-4">
                    <h3 className="font-black text-gray-900 dark:text-white text-base tracking-tight leading-snug mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
                      &ldquo;{card.description}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Section: Footer Actions */}
                  <div className="flex justify-between items-center border-t border-gray-100 dark:border-zinc-800/80 pt-3">
                    <span className="text-[9px] font-mono font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
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
        )}
      </div>
    </div>
  );
}
