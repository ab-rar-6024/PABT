"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { value: "1.2M+", label: "Trees Planted" },
  { value: "5", label: "Connected Pathways" },
];

export default function AboutTeaser() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Left: Mission & story */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-6"
      >
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block">
          About PABT
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-5 leading-tight">
          One Simple Idea That Kept Growing
        </h3>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          <p>
            PABT Foundation started with a single mission: plant a billion trees. But trees don&apos;t survive in isolation — they need clean water, waste-free land, energy that doesn&apos;t require cutting them down, and communities invested in keeping them alive.
          </p>
          <p>
            So what began as an afforestation drive grew into five connected pathways — nature, circularity, clean energy, corporate ESG, and community action — all built around one belief: environmental repair only lasts when it&apos;s tied to livelihoods, transparency, and local ownership.
          </p>
        </div>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-700 dark:text-green-400 hover:opacity-80 transition-opacity cursor-pointer"
        >
          Learn More About PABT
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>

      {/* Right: Visual with floating stat chips */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="lg:col-span-6 relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1634151389979-2dea7604b36f?auto=format&fit=crop&w=1200&q=80"
            alt="Volunteers planting seedlings together as part of PABT's community afforestation work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Floating stat chips.
            Note: the site-wide `.glass-panel` class (globals.css) sets its own near-transparent
            background outside any Tailwind @layer, so it wins the cascade over a `bg-white/90`
            utility on the same element — that's what made these chips nearly invisible once they
            extended past the photo onto the plain page background. Using solid opaque backgrounds
            here instead, since legibility matters more than the glass effect for stat callouts. */}
        <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto flex gap-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg px-4 py-3 sm:px-5 sm:py-4"
            >
              <span className="text-lg sm:text-xl font-black text-green-700 dark:text-green-400 tracking-tight block">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
