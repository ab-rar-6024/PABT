"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, Bus, CheckCircle2, Lightbulb, MapPin, ShieldCheck, Sun, Zap, type LucideIcon } from "lucide-react";

export type EnergyMetric = { value: string; label: string; sublabel: string };
export type EnergyArea = { number: string; title: string; items: string[] };
export type EnergyProject = { title: string; description: string; location: string; stat: string };

interface Props {
  label: string;
  title: string;
  description: string;
  intro: string;
  metrics: EnergyMetric[];
  areas: EnergyArea[];
  areasBlurb: string;
  projectsHeading: string;
  projects: EnergyProject[];
}

const EASE = [0.16, 1, 0.3, 1] as const;
const W = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const two = (n: number) => String(n).padStart(2, "0");

/** Counts a figure like "3.4M+" up from zero once it scrolls into view. */
function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  const match = value.match(/^([\d.,]+)(.*)$/);
  const target = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView || !match || reduce) return;
    const controls = animate(0, target, { duration: 1.8, ease: "easeOut", onUpdate: setN });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {(reduce ? target : n).toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ───────────────────────────── HERO SCENE ───────────────────────────── */

function HeroScene() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 320"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] min-h-[200px] w-full"
    >
      <path d="M0 190 C220 130 380 230 620 180 S1010 130 1200 185 L1200 320 L0 320Z" className="fill-teal-400/60 dark:fill-teal-900/80" />
      <path d="M0 245 C260 200 470 270 720 232 S1060 208 1200 240 L1200 320 L0 320Z" className="fill-emerald-500/80 dark:fill-emerald-950" />

      {/* wind turbine */}
      <g>
        <path d="M1010 215 L1016 112 L1022 215Z" className="fill-white dark:fill-slate-300" />
        <g className="ce-spin" style={{ transformOrigin: "1016px 112px" }}>
          <path d="M1016 112 L1008 52 L1024 52Z" className="fill-white dark:fill-slate-200" />
          <path d="M1016 112 L1070 142 L1062 154Z" className="fill-white dark:fill-slate-200" />
          <path d="M1016 112 L962 142 L970 154Z" className="fill-white dark:fill-slate-200" />
          <circle cx="1016" cy="112" r="6" className="fill-slate-300 dark:fill-slate-400" />
        </g>
      </g>

      {/* solar panels */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${690 + i * 50} 214)`}>
          <path d="M0 22 L8 0 L44 0 L36 22Z" className="fill-sky-600 dark:fill-sky-500" />
          <path d="M14 22 L22 0 M26 22 L34 0 M3 11 L40 11" stroke="white" strokeOpacity="0.55" strokeWidth="1.2" />
          <path d="M18 22 L18 34" stroke="#475569" strokeWidth="2" />
        </g>
      ))}

      {/* power line from the panels to the village */}
      <path d="M690 222 Q 470 168 250 224" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6 9" className="ce-flow" />
      <path d="M690 222 Q 470 168 250 224" fill="none" stroke="#fde68a" strokeOpacity="0.4" strokeWidth="6" />

      {/* village */}
      {[
        { x: 110, w: 56, h: 44 },
        { x: 182, w: 64, h: 52 },
        { x: 262, w: 50, h: 40 },
      ].map((h, i) => (
        <g key={h.x} transform={`translate(${h.x} ${252 - h.h})`}>
          <rect width={h.w} height={h.h} rx="3" className="fill-white dark:fill-slate-300" />
          <path d={`M-6 4 L${h.w / 2} -22 L${h.w + 6} 4Z`} className="fill-rose-400 dark:fill-rose-500" />
          <rect x={h.w / 2 - 7} y={h.h / 2 - 6} width="14" height="14" rx="2" className="ce-window fill-amber-300" style={{ animationDelay: `${i * 0.9}s` }} />
        </g>
      ))}
    </svg>
  );
}

function Hero({ label, title, description, intro }: Pick<Props, "label" | "title" | "description" | "intro">) {
  const reduce = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };
  return (
    <section className={`${W} pt-4 pb-2 sm:pt-6`}>
      <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-amber-200/70 bg-gradient-to-b from-amber-100 via-orange-50 to-sky-200 shadow-xl shadow-amber-900/10 dark:border-white/10 dark:from-indigo-950 dark:via-slate-900 dark:to-cyan-950">
        {/* sun and its rays */}
        <motion.div
          aria-hidden
          className="absolute -right-24 -top-28 h-[26rem] w-[26rem] rounded-full [background:repeating-conic-gradient(rgba(251,191,36,0.4)_0_7deg,transparent_7deg_22deg)] [mask-image:radial-gradient(circle,black_22%,transparent_68%)]"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-10 top-10 h-28 w-28 rounded-full bg-gradient-to-br from-amber-200 to-orange-400 shadow-[0_0_90px_14px_rgba(251,191,36,0.6)] sm:right-16 sm:h-36 sm:w-36"
          initial={reduce ? false : { y: 260, opacity: 0, scale: 0.7 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: EASE, delay: 0.2 }}
        />
        <HeroScene />

        <motion.div
          className="relative z-10 max-w-2xl p-7 pb-44 sm:p-10 sm:pb-40 lg:p-12 lg:pb-36"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
        >
          <motion.div variants={item} className="mb-5">
            <Link
              href="/missions"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-gray-800 shadow-sm ring-1 ring-black/5 transition-all hover:scale-105 hover:shadow-md dark:bg-white/10 dark:text-white dark:ring-white/20"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Our 5 Missions
            </Link>
          </motion.div>
          <motion.span variants={item} className="mb-3 block font-mono text-xs font-bold uppercase tracking-widest text-orange-700 dark:text-amber-300">
            {label}
          </motion.span>
          <motion.h1 variants={item} className="mb-4 text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            {title}
          </motion.h1>
          <motion.p variants={item} className="text-base leading-relaxed text-gray-800 dark:text-gray-200 sm:text-lg">
            {description}
          </motion.p>
          <motion.p variants={item} className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
            {intro}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────────── STATS ON A WIRE ───────────────────────────── */

const NODE_ICONS: LucideIcon[] = [Sun, Zap, Lightbulb];
const NODE_COLORS = ["from-amber-300 to-orange-400", "from-cyan-300 to-sky-500", "from-yellow-300 to-amber-500"];

function Stats({ metrics }: { metrics: EnergyMetric[] }) {
  return (
    <section className={`${W} py-10`}>
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
        {/* the wire that links the three readings */}
        <span aria-hidden className="absolute left-[16.6%] right-[16.6%] top-9 hidden h-0.5 md:block">
          <span className="ce-flow-bg block h-full w-full" />
        </span>
        {metrics.map((m, i) => {
          const Icon = NODE_ICONS[i % NODE_ICONS.length];
          return (
            <motion.div
              key={m.label}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.15 }}
            >
              <span className={`relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-gradient-to-br text-white shadow-lg ring-8 ring-white dark:ring-gray-950 ${NODE_COLORS[i % NODE_COLORS.length]}`}>
                <Icon className="h-8 w-8" />
              </span>
              <CountUp value={m.value} className="mt-5 text-5xl font-black tabular-nums tracking-tight text-gray-900 dark:text-white sm:text-6xl" />
              <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">{m.label}</h3>
              <p className="mt-1 max-w-[16rem] text-xs leading-relaxed text-gray-600 dark:text-gray-400">{m.sublabel}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────────────────────── PROGRAMS: STICKY STORY ───────────────────────────── */

const AREA_ICONS: LucideIcon[] = [Sun, Bus, Lightbulb, ShieldCheck];
const AREA_GRADIENTS = [
  "from-amber-400 via-orange-400 to-rose-400",
  "from-cyan-400 via-sky-500 to-blue-600",
  "from-yellow-300 via-lime-400 to-emerald-500",
  "from-sky-500 via-indigo-500 to-violet-600",
];

function Programs({ areas, blurb }: { areas: EnergyArea[]; blurb: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [areas.length]);

  const Icon = AREA_ICONS[active % AREA_ICONS.length];

  return (
    <section className={`${W} py-12`}>
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Our Core Program Areas</h2>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{blurb}</p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* sticky visual — swaps colour and icon as you scroll through the chapters */}
        <div className="hidden lg:block">
          <div className={`sticky top-28 flex h-[440px] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 text-white shadow-2xl transition-colors duration-700 ${AREA_GRADIENTS[active % AREA_GRADIENTS.length]}`}>
            <span aria-hidden className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/80">
                Chapter {two(active + 1)} / {two(areas.length)}
              </span>
              <div className="flex flex-col gap-2">
                {areas.map((a, i) => (
                  <span key={a.number} className={`h-2 w-2 rounded-full transition-all duration-500 ${i === active ? "scale-150 bg-white" : "bg-white/40"}`} />
                ))}
              </div>
            </div>
            <div className="relative flex flex-1 items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.6, rotate: 20 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex h-44 w-44 items-center justify-center rounded-full bg-white/20 ring-8 ring-white/15 backdrop-blur"
                >
                  <Icon className="h-20 w-20" strokeWidth={1.5} />
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="relative text-xl font-extrabold leading-snug">{areas[active].title}</p>
          </div>
        </div>

        {/* chapters */}
        <div className="space-y-6 lg:space-y-0">
          {areas.map((a, i) => {
            const Ic = AREA_ICONS[i % AREA_ICONS.length];
            return (
              <article
                key={a.number}
                data-index={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="flex flex-col justify-center rounded-3xl border border-cyan-100 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-zinc-900 lg:min-h-[34vh] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:py-8 lg:shadow-none dark:lg:bg-transparent"
              >
                <div className="mb-4 flex items-center gap-3 lg:hidden">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white ${AREA_GRADIENTS[i % AREA_GRADIENTS.length]}`}>
                    <Ic className="h-5 w-5" />
                  </span>
                </div>
                <span className="font-mono text-6xl font-black text-gray-900/10 dark:text-white/10 lg:text-8xl">{a.number}</span>
                <h3 className="-mt-2 mb-5 text-2xl font-extrabold leading-snug text-gray-900 dark:text-white sm:text-3xl">{a.title}</h3>
                <ul className="space-y-3.5">
                  {a.items.map((it) => (
                    <li key={it} className="flex items-start text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
                      <CheckCircle2 className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── PROJECTS: ILLUSTRATED PANELS ───────────────────────────── */

function VillageScene() {
  return (
    <svg aria-hidden viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="vg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#312e81" />
          <stop offset="0.6" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#vg-sky)" />
      {[[40, 30], [90, 60], [150, 22], [230, 48], [300, 24], [350, 70], [200, 80]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="white" className="ce-twinkle" style={{ animationDelay: `${i * 0.5}s` }} />
      ))}
      <path d="M0 170 C80 130 150 175 230 150 S350 120 400 160 L400 260 L0 260Z" fill="#4c1d95" opacity="0.8" />
      <path d="M0 210 C100 185 200 225 300 200 S380 195 400 205 L400 260 L0 260Z" fill="#1e1b4b" />
      {[30, 105, 190, 270, 335].map((x, i) => (
        <g key={x} transform={`translate(${x} ${188 + (i % 2) * 8})`}>
          <rect width="46" height="34" rx="2" fill="#e2e8f0" />
          <path d="M-5 3 L23 -18 L51 3Z" fill="#f43f5e" />
          <rect x="16" y="10" width="14" height="14" rx="2" fill="#fde047" className="ce-window" style={{ animationDelay: `${i * 0.7}s` }} />
        </g>
      ))}
    </svg>
  );
}

function BusScene() {
  return (
    <svg aria-hidden viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="bs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#bs-sky)" />
      <circle cx="330" cy="50" r="26" fill="#fde047" />
      <ellipse cx="90" cy="60" rx="38" ry="12" fill="white" opacity="0.8" />
      <ellipse cx="130" cy="52" rx="26" ry="10" fill="white" opacity="0.8" />
      {/* solar canopy */}
      <path d="M40 120 L350 120 L335 100 L55 100Z" fill="#0369a1" />
      <path d="M100 120 L112 100 M170 120 L182 100 M240 120 L252 100 M310 120 L322 100 M55 110 L342 110" stroke="white" strokeOpacity="0.5" />
      <rect x="70" y="120" width="8" height="90" fill="#475569" />
      <rect x="320" y="120" width="8" height="90" fill="#475569" />
      <g className="ce-pulse" style={{ transformOrigin: "200px 140px" }}>
        <circle cx="200" cy="142" r="16" fill="#fbbf24" />
        <path d="M204 130 L194 144 L201 144 L196 154 L208 139 L201 139Z" fill="white" />
      </g>
      {/* road */}
      <rect y="206" width="400" height="54" fill="#334155" />
      <path d="M0 233 L400 233" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="22 16" />
      {/* bus */}
      <g className="ce-bus">
        <rect x="0" y="168" width="120" height="44" rx="10" fill="#10b981" />
        <rect x="10" y="176" width="22" height="16" rx="3" fill="#ecfeff" />
        <rect x="38" y="176" width="22" height="16" rx="3" fill="#ecfeff" />
        <rect x="66" y="176" width="22" height="16" rx="3" fill="#ecfeff" />
        <rect x="94" y="176" width="18" height="30" rx="3" fill="#ecfeff" />
        <circle cx="26" cy="214" r="9" fill="#0f172a" />
        <circle cx="94" cy="214" r="9" fill="#0f172a" />
        <circle cx="26" cy="214" r="3.5" fill="#94a3b8" />
        <circle cx="94" cy="214" r="3.5" fill="#94a3b8" />
      </g>
    </svg>
  );
}

function Projects({ heading, projects }: { heading: string; projects: EnergyProject[] }) {
  const scenes = [VillageScene, BusScene];
  return (
    <section className={`${W} py-12`}>
      <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">{heading}</h2>
      <div className="space-y-8">
        {projects.map((p, i) => {
          const Scene = scenes[i % scenes.length];
          const flip = i % 2 === 1;
          return (
            <motion.article
              key={p.title}
              className="grid overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-lg dark:border-white/10 dark:bg-zinc-900 lg:grid-cols-2"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <div className={`relative min-h-[300px] overflow-hidden ${flip ? "lg:order-2" : ""}`}>
                <Scene />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                <div className="absolute left-6 right-6 top-6 text-white">
                  <CountUp value={p.stat.split(" ")[0]} className="text-6xl font-black tabular-nums drop-shadow sm:text-7xl" />
                  <p className="mt-1 text-sm font-bold uppercase tracking-wider text-white/90">{p.stat.split(" ").slice(1).join(" ")}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">Project {two(i + 1)}</span>
                <h3 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">{p.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">{p.description}</p>
                <p className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold text-cyan-800 dark:bg-cyan-500/10 dark:text-cyan-300">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────────────────────── PAGE ───────────────────────────── */

export default function CleanEnergyPage(props: Props) {
  return (
    <div className="relative pb-6">
      <style>{`
        .ce-spin { animation: ce-spin 9s linear infinite; }
        .ce-flow { animation: ce-flow 1.4s linear infinite; }
        .ce-flow-bg { background: repeating-linear-gradient(90deg, #f59e0b 0 8px, transparent 8px 18px); background-size: 18px 100%; animation: ce-flow-bg 1s linear infinite; opacity: .7; }
        .ce-window { animation: ce-glow 3.2s ease-in-out infinite; }
        .ce-twinkle { animation: ce-twinkle 2.4s ease-in-out infinite; }
        .ce-pulse { animation: ce-pulse 1.8s ease-in-out infinite; }
        .ce-bus { animation: ce-bus 9s linear infinite; }
        @keyframes ce-spin { to { transform: rotate(360deg); } }
        @keyframes ce-flow { to { stroke-dashoffset: -30; } }
        @keyframes ce-flow-bg { to { background-position: 18px 0; } }
        @keyframes ce-glow { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
        @keyframes ce-twinkle { 0%, 100% { opacity: .2; } 50% { opacity: 1; } }
        @keyframes ce-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.18); } }
        @keyframes ce-bus { from { transform: translateX(-140px); } to { transform: translateX(420px); } }
        @media (prefers-reduced-motion: reduce) {
          .ce-spin, .ce-flow, .ce-flow-bg, .ce-window, .ce-twinkle, .ce-pulse, .ce-bus { animation: none; }
          .ce-window { opacity: 1; }
        }
      `}</style>
      <Hero label={props.label} title={props.title} description={props.description} intro={props.intro} />
      <Stats metrics={props.metrics} />
      <Programs areas={props.areas} blurb={props.areasBlurb} />
      <Projects heading={props.projectsHeading} projects={props.projects} />
    </div>
  );
}
