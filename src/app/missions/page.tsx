"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StrokeText from "@/components/StrokeText";
import MissionSlider from "@/components/MissionSlider";

export default function MissionsPage() {
  const domains = [
    {
      name: "Plant A Billion Trees",
      shortName: "Nature",
      pathway: "PABT Nature",
      description:
        "Restoring forests, rejuvenating water bodies, and shielding biodiversity through native-species afforestation.",
      accentColor: "#16a34a",
      image: "/nature_hero.png",
      href: "/nature",
      index: 0,
    },
    {
      name: "Preserve All By Transforming",
      shortName: "Circularity",
      pathway: "PABT Circular",
      description:
        "Diverting waste from landfills, building recycling networks, and enabling sustainable farming practices.",
      accentColor: "#f59e0b",
      image: "/circular_hero.png",
      href: "/circular",
      index: 1,
    },
    {
      name: "Powering A Brighter Tomorrow",
      shortName: "Clean Energy",
      pathway: "PABT Future",
      description:
        "Deploying solar micro-grids, EV charging hubs, and climate-tech pilots in off-grid communities.",
      accentColor: "#06b6d4",
      image: "/future_hero.png",
      href: "/future",
      index: 2,
    },
    {
      name: "Partners Advancing Better Tomorrow",
      shortName: "ESG & CSR",
      pathway: "PABT ESG",
      description:
        "Supporting companies with materiality assessments, supply-chain audits, and BRSR-aligned disclosures.",
      accentColor: "#8b5cf6",
      image: "/esg_hero.png",
      href: "/esg",
      index: 3,
    },
    {
      name: "People And Businesses Together",
      shortName: "Community",
      pathway: "PABT Community",
      description:
        "Mentoring school eco-clubs, running volunteer cleanups, and creating green livelihoods on the ground.",
      accentColor: "#f97316",
      image: "/community_hero.png",
      href: "/community",
      index: 4,
    },
  ];

  return (
    <div className="relative pt-14 sm:pt-20">
      {/* Back to Home Button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800/90 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-100 text-xs sm:text-sm font-bold border border-gray-200/80 dark:border-zinc-700/80 transition-all shadow-sm hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 text-center">
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block animate-float">
          Our 5 Missions
        </span>
        <h1 className="mb-5">
          <StrokeText
            text="Five Pathways. One Connected System."
            strokeColor="#16a34a"
            fillColor="currentColor"
            strokeWidth={1.4}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.02}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={56}
            fontWeight={800}
            letterSpacing={-1.5}
            className="max-w-3xl mx-auto text-gray-900 dark:text-white"
          />
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          No single intervention fixes a landscape on its own. Each PABT pathway
          reinforces the other four — restored forests need clean water, clean
          water needs less waste, less waste needs energy that doesn&apos;t pollute,
          and all of it needs people who show up for it.
        </p>
      </section>

      {/* Full-screen Vineyard-style mission slider */}
      <MissionSlider domains={domains} />

      {/* CTA footer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-t border-gray-100 dark:border-gray-900">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          Want to see the numbers behind these five pathways?
        </h2>
        <Link
          href="/impact"
          className="inline-block px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20"
        >
          View Our Impact
        </Link>
      </section>
    </div>
  );
}
