"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";
import MetricCard from "@/components/MetricCard";
import BackToMissionsLink from "@/components/BackToMissionsLink";
import PathwayHeroBanner from "@/components/PathwayHeroBanner";

export default function CircularPage() {
  const [openAreaIndex, setOpenAreaIndex] = useState<number | null>(null);
  const metrics = [
    { value: "18K+", label: "Tonnes Waste Diverted", sublabel: "Diverted from municipal landfills and waterways." },
    { value: "210K+", label: "Carbon Avoided (Tonnes)", sublabel: "Calculated through composting and reuse loops." },
    { value: "1.2K", label: "Farms Transitioned", sublabel: "Transitioned to chemical-free sustainable farming." },
  ];

  const programAreas = [
    {
      number: "01",
      title: "Circular Economy and Waste Management",
      items: [
        "Setting up community-led dry waste collection and sorting centers.",
        "Establishing micro-composting units to convert organic food waste into premium organic manure.",
        "Organizing localized collection networks for PET plastics, multi-layered packaging, and glass."
      ]
    },
    {
      number: "02",
      title: "Sustainable Agriculture",
      items: [
        "Providing training and organic input support to smallholder farmers transitioning from chemical fertilizers.",
        "Installing micro-irrigation systems (drip and sprinkler) to conserve agricultural groundwater.",
        "Establishing local organic seed banks and introducing native drought-resistant crop varieties."
      ]
    },
    {
      number: "03",
      title: "Carbon Footprint Reduction",
      items: [
        "Measuring methane extraction from large-scale municipal composting units.",
        "Offsetting greenhouse gas emissions by generating bio-coal from agricultural crop residue.",
        "Calculating product life-cycle emissions and carbon avoidance offsets for circular supply chains."
      ]
    },
    {
      number: "04",
      title: "Resource Efficiency and Sustainable Consumption",
      items: [
        "Conducting zero-waste audits for industrial manufacturing units, prioritizing raw material reduction.",
        "Developing upcycling protocols to transform manufacturing byproducts into commercial items.",
        "Educating local consumers on eco-packaging, composting, and reduced single-use plastic consumption."
      ]
    }
  ];

  return (
    <div className="relative pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-amber-50/10 dark:bg-amber-950/10 -z-10" />

      <BackToMissionsLink />

      {/* Hero Section */}
      <PathwayHeroBanner
        pathwayLabel="PATHWAY 02 — CIRCULAR"
        labelClass="text-amber-700 dark:text-amber-400"
        title="Waste Diversion"
        description="Community sorting hubs and industrial partnerships turn landfill-bound waste into materials that feed back into production."
      />
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
          Our PABT Circular pathway is focused on designing waste out of systems. We establish community sorting hubs, transition farms to sustainable bio-inputs, and coordinate industrial clusters to feed byproducts back into active production loops.
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
              themeColor="circular"
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
              Transitioning to a circular economy requires local systems. Explore our specific program areas, which are eligible for CSR funding.
            </p>
          </div>
          <div className="lg:col-span-8">
            {programAreas.map((area, idx) => (
              <Accordion
                key={idx}
                number={area.number}
                title={area.title}
                items={area.items}
                themeColor="circular"
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
          Flagship Circular Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-amber-700 dark:text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                PROJECT 01
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Zero-Waste Textile Cluster</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Rerouting massive fabric offcuts and cotton waste back into recycling mills in Tiruppur. We collaborate with local garment manufacturers to create a closed-loop supply chain.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Location: Tiruppur, Tamil Nadu</span>
              <span>18K Tonnes Waste Rerouted</span>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-amber-700 dark:text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                PROJECT 02
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Farming Bio-Input Hubs</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Establishing rural bio-input hubs where organic manure and biopesticides are prepared using cow dung, urine, and farm organic waste, replacing chemical imports.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Location: Karnataka & Andhra Pradesh</span>
              <span>1.2K Farms Managed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
