"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const categories = ["All", "Nature", "Circularity", "Clean Energy", "ESG & CSR", "Community"];

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
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredInsights =
    selectedCategory === "All"
      ? insights
      : insights.filter((item) => item.domain === selectedCategory);

  return (
    <div className="relative w-full bg-gray-50 dark:bg-[#070908] py-12 transition-colors duration-500 min-h-screen">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold block">
            PABT Insights & Research
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Trusted Partners.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Explore our field notes, verified ecosystem audits, and climate action progress across India.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap border-b border-gray-200/80 dark:border-gray-800/80 pb-4">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white dark:text-gray-900"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-white/60 dark:bg-zinc-900/60 border border-gray-200/60 dark:border-zinc-800/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-emerald-600 dark:bg-emerald-400 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Animated Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
          <AnimatePresence mode="popLayout">
            {filteredInsights.map((card, index) => (
              <motion.div
                key={card.title + index}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300"
              >
                <Link href={card.href} className="absolute inset-0 z-20 rounded-3xl" aria-label={card.title} />

                <div>
                  {/* Top Meta: Domain Badge & Read Time */}
                  <div className="flex justify-between items-center mb-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                      {card.domain}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 dark:text-gray-500 font-medium">
                      {card.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-lg tracking-tight leading-snug mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4 mb-6">
                    &ldquo;{card.description}&rdquo;
                  </p>
                </div>

                {/* Author Footer */}
                <div className="flex items-center gap-3.5 border-t border-gray-100 dark:border-zinc-800/80 pt-4">
                  <img
                    src={card.image}
                    alt={card.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/20"
                  />
                  <div>
                    <h4 className="font-extrabold text-gray-900 dark:text-white text-xs leading-none">
                      {card.author}
                    </h4>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono uppercase tracking-wider mt-1">
                      {card.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
