import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToMissionsLink() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <Link
        href="/missions"
        className="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to 5 Missions
      </Link>
    </div>
  );
}
