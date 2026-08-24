"use client";

import { useEffect, useRef, useState } from "react";

interface YearStep {
  year: string;
  title: string;
  description: string;
  image: string;
}

export default function YearScrollStory({ steps }: { steps: YearStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(i);
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [steps.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* Sticky image — stays pinned while text steps scroll past on the right */}
      <div className="hidden lg:block relative">
        <div className="sticky top-28 h-[420px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
          {steps.map((step, i) => (
            <img
              key={step.year}
              src={step.image}
              alt={step.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                i === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 text-green-400 font-mono text-xs uppercase tracking-widest font-bold">
            {steps[activeIndex]?.year}
          </div>
        </div>
      </div>

      {/* Scrolling year steps */}
      <div>
        {steps.map((step, i) => (
          <div
            key={step.year}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className="min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center"
          >
            <div className="lg:hidden mb-6 h-56 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
            </div>
            <div
              className={`transition-opacity duration-500 ${
                i === activeIndex ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="text-green-700 dark:text-green-400 font-mono text-sm uppercase tracking-widest font-bold mb-2">
                {step.year}
              </div>
              <h3 className="text-gray-900 dark:text-white font-bold text-2xl sm:text-3xl mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-md">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
