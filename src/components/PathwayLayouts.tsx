"use client";

import { useRef, useState } from "react";
import {
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Droplets,
  FileText,
  Leaf,
  Lightbulb,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Sprout,
  Sun,
  TreePine,
  Zap,
  Bus,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { PathwayTheme } from "@/components/PathwayHeroBanner";

export type PathwayMetric = { value: string; label: string; sublabel: string };
export type PathwayArea = { number: string; title: string; items: string[] };
export type PathwayProject = { title: string; description: string; location: string; stat: string };

const W = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const DIVIDER = "border-t border-gray-100 dark:border-gray-900";
const two = (n: number) => String(n).padStart(2, "0");

/* ───────────────────────────── METRICS ───────────────────────────── */

const NATURE_ICONS: LucideIcon[] = [TreePine, Droplets, Sprout];
const FUTURE_ICONS: LucideIcon[] = [Sun, Zap, Lightbulb];
const ESG_ICONS: LucideIcon[] = [Building2, ClipboardCheck, FileText];

export function PathwayMetrics({ theme, metrics }: { theme: PathwayTheme; metrics: PathwayMetric[] }) {
  // NATURE — leaf-shaped cards (two opposite corners rounded hard, like a leaf).
  if (theme === "nature") {
    return (
      <section className={`${W} py-8`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {metrics.map((m, i) => {
            const Icon = NATURE_ICONS[i % NATURE_ICONS.length];
            return (
              <ScrollReveal key={m.label} variant="nature" delay={i * 120} className="h-full">
                <div className="group h-full rounded-bl-xl rounded-br-[3.5rem] rounded-tl-[3.5rem] rounded-tr-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-100 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-500/15 dark:border-green-800/50 dark:from-green-950/60 dark:to-emerald-900/30">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-600 shadow-sm transition-transform duration-500 group-hover:rotate-[360deg] dark:bg-zinc-900 dark:text-green-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-4xl font-extrabold tracking-tight text-green-800 dark:text-green-300">{m.value}</div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">{m.label}</div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{m.sublabel}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    );
  }

  // CIRCULAR — three round badges ringed with a slowly turning dashed line.
  if (theme === "circular") {
    return (
      <section className={`${W} py-12`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} variant="circular" delay={i * 120}>
              <div className="group flex flex-col items-center text-center">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/60 motion-safe:animate-[spin_30s_linear_infinite] group-hover:border-amber-500"
                  />
                  <span aria-hidden className="absolute inset-3 rounded-full bg-amber-500/10 transition-transform duration-500 group-hover:scale-110" />
                  <span className="relative text-3xl font-extrabold text-amber-700 dark:text-amber-400">{m.value}</span>
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">{m.label}</h3>
                <p className="mt-1 max-w-[16rem] text-xs leading-relaxed text-gray-600 dark:text-gray-400">{m.sublabel}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  }

  // FUTURE — sunny horizontal cards: a glowing icon disc, the figure beside it.
  if (theme === "future") {
    const discs = ["from-amber-300 to-orange-400", "from-cyan-300 to-sky-500", "from-yellow-300 to-amber-500"];
    return (
      <section className={`${W} py-8`}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {metrics.map((m, i) => {
            const Icon = FUTURE_ICONS[i % FUTURE_ICONS.length];
            return (
              <ScrollReveal key={m.label} variant="future" delay={i * 100} className="h-full">
                <div className="group flex h-full items-start gap-4 rounded-[2rem] border border-cyan-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/15 dark:border-cyan-900/60 dark:bg-zinc-900">
                  <span
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110 ${discs[i % discs.length]}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-cyan-800 dark:text-cyan-300">{m.value}</div>
                    <div className="mt-1 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">{m.label}</div>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{m.sublabel}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    );
  }

  // ESG — clean white cards with an indigo icon tile and an underline that grows on hover.
  if (theme === "esg") {
    return (
      <section className={`${W} py-8`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {metrics.map((m, i) => {
            const Icon = ESG_ICONS[i % ESG_ICONS.length];
            return (
              <ScrollReveal key={m.label} variant="esg" delay={i * 100} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-indigo-900/50 dark:bg-zinc-900">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{m.value}</div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">{m.label}</div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{m.sublabel}</p>
                  <span aria-hidden className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    );
  }

  // COMMUNITY — tilted sticker cards that straighten on hover.
  const stickers = [
    "bg-orange-100 dark:bg-orange-950/60 border-orange-300 dark:border-orange-700/60 -rotate-2",
    "bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700/60 rotate-1",
    "bg-rose-100 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700/60 -rotate-1",
  ];
  return (
    <section className={`${W} py-8`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((m, i) => (
          <ScrollReveal key={m.label} variant="community" delay={i * 110}>
            <div
              className={`rounded-3xl border-2 p-6 shadow-lg transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-2xl ${stickers[i % stickers.length]}`}
            >
              <div className="text-5xl font-black tracking-tight text-orange-700 dark:text-orange-300">{m.value}</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">{m.label}</div>
              <p className="mt-1 text-xs leading-relaxed text-gray-700 dark:text-gray-300">{m.sublabel}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────── PROGRAM AREAS ───────────────────────────── */

interface ProgramsProps {
  theme: PathwayTheme;
  areas: PathwayArea[];
  blurb: string;
}

export function PathwayPrograms(props: ProgramsProps) {
  switch (props.theme) {
    case "circular":
      return <CircularPrograms {...props} />;
    case "future":
      return <FuturePrograms {...props} />;
    case "esg":
      return <EsgPrograms {...props} />;
    case "community":
      return <CommunityPrograms {...props} />;
    default:
      return <NaturePrograms {...props} />;
  }
}

// NATURE — a centred stack of soft green cards; each opens like a plant growing.
function NaturePrograms({ areas, blurb }: ProgramsProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={`${W} py-12 ${DIVIDER}`}>
      <ScrollReveal variant="nature">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400">
            <Sprout className="h-5 w-5" />
          </span>
          <h2 className="mb-3 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Core Program Areas</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{blurb}</p>
        </div>
      </ScrollReveal>
      <div className="mx-auto max-w-3xl space-y-4">
        {areas.map((a, i) => {
          const isOpen = open === i;
          return (
            <ScrollReveal key={a.number} variant="nature" delay={i * 80}>
              <div
                className={`overflow-hidden rounded-[1.75rem] border transition-all duration-500 ${
                  isOpen
                    ? "border-green-400/60 bg-green-50 shadow-lg shadow-green-500/10 dark:border-green-600/50 dark:bg-green-950/30"
                    : "border-green-200/70 bg-white hover:border-green-300 dark:border-white/10 dark:bg-zinc-900"
                }`}
              >
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center gap-4 p-5 text-left">
                  <span
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-bl-md rounded-br-2xl rounded-tl-2xl rounded-tr-md font-mono text-sm font-bold transition-colors duration-500 ${
                      isOpen ? "bg-green-600 text-white" : "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                    }`}
                  >
                    {a.number}
                  </span>
                  <span className="flex-1 text-base font-bold text-gray-900 dark:text-white sm:text-lg">{a.title}</span>
                  <Leaf className={`h-5 w-5 text-green-500 transition-transform duration-500 ${isOpen ? "rotate-[135deg] scale-110" : ""}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <ul className="space-y-3 px-5 pb-6 pl-[4.75rem]">
                      {a.items.map((it) => (
                        <li key={it} className="flex items-start text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                          <Leaf className="mr-2.5 mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

// CIRCULAR — a zig-zag timeline on a dashed loop line; every step is open.
function CircularPrograms({ areas, blurb }: ProgramsProps) {
  return (
    <section className={`${W} py-12 ${DIVIDER}`}>
      <ScrollReveal variant="circular">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Core Program Areas</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{blurb}</p>
        </div>
      </ScrollReveal>
      <div className="relative">
        <span aria-hidden className="absolute bottom-0 left-5 top-0 border-l-2 border-dashed border-amber-500/40 md:left-1/2 md:-translate-x-px" />
        <ol className="space-y-8">
          {areas.map((a, i) => (
            <li key={a.number} className="relative pl-14 md:pl-0">
              <span className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 font-mono text-sm font-bold text-white shadow-lg ring-4 ring-white dark:ring-gray-950 md:left-1/2 md:-translate-x-1/2">
                {a.number}
              </span>
              <ScrollReveal variant="circular" className={`md:w-[calc(50%-3rem)] ${i % 2 ? "md:ml-auto" : ""}`}>
                <div className="rounded-3xl border border-amber-500/30 bg-amber-50/60 p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-amber-500/10 dark:bg-amber-950/20">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">{a.title}</h3>
                  <ul className="space-y-2.5">
                    {a.items.map((it) => (
                      <li key={it} className="flex items-start text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        <RefreshCw className="mr-2.5 mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// FUTURE — a swipeable row of bright cards with arrow buttons.
function FuturePrograms({ areas, blurb }: ProgramsProps) {
  const rail = useRef<HTMLDivElement>(null);
  const icons: LucideIcon[] = [Sun, Bus, Lightbulb, ShieldCheck];
  const tints = [
    "from-amber-50 to-orange-100 border-amber-200 dark:from-amber-950/40 dark:to-orange-950/30 dark:border-amber-800/50",
    "from-cyan-50 to-sky-100 border-cyan-200 dark:from-cyan-950/40 dark:to-sky-950/30 dark:border-cyan-800/50",
    "from-yellow-50 to-lime-100 border-yellow-200 dark:from-yellow-950/40 dark:to-lime-950/30 dark:border-yellow-800/50",
    "from-sky-50 to-indigo-100 border-sky-200 dark:from-sky-950/40 dark:to-indigo-950/30 dark:border-sky-800/50",
  ];
  const scrollBy = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 420), behavior: "smooth" });
  };
  return (
    <section className={`${W} py-12 ${DIVIDER}`}>
      <ScrollReveal variant="future">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Core Program Areas</h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{blurb}</p>
          </div>
          <div className="flex gap-2">
            {([-1, 1] as const).map((d) => (
              <button
                key={d}
                onClick={() => scrollBy(d)}
                aria-label={d === -1 ? "Previous program areas" : "Next program areas"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300 bg-white text-cyan-700 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white dark:border-cyan-800 dark:bg-zinc-900 dark:text-cyan-300"
              >
                {d === -1 ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <div
        ref={rail}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {areas.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <article
              key={a.number}
              className={`min-w-[290px] max-w-[290px] snap-start rounded-[2rem] border bg-gradient-to-br p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:min-w-[360px] sm:max-w-[360px] ${tints[i % tints.length]}`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-600 shadow-sm dark:bg-zinc-900 dark:text-cyan-300">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-4xl font-black text-gray-900/10 dark:text-white/15">{a.number}</span>
              </div>
              <h3 className="mb-4 text-lg font-extrabold leading-snug text-gray-900 dark:text-white">{a.title}</h3>
              <ul className="space-y-3">
                {a.items.map((it) => (
                  <li key={it} className="flex items-start text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mr-2.5 mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

// ESG — a tidy two-column set of white cards that open independently.
function EsgPrograms({ areas, blurb }: ProgramsProps) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  return (
    <section className={`${W} py-12 ${DIVIDER}`}>
      <ScrollReveal variant="esg">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Core Program Areas</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{blurb}</p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
        {areas.map((a, i) => {
          const isOpen = open.has(i);
          return (
            <ScrollReveal key={a.number} variant="esg" delay={(i % 2) * 90}>
              <div
                className={`rounded-2xl border bg-white transition-all duration-300 dark:bg-zinc-900 ${
                  isOpen ? "border-indigo-300 shadow-lg shadow-indigo-500/10 dark:border-indigo-700/70" : "border-gray-200 hover:border-indigo-200 dark:border-white/10"
                }`}
              >
                <button onClick={() => toggle(i)} aria-expanded={isOpen} className="flex w-full items-center gap-4 p-5 text-left">
                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold transition-colors duration-300 ${
                      isOpen ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300"
                    }`}
                  >
                    {a.number}
                  </span>
                  <span className="flex-1 text-base font-bold text-gray-900 dark:text-white">{a.title}</span>
                  <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-90 text-indigo-600" : ""}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <ul className="space-y-3 px-5 pb-5 pt-1">
                      {a.items.map((it) => (
                        <li key={it} className="flex items-start text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="mr-2.5 mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

// COMMUNITY — a bright card board, every card its own colour, always open.
function CommunityPrograms({ areas, blurb }: ProgramsProps) {
  const tints = [
    "bg-orange-100 border-orange-300 dark:bg-orange-950/40 dark:border-orange-800/60",
    "bg-rose-100 border-rose-300 dark:bg-rose-950/40 dark:border-rose-800/60",
    "bg-amber-100 border-amber-300 dark:bg-amber-950/40 dark:border-amber-800/60",
    "bg-lime-100 border-lime-300 dark:bg-lime-950/40 dark:border-lime-800/60",
    "bg-sky-100 border-sky-300 dark:bg-sky-950/40 dark:border-sky-800/60",
    "bg-violet-100 border-violet-300 dark:bg-violet-950/40 dark:border-violet-800/60",
  ];
  return (
    <section className={`${W} py-12 ${DIVIDER}`}>
      <ScrollReveal variant="community">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Our Core Program Areas</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{blurb}</p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((a, i) => (
          <ScrollReveal key={a.number} variant="community" delay={(i % 3) * 100} className="h-full">
            <div
              className={`h-full rounded-[2rem] border-2 p-6 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl ${tints[i % tints.length]}`}
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-black text-orange-600 shadow dark:bg-zinc-900 dark:text-orange-300">
                {a.number}
              </span>
              <h3 className="mb-3 text-lg font-extrabold leading-snug text-gray-900 dark:text-white">{a.title}</h3>
              <ul className="space-y-2">
                {a.items.map((it) => (
                  <li key={it} className="flex items-start text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="mr-2.5 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────── FLAGSHIP PROJECTS ───────────────────────────── */

export function PathwayProjects({
  theme,
  heading,
  projects,
}: {
  theme: PathwayTheme;
  heading: string;
  projects: PathwayProject[];
}) {
  // NATURE — a green "canopy" header on each card carrying the headline figure.
  if (theme === "nature") {
    return (
      <section className={`${W} py-12 ${DIVIDER}`}>
        <ScrollReveal variant="nature">
          <h2 className="mb-10 text-center text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{heading}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} variant="nature" delay={i * 150} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-green-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-500/15 dark:border-white/10 dark:bg-zinc-900">
                <div className="relative overflow-hidden bg-gradient-to-br from-green-600 to-emerald-500 px-8 py-7 text-white">
                  <TreePine aria-hidden className="absolute -right-4 -top-4 h-28 w-28 text-white/15 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-6" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-green-100">Project {two(i + 1)}</span>
                  <p className="mt-2 text-2xl font-extrabold leading-tight">{p.stat}</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.description}</p>
                  </div>
                  <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400">
                    <MapPin className="h-3.5 w-3.5 text-green-600" /> {p.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  }

  // CIRCULAR — two dashed "loop" cards joined by a turning arrow.
  if (theme === "circular") {
    return (
      <section className={`${W} py-12 ${DIVIDER}`}>
        <ScrollReveal variant="circular">
          <h2 className="mb-10 text-center text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{heading}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          {projects.map((p, i) => (
            <div key={p.title} className="contents">
              {i === 1 && (
                <div className="hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg">
                  <RefreshCw className="h-6 w-6 motion-safe:animate-[spin_8s_linear_infinite]" />
                </div>
              )}
              <ScrollReveal variant="circular" delay={i * 150} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-[2rem] border-2 border-dashed border-amber-500/40 bg-amber-50/50 p-8 transition-colors duration-300 hover:border-amber-500 dark:bg-amber-950/10">
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Loop {two(i + 1)}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.description}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-amber-600" /> {p.location}
                    </span>
                    <span className="rounded-full bg-amber-500 px-3 py-1 font-bold text-white">{p.stat}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // FUTURE — a coloured icon block on the left, copy on the right.
  if (theme === "future") {
    const blocks = [
      { bg: "from-amber-300 to-orange-400", Icon: Sun },
      { bg: "from-cyan-400 to-sky-500", Icon: Zap },
    ];
    return (
      <section className={`${W} py-12 ${DIVIDER}`}>
        <ScrollReveal variant="future">
          <h2 className="mb-10 text-center text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{heading}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const { bg, Icon } = blocks[i % blocks.length];
            return (
              <ScrollReveal key={p.title} variant="future" delay={i * 120} className="h-full">
                <div className="group flex h-full overflow-hidden rounded-[2rem] border border-cyan-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/15 dark:border-cyan-900/60 dark:bg-zinc-900">
                  <div className={`hidden w-28 flex-shrink-0 items-center justify-center bg-gradient-to-b text-white sm:flex ${bg}`}>
                    <Icon className="h-10 w-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div className="space-y-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">Project {two(i + 1)}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.description}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 dark:text-gray-400">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-cyan-600" /> {p.location}
                      </span>
                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 font-bold text-cyan-800 dark:text-cyan-300">{p.stat}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    );
  }

  // ESG — an indigo "result" panel beside each case.
  if (theme === "esg") {
    return (
      <section className={`${W} py-12 ${DIVIDER}`}>
        <ScrollReveal variant="esg">
          <h2 className="mb-10 text-center text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{heading}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} variant="esg" delay={i * 120} className="h-full">
              <div className="grid h-full overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-indigo-900/50 dark:bg-zinc-900 sm:grid-cols-[170px_1fr]">
                <div className="flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 text-white">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-indigo-200">Result</span>
                  <p className="mt-2 text-xl font-extrabold leading-tight">{p.stat}</p>
                </div>
                <div className="flex flex-col justify-between p-7">
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">Case {two(i + 1)}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.description}</p>
                  </div>
                  <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400">
                    <MapPin className="h-3.5 w-3.5 text-indigo-500" /> {p.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  }

  // COMMUNITY — rounded bubbles with a tilted sticker for the headline figure.
  const bubble = [
    "bg-orange-100 border-orange-300 dark:bg-orange-950/40 dark:border-orange-800/60",
    "bg-rose-100 border-rose-300 dark:bg-rose-950/40 dark:border-rose-800/60",
  ];
  return (
    <section className={`${W} py-12 ${DIVIDER}`}>
      <ScrollReveal variant="community">
        <h2 className="mb-12 text-center text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">{heading}</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} variant="community" delay={i * 150} className="h-full">
            <div className={`relative flex h-full flex-col justify-between rounded-[2.5rem] border-2 p-8 pt-10 transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-xl ${bubble[i % bubble.length]}`}>
              <span className="absolute -top-4 right-8 rotate-3 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold text-orange-700 shadow-md dark:bg-zinc-900 dark:text-orange-300">
                {p.stat}
              </span>
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-orange-700 dark:text-orange-400">Project {two(i + 1)}</span>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{p.description}</p>
              </div>
              <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                <MapPin className="h-3.5 w-3.5 text-orange-600" /> {p.location}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
