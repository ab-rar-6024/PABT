"use client";

interface AccordionProps {
  number: string;
  title: string;
  items: string[];
  themeColor: string; // 'nature', 'circular', 'future', 'esg', 'community'
  isOpen: boolean;
  onToggle: () => void;
}

export default function Accordion({ number, title, items, themeColor, isOpen, onToggle }: AccordionProps) {
  const themeClasses: Record<string, { border: string; bg: string; text: string; dot: string }> = {
    nature: {
      border: "border-green-900/30 hover:border-green-500/30",
      bg: "bg-green-50/20 dark:bg-green-950/20",
      text: "text-green-700 dark:text-green-400",
      dot: "bg-green-500",
    },
    circular: {
      border: "border-amber-900/30 hover:border-amber-500/30",
      bg: "bg-amber-50/20 dark:bg-amber-950/20",
      text: "text-amber-700 dark:text-amber-400",
      dot: "bg-amber-500",
    },
    future: {
      border: "border-cyan-900/30 hover:border-cyan-500/30",
      bg: "bg-cyan-50/20 dark:bg-cyan-950/20",
      text: "text-cyan-700 dark:text-cyan-400",
      dot: "bg-cyan-500",
    },
    esg: {
      border: "border-slate-900/30 hover:border-slate-500/30",
      bg: "bg-slate-900/20",
      text: "text-slate-700 dark:text-slate-400",
      dot: "bg-slate-500",
    },
    community: {
      border: "border-orange-900/30 hover:border-orange-500/30",
      bg: "bg-orange-50/20 dark:bg-orange-950/20",
      text: "text-orange-700 dark:text-orange-400",
      dot: "bg-orange-500",
    },
  };

  const selectedTheme = themeClasses[themeColor] || themeClasses.nature;

  return (
    <div
      className={`border rounded-xl transition-all duration-300 overflow-hidden mb-4 ${
        isOpen ? `${selectedTheme.bg} ${selectedTheme.border.split(" ")[0].replace("/30", "/60")}` : `bg-gray-100/30 dark:bg-gray-900/30 ${selectedTheme.border}`
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none transition-colors duration-200"
      >
        <div className="flex items-center space-x-4">
          <span className={`text-sm font-mono font-bold ${selectedTheme.text}`}>
            {number}
          </span>
          <h4 className="text-gray-900 dark:text-white font-bold text-base sm:text-lg tracking-wide">
            {title}
          </h4>
        </div>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-gray-900 dark:text-white" : ""
          }`}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] border-t border-gray-100/60 dark:border-gray-900/60 p-5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${selectedTheme.dot}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
