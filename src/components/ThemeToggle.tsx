"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 transition-all duration-300 active:scale-90 group"
      style={{
        background: isDark
          ? "radial-gradient(circle at 40% 40%, #1a2e1a, #0f1a0f)"
          : "radial-gradient(circle at 40% 40%, #fffbeb, #fef3c7)",
        border: isDark ? "1px solid rgba(74,222,128,0.25)" : "1px solid rgba(251,191,36,0.4)",
        boxShadow: isDark
          ? "0 0 0 0 rgba(74,222,128,0), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 0 0 0 rgba(251,191,36,0), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      {/* Glow ring that pulses on hover */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: isDark
            ? "0 0 16px 4px rgba(74,222,128,0.35)"
            : "0 0 16px 4px rgba(251,191,36,0.45)",
        }}
      />

      {/* Icon with crossfade swap */}
      <span className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun — visible in light mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-300"
          style={{
            opacity: isDark ? 0 : 1,
            transform: isDark ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)",
          }}
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>

        {/* Moon — visible in dark mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute inset-0 w-5 h-5 text-green-400 transition-all duration-300"
          style={{
            opacity: isDark ? 1 : 0,
            transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
          }}
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
  );
}
