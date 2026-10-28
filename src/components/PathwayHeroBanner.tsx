"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowLeft, Leaf, Sun, Zap } from "lucide-react";

export type PathwayTheme = "nature" | "circular" | "future" | "esg" | "community";

interface PathwayHeroBannerProps {
  pathwayLabel: string;
  labelClass: string;
  title: string;
  description: string;
  /** Longer follow-up paragraph, kept with the hero copy so there is no dead space below it. */
  intro?: string;
  imageUrl?: string;
  imageAlt?: string;
  theme?: PathwayTheme;
}

const EASE = [0.16, 1, 0.3, 1] as const;

// Each pathway gets its own entrance for the copy as well as the picture.
const TEXT_VARIANTS: Record<PathwayTheme, { container: Variants; item: Variants }> = {
  nature: {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } },
    item: {
      hidden: { opacity: 0, y: 34, filter: "blur(6px)" },
      show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
    },
  },
  circular: {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } },
    item: {
      hidden: { opacity: 0, x: -48, rotate: -2 },
      show: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, ease: EASE } },
    },
  },
  future: {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } },
    item: {
      hidden: { opacity: 0, y: 44 },
      show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
    },
  },
  esg: {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } },
    item: {
      hidden: { opacity: 0, x: 40 },
      show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
    },
  },
  community: {
    container: { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } } },
    item: {
      hidden: { opacity: 0, scale: 0.7, y: 20 },
      show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 220, damping: 14 } },
    },
  },
};

// The top padding clears the fixed 80px navbar; there is deliberately nothing else above the card.
const SECTION = "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-2 overflow-x-clip";
const CARD = "relative overflow-hidden rounded-[2rem] shadow-xl";
const TEXT_CELL = "relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-12";

