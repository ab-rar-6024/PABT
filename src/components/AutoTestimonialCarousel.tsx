"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number | string;
  name: string;
  role?: string;
  description: string;
}

interface AutoTestimonialCarouselProps {
  testimonials: Testimonial[];
  intervalMs?: number;
  className?: string;
}

export default function AutoTestimonialCarousel({
  testimonials,
  intervalMs = 5000,
  className = "",
}: AutoTestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, intervalMs, testimonials.length]);

  const goTo = (index: number) => {
    setActiveIndex(((index % testimonials.length) + testimonials.length) % testimonials.length);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[260px] sm:min-h-[220px] overflow-hidden">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`absolute inset-0 flex flex-col items-center text-center px-4 sm:px-10 transition-all duration-700 ease-out ${
              i === activeIndex
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : i < activeIndex
                ? "opacity-0 -translate-x-8 pointer-events-none"
                : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            <svg
              className="w-8 h-8 text-green-500/30 mb-4"
              fill="currentColor"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm17.472 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L26.824 4z" />
            </svg>
            <p className="text-gray-700 dark:text-gray-300 italic text-base sm:text-lg leading-relaxed max-w-2xl">
              {t.description}
            </p>
            <div className="mt-6 font-bold text-gray-900 dark:text-white">{t.name}</div>
            {t.role && (
              <div className="text-green-700 dark:text-green-400 text-xs font-mono uppercase tracking-widest mt-0.5">
                {t.role}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => goTo(i)}
            aria-label={`Show testimonial from ${t.name}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIndex
                ? "w-6 bg-green-500"
                : "w-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
