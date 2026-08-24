import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  sublabel: string;
  themeColor: string; // 'nature' | 'circular' | 'future' | 'esg' | 'community'
}

export default function MetricCard({ value, label, sublabel, themeColor }: MetricCardProps) {
  const borderColors: Record<string, string> = {
    nature: "border-green-500/20 hover:border-green-500/50 hover:shadow-green-500/10",
    circular: "border-amber-500/20 hover:border-amber-500/50 hover:shadow-amber-500/10",
    future: "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    esg: "border-slate-500/20 hover:border-slate-500/50 hover:shadow-slate-500/10",
    community: "border-orange-500/20 hover:border-orange-500/50 hover:shadow-orange-500/10",
  };

  const textColors: Record<string, string> = {
    nature: "text-green-700 dark:text-green-400",
    circular: "text-amber-700 dark:text-amber-400",
    future: "text-cyan-700 dark:text-cyan-400",
    esg: "text-slate-700 dark:text-slate-400",
    community: "text-orange-700 dark:text-orange-400",
  };

  const selectedBorder = borderColors[themeColor] || borderColors.nature;
  const selectedText = textColors[themeColor] || textColors.nature;

  return (
    <div
      className={`glass-panel p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 ${selectedBorder} shadow-lg`}
    >
      <div className={`text-4xl font-extrabold tracking-tight ${selectedText} mb-2`}>
        {value}
      </div>
      <div className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
        {sublabel}
      </div>
    </div>
  );
}
