import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToMissionsLink() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-2 flex items-center">
      <Link
        href="/missions"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-100 dark:bg-zinc-800/90 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-100 text-xs sm:text-sm font-bold border border-gray-200/80 dark:border-zinc-700/80 transition-all shadow-sm hover:scale-105"
      >
        <ArrowLeft className="w-4 h-4 text-green-600 dark:text-green-400" />
        <span>Back to Our 5 Missions</span>
      </Link>
    </div>
  );
}
