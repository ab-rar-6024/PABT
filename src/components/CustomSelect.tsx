"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
        {label} {required && <span className="text-green-500">*</span>}
      </label>

      {/* Select Trigger Box */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-gray-50 dark:bg-gray-950 border rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 outline-none cursor-pointer ${
          isOpen
            ? "border-green-500 ring-2 ring-green-500/20 text-gray-900 dark:text-white"
            : "border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-700"
        }`}
      >
        <span className="truncate">{value || "Select an option"}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180 text-green-500" : ""
          }`}
        />
      </button>

      {/* Custom Option Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white dark:bg-[#121815] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-2 max-h-60 overflow-y-auto space-y-1 animate-in fade-in zoom-in-95 duration-150">
          {options.map((option) => {
            const isSelected = option === value;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                  isSelected
                    ? "bg-green-600 text-white font-bold shadow-md shadow-green-600/20"
                    : "text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-950/50 hover:text-green-700 dark:hover:text-green-400"
                }`}
              >
                <span>{option}</span>
                {isSelected && <Check className="w-4 h-4 text-white flex-shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
