"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface YearStep {
  year: string;
  title: string;
  description: string;
  image: string;
}

export default function YearScrollStory({ steps }: { steps: YearStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-8">
      {/* === Track line (faint background) === */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-green-500/15 hidden md:block" />
      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-green-500/15 md:hidden" />

      {/* === Scroll-driven fill line (desktop) === */}
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 hidden md:block"
      />
      {/* === Scroll-driven fill line (mobile) === */}
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 md:hidden"
      />

      <div className="space-y-12 md:space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-center justify-between group"
            >
              {/* Central Node Circle */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-[#0B0F0E] border-4 border-green-500 shadow-lg z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>

              {/* Card Container — alternates left / right */}
              <div
                className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                  isEven ? "md:pr-8 md:text-right md:mr-auto" : "md:pl-8 md:ml-auto"
                }`}
              >
                <div className="rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-52 overflow-hidden bg-gray-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                    <span className="absolute bottom-3 left-3 md:left-auto md:right-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-green-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {step.year}
                    </span>
                  </div>

                  <div className="p-6 text-left space-y-2">
                    <span className="text-xs font-mono font-bold text-green-600 dark:text-green-400 uppercase tracking-widest block">
                      {step.year} Milestone
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
