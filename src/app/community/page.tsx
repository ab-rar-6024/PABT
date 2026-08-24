"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";
import MetricCard from "@/components/MetricCard";
import BackToMissionsLink from "@/components/BackToMissionsLink";

export default function CommunityPage() {
  const [openAreaIndex, setOpenAreaIndex] = useState<number | null>(null);
  const metrics = [
    { value: "310", label: "Green Schools Engaged", sublabel: "With active student climate councils and compost units." },
    { value: "1.9K+", label: "Communities Reached", sublabel: "Villages and neighborhoods receiving sustainability training." },
    { value: "34K+", label: "Volunteers Mobilized", sublabel: "Taking part in plantations, cleanups, and green audits." },
  ];

  const programAreas = [
    {
      number: "01",
      title: "Green Schools and Colleges",
      items: [
        "Conducting green campus assessments to map water, energy, and waste flow.",
        "Establishing school eco-clubs and student-led climate councils.",
        "Implementing physical waste segregation, rainwater harvesting, and composting pilots."
      ]
    },
    {
      number: "02",
      title: "Sustainability Education",
      items: [
        "Running workshops on water conservation, climate change, and carbon footprints.",
        "Developing hands-on climate literacy toolkits for schools and colleges.",
        "Conducting environmental field trips to Miyawaki forests and recycling clusters."
      ]
    },
    {
      number: "03",
      title: "Community Development",
      items: [
        "Assisting panchayats with rural village sustainability planning.",
        "Supporting women-led self-help groups (SHGs) setting up organic nurseries.",
        "Conducting sustainable farming training for localized rural clusters."
      ]
    },
    {
      number: "04",
      title: "Corporate and Community Volunteering",
      items: [
        "Structuring weekend afforestation drives and river mouth cleaning drives.",
        "Running corporate employee-volunteering initiatives with measured impact.",
        "Connecting young professionals to mentor students at green schools."
      ]
    },
    {
      number: "05",
      title: "Youth and Citizen Climate Action",
      items: [
        "Establishing active youth climate networks and college chapters.",
        "Enabling citizen science projects to catalog biodiversity and test water safety.",
        "Organizing climate hackathons and community design sprints for local green solutions."
      ]
    },
    {
      number: "06",
      title: "Inclusive and Sustainable Livelihoods",
      items: [
        "Providing skill development in solar panel repair, composting, and recycling operations.",
        "Assisting local cooperatives to market recycled fabric and bio-manure products.",
        "Training rural youths as ecotourism and bird-watching nature guides."
      ]
    }
  ];

  return (
    <div className="relative pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-orange-50/10 dark:bg-orange-950/10 -z-10" />

      <BackToMissionsLink />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <span className="text-orange-700 dark:text-orange-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block">
          PATHWAY 05 — COMMUNITY
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 max-w-2xl">
          Mobilizing People for Planet
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          Our PABT Community pathway is built on the belief that long-term sustainability requires citizen ownership. We organize campus eco-clubs, run climate literacy courses, support women-led organic nurseries, and structure volunteer-driven field campaigns.
        </p>
      </section>

      {/* Metrics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <MetricCard
              key={i}
              value={m.value}
              label={m.label}
              sublabel={m.sublabel}
              themeColor="community"
            />
          ))}
        </div>
      </section>

      {/* Program Areas Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our Core Program Areas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              We connect institutions, corporate teams, and rural groups. Explore our specific program areas eligible for CSR collaboration.
            </p>
          </div>
          <div className="lg:col-span-8">
            {programAreas.map((area, idx) => (
              <Accordion
                key={idx}
                number={area.number}
                title={area.title}
                items={area.items}
                themeColor="community"
                isOpen={openAreaIndex === idx}
                onToggle={() => setOpenAreaIndex(openAreaIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Flagship Community Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-orange-700 dark:text-orange-400 font-mono text-xs uppercase tracking-widest font-bold">
                PROJECT 01
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Green Schools Movement</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Mentoring schools across Maharashtra to establish physical composting systems, waste classification, and student environment councils.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Location: Maharashtra, India</span>
              <span>310 Schools Engaged</span>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-orange-700 dark:text-orange-400 font-mono text-xs uppercase tracking-widest font-bold">
                PROJECT 02
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Women Organic Nurseries</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Supporting women&apos;s self-help groups (SHGs) to construct and manage community sapling nurseries, providing independent rural income.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Location: Tamil Nadu & Karnataka</span>
              <span>120+ Micro-Enterprises</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
