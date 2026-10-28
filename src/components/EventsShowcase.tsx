"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { Award, CalendarDays, Leaf, MapPin, Sparkles, Train, Trash2, X, ZoomIn } from "lucide-react";

type Shot = { src: string; title: string; caption: string; className: string };

const CERTIFICATE = {
  src: "/swachhata_certificate.jpg",
  alt: "Swachhata Pakhwada 2026 Certificate of Appreciation presented to PABT Foundation by Southern Railway, Tiruchchirappalli Division",
};

const GALLERY: Shot[] = [
  {
    src: "/events/swachhata-handover.jpg",
    title: "Certificate Handover",
    caption: "Southern Railway officials present PABT Foundation with its Certificate of Appreciation.",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/events/swachhata-rally.jpg",
    title: "Swachhata Rally",
    caption: "Volunteers and students march with the Swachhata Pakhwada banner.",
    className: "",
  },
  {
    src: "/events/swachhata-plantation.jpg",
    title: "Plantation Drive",
    caption: "Saplings planted and watered by railway staff and volunteers.",
    className: "",
  },
  {
    src: "/events/swachhata-students.jpg",
    title: "Students Join In",
    caption: "School and college students gather for the cleanliness and plantation programme.",
    className: "sm:col-span-2",
  },
];

const FACTS = [
  { Icon: CalendarDays, label: "Date", value: "09 October 2026" },
  { Icon: MapPin, label: "Place", value: "Tiruchchirappalli, Tamil Nadu" },
  { Icon: Train, label: "In association with", value: "Southern Railway, Tiruchchirappalli Division" },
];

const ACTIVITIES = [
  { Icon: Trash2, title: "Cleanliness Drive", text: "Volunteers and students took part in the cleanliness drive held for Swachhata Pakhwada 2026." },
  { Icon: Leaf, title: "Plantation Support", text: "Saplings were planted and watered together with railway staff and community members." },
  { Icon: Sparkles, title: "Community Awareness", text: "A rally and on-site programme spread the message of cleanliness and tree planting." },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

type Lightbox = { src: string; title: string; caption?: string } | null;

export default function EventsShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Lightbox>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  // Skip the movement, keep the content, when the visitor prefers reduced motion.
  const inView = reduce
    ? { initial: false as const }
    : { initial: "hidden" as const, whileInView: "show" as const, viewport: { once: true, amount: 0.2 } };

  return (
    <div className="relative overflow-hidden pb-24">
      {/* Hero */}
      <section className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"
            animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-10 right-1/4 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl"
            animate={reduce ? undefined : { x: [0, -36, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 text-center"
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
        >
          <motion.span
            variants={rise}
            className="inline-flex items-center gap-2 rounded-full border border-green-600/30 bg-green-500/10 px-4 py-1.5 text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Events
          </motion.span>
          <motion.h1
            variants={rise}
            className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
          >
            Upcoming{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">Events</span>
          </motion.h1>
          <motion.p
            variants={rise}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Plantation drives, cleanliness campaigns and community programmes from PABT Foundation. New dates will be
            announced here. Meanwhile, see how our latest drive with Southern Railway went.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured event */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100 dark:border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 lg:order-1" variants={container} {...inView}>
            <motion.span
              variants={rise}
              className="inline-flex items-center gap-2 text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3"
            >
              <Award className="w-4 h-4" /> Featured Event
            </motion.span>
            <motion.h2
              variants={rise}
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Swachhata Pakhwada 2026
            </motion.h2>
            <motion.p variants={rise} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Swachhata Pakhwada is the Indian Railways fortnight dedicated to cleanliness. On 09 October 2026, PABT
              Foundation joined Southern Railway, Tiruchchirappalli Division, for a cleanliness drive and plantation
              programme under the Plant a Billion Trees initiative.
            </motion.p>
            <motion.p variants={rise} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              In recognition of this participation and support, the Division presented PABT Foundation with a
              Certificate of Appreciation, signed by the Sr. Divisional Engineer / Co-Ordination and the Divisional
              Railway Manager.
            </motion.p>
            <motion.ul variants={rise} className="space-y-4">
              {FACTS.map(({ Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-lg bg-green-500/10 p-2 text-green-600 dark:text-green-400">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-mono uppercase tracking-widest text-gray-400">{label}</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{value}</span>
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={reduce ? false : { opacity: 0, y: 40, rotate: 2, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              type="button"
              onClick={() => setActive({ src: CERTIFICATE.src, title: "Certificate of Appreciation" })}
              whileHover={reduce ? undefined : { y: -6, rotate: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="group relative w-full max-w-md cursor-zoom-in rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500/50"
              aria-label="View certificate full size"
            >
              <span aria-hidden className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-green-500/30 to-amber-400/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CERTIFICATE.src}
                alt={CERTIFICATE.alt}
                width={1400}
                height={1980}
                className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
              />
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <ZoomIn className="w-3.5 h-3.5" /> View full size
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What we did */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={container} {...inView}>
          {ACTIVITIES.map(({ Icon, title, text }) => (
            <motion.div
              key={title}
              variants={rise}
              whileHover={reduce ? undefined : { y: -6 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/[0.03] p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-green-500/10"
            >
              <span className="mb-4 inline-flex rounded-xl bg-green-500/10 p-3 text-green-600 dark:text-green-400">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100 dark:border-gray-900">
        <motion.div className="text-center mb-10" variants={container} {...inView}>
          <motion.span variants={rise} className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block">
            Event Gallery
          </motion.span>
          <motion.h2 variants={rise} className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Moments From the Day
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-4 sm:auto-rows-[200px] lg:auto-rows-[240px] gap-4"
          variants={container}
          {...inView}
        >
          {GALLERY.map((shot) => (
            <motion.button
              key={shot.src}
              type="button"
              variants={rise}
              onClick={() => setActive(shot)}
              className={`group relative aspect-[3/2] sm:aspect-auto overflow-hidden rounded-2xl cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500/50 ${shot.className}`}
              aria-label={`View photo: ${shot.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={shot.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 p-4 text-left translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                <span className="block text-sm font-bold text-white">{shot.title}</span>
                <span className="mt-1 block max-h-0 overflow-hidden text-xs leading-snug text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                  {shot.caption}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 text-center">
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-green-700 to-emerald-600 px-6 py-12 text-white shadow-2xl shadow-green-900/20"
          initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">Join our next drive</h2>
          <p className="mx-auto mb-7 max-w-xl text-white/85">
            Plant a tree, clean a street, or bring your school or company along. Every drive starts with volunteers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/volunteer"
              className="rounded-lg bg-white px-6 py-3 text-sm font-bold tracking-wider text-green-800 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/60 px-6 py-3 text-sm font-bold tracking-wider text-white transition-colors duration-300 hover:bg-white/10"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              className="flex max-h-full max-w-5xl flex-col items-center"
              initial={reduce ? false : { scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/85">
                <span className="font-bold text-white">{active.title}</span>
                {active.caption && <span className="block mt-1 text-white/70">{active.caption}</span>}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