export default function PathwayHeroBanner({
  pathwayLabel,
  labelClass,
  title,
  description,
  intro,
  imageUrl,
  imageAlt,
  theme = "nature",
}: PathwayHeroBannerProps) {
  const reduce = useReducedMotion();
  const { container, item } = TEXT_VARIANTS[theme];
  const initial = reduce ? false : "hidden";

  const renderText = ({ center = false, onDark = false }: { center?: boolean; onDark?: boolean } = {}) => (
    <motion.div
      variants={container}
      initial={initial}
      animate="show"
      className={`relative z-10 ${center ? "mx-auto flex flex-col items-center text-center" : ""}`}
    >
      <motion.div variants={item} className="mb-5">
        <Link
          href="/missions"
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all hover:scale-105 ${
            onDark
              ? "bg-white/15 text-white backdrop-blur-md ring-1 ring-white/30 hover:bg-white/25"
              : "bg-white text-gray-800 shadow-sm ring-1 ring-black/5 hover:shadow-md dark:bg-zinc-800 dark:text-gray-100 dark:ring-white/10"
          }`}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Our 5 Missions
        </Link>
      </motion.div>
      <motion.span
        variants={item}
        className={`mb-3 block font-mono text-xs font-bold uppercase tracking-widest ${onDark ? "text-amber-200" : labelClass}`}
      >
        {pathwayLabel}
      </motion.span>
      <motion.h1
        variants={item}
        className={`mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${center ? "max-w-3xl" : "max-w-2xl"} ${
          onDark ? "text-white" : "text-gray-900 dark:text-white"
        }`}
      >
        {title}
      </motion.h1>
      <motion.p
        variants={item}
        className={`text-base leading-relaxed sm:text-lg ${center ? "max-w-3xl" : "max-w-2xl"} ${
          onDark ? "text-white/90" : "text-gray-700 dark:text-gray-300"
        }`}
      >
        {description}
      </motion.p>
      {intro && (
        <motion.p
          variants={item}
          className={`mt-3 text-sm leading-relaxed sm:text-base ${center ? "max-w-3xl" : "max-w-2xl"} ${
            onDark ? "text-white/75" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  );

  if (!imageUrl) {
    return <section className={SECTION}>{renderText()}</section>;
  }

  // eslint-disable-next-line @next/next/no-img-element
  const img = <img src={imageUrl} alt={imageAlt ?? title} className="h-full w-full object-cover" />;

  // NATURE — green panel, the photo fills the right side and meets it in one big curve.
  if (theme === "nature") {
    const leaves = [
      { pos: "left-8 top-8 h-7 w-7", color: "text-green-300" },
      { pos: "left-3 top-1/2 h-9 w-9", color: "text-emerald-200" },
      { pos: "left-12 bottom-8 h-6 w-6", color: "text-lime-300" },
    ];
    return (
      <section className={SECTION}>
        <div className={`${CARD} grid grid-cols-1 border border-green-200/70 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 shadow-green-900/10 dark:border-green-900/50 dark:from-green-950/70 dark:via-emerald-950/50 dark:to-zinc-950 lg:grid-cols-[1.15fr_0.85fr]`}>
          <div className={`order-2 lg:order-1 ${TEXT_CELL}`}>{renderText()}</div>
          <div className="relative order-1 min-h-[260px] lg:order-2">
            <motion.div
              className="absolute inset-0 overflow-hidden lg:rounded-l-[14rem]"
              initial={reduce ? false : { clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0%)" }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.1 }}
            >
              <motion.div
                className="h-full w-full"
                initial={reduce ? false : { scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: EASE }}
              >
                {img}
              </motion.div>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-green-900/25 to-transparent" />
            </motion.div>
            {leaves.map((l, i) => (
              <motion.span
                key={l.pos}
                aria-hidden
                className={`absolute z-10 hidden lg:block ${l.pos}`}
                initial={reduce ? false : { opacity: 0, scale: 0 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: [0, -10, 0], rotate: [0, 12, 0] }}
                transition={{
                  opacity: { delay: 1 + i * 0.2, duration: 0.4 },
                  scale: { delay: 1 + i * 0.2, type: "spring", stiffness: 200, damping: 12 },
                  y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                  rotate: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                }}
              >
                <Leaf className={`h-full w-full ${l.color}`} fill="currentColor" fillOpacity={0.35} />
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // CIRCULAR — an oversized round photo, cropped by the card edge, inside slowly turning rings.
  if (theme === "circular") {
    return (
      <section className={SECTION}>
        <div className={`${CARD} grid grid-cols-1 border border-amber-200/70 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 shadow-amber-900/10 dark:border-amber-900/50 dark:from-amber-950/60 dark:via-orange-950/40 dark:to-zinc-950 lg:grid-cols-[1.2fr_0.8fr]`}>
          <div className={TEXT_CELL}>{renderText()}</div>
          <div className="relative flex min-h-[300px] items-center justify-center pb-8 lg:justify-start lg:pb-0">
            <div className="relative h-60 w-60 flex-shrink-0 sm:h-72 sm:w-72 lg:-ml-2 lg:h-[500px] lg:w-[500px]">
              <motion.div
                aria-hidden
                className="absolute -inset-5 rounded-full border-2 border-dashed border-amber-500/60 lg:-inset-8"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                aria-hidden
                className="absolute -inset-9 rounded-full border-2 border-dotted border-amber-400/50 lg:-inset-16"
                animate={reduce ? undefined : { rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-full border-4 border-white shadow-2xl dark:border-zinc-800"
                initial={reduce ? false : { opacity: 0, x: 120, rotate: 40, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.15 }}
              >
                {img}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // FUTURE — the photo melts into a sky-coloured panel while a sun rises in the corner.
  if (theme === "future") {
    return (
      <section className={SECTION}>
        <div className={`${CARD} grid grid-cols-1 border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-sky-50 to-amber-50 shadow-cyan-900/10 dark:border-cyan-900/50 dark:from-cyan-950/60 dark:via-sky-950/40 dark:to-zinc-950 lg:grid-cols-[1.1fr_0.9fr]`}>
          <div className={TEXT_CELL}>{renderText()}</div>
          <div className="relative min-h-[260px]">
            <motion.div
              className="absolute inset-0 lg:[mask-image:linear-gradient(to_right,transparent,black_42%)]"
              initial={reduce ? false : { opacity: 0, x: 70, scale: 1.08 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.1 }}
            >
              {img}
            </motion.div>
            <motion.div
              aria-hidden
              className="absolute -right-24 -top-28 h-80 w-80 rounded-full [background:repeating-conic-gradient(rgba(251,191,36,0.4)_0_7deg,transparent_7deg_22deg)] [mask-image:radial-gradient(circle,black_25%,transparent_70%)]"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden
              className="absolute right-6 top-6 h-24 w-24 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-[0_0_70px_10px_rgba(251,191,36,0.55)] sm:h-28 sm:w-28"
              initial={reduce ? false : { y: 140, opacity: 0, scale: 0.6 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-5 right-5 z-10 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-cyan-800 shadow-lg backdrop-blur dark:bg-zinc-900/95 dark:text-cyan-300"
              initial={reduce ? false : { opacity: 0, y: 20, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 12, delay: 1 }}
            >
              <Sun className="h-4 w-4 text-amber-500" /> Solar <span className="text-gray-300">·</span>
              <Zap className="h-4 w-4 text-cyan-500" /> EV <span className="text-gray-300">·</span> Climate tech
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // ESG — the photo sits on the left and is cut on a diagonal; the copy takes the right.
  if (theme === "esg") {
    return (
      <section className={SECTION}>
        <div className={`${CARD} grid grid-cols-1 border border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50/70 to-slate-100 shadow-indigo-900/10 dark:border-indigo-900/50 dark:from-zinc-900 dark:via-indigo-950/40 dark:to-zinc-950 lg:grid-cols-[0.9fr_1.1fr]`}>
          <div className="relative min-h-[260px] lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0, x: -90, scale: 1.12 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.05 }}
            >
              {img}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute bottom-5 left-5 z-10 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur dark:bg-zinc-900/95"
              initial={reduce ? false : { opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 170, damping: 14, delay: 0.9 }}
            >
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">We help you report to</p>
              <div className="flex gap-2">
                {["BRSR", "GRI", "CSR"].map((t) => (
                  <span key={t} className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          <div className={`${TEXT_CELL} lg:pl-16`}>{renderText()}</div>
        </div>
      </section>
    );
  }

  // COMMUNITY — one wide photograph with the copy centred over a warm wash and a few drifting dots.
  return (
    <section className={SECTION}>
      <div className={`${CARD} flex min-h-[480px] items-center justify-center shadow-orange-900/20`}>
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.25 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
        >
          {img}
        </motion.div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-orange-950/65 via-orange-900/45 to-rose-900/60" />
        {[
          "left-8 top-1/3 h-5 w-5 bg-orange-400",
          "right-12 top-10 h-7 w-7 bg-amber-300",
          "right-8 bottom-16 h-4 w-4 bg-rose-400",
          "left-16 bottom-10 h-6 w-6 bg-yellow-300",
        ].map((c, i) => (
          <motion.span
            key={c}
            aria-hidden
            className={`absolute z-10 rounded-full ${c}`}
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
        <div className="relative z-10 w-full p-7 sm:p-12">{renderText({ center: true, onDark: true })}</div>
      </div>
    </section>
  );
}
