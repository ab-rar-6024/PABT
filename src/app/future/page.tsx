"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";
import MetricCard from "@/components/MetricCard";
import ScrollReveal from "@/components/ScrollReveal";
import BackToMissionsLink from "@/components/BackToMissionsLink";
import PathwayHeroBanner from "@/components/PathwayHeroBanner";

export default function FuturePage() {
  const [openAreaIndex, setOpenAreaIndex] = useState<number | null>(null);
  const metrics = [
    { value: "42", label: "Off-Grid Villages Powered", sublabel: "Solar micro-grids in high-altitude Ladakh villages." },
    { value: "3.4M+", label: "EV Km Enabled", sublabel: "EV charging infrastructure powered by solar." },
    { value: "46", label: "Climate Tech Pilots", sublabel: "Innovations backed to resolve local climate adaptation." },
  ];

  const programAreas = [
    {
      number: "01",
      title: "Renewable Energy Awareness and Adoption",
      items: [
        "Deploying solar micro-grids in remote, off-grid villages where traditional grid access is impossible.",
        "Installing solar-powered street lighting and community lanterns to increase night safety.",
        "Equipping schools, local community halls, and health clinics with robust solar rooftop batteries."
      ]
    },
    {
      number: "02",
      title: "Green Mobility and Clean Transportation",
      items: [
        "Deploying public solar-powered EV charging stations along regional corridors.",
        "Collaborating with municipalities to integrate electric auto-rickshaws and solar e-shuttles.",
        "Replacing high-emission diesel farming pumps with clean, solar-powered water pumps."
      ]
    },
    {
      number: "03",
      title: "Green Innovation and Climate Technology",
      items: [
        "Backing early-stage climate tech startups developing low-cost clean cooking options.",
        "Testing advanced biochar and local water filtration systems in rural agricultural clusters.",
        "Funding research on scalable, low-carbon building materials using industrial and agricultural byproducts."
      ]
    },
    {
      number: "04",
      title: "Climate Resilience and Adaptation",
      items: [
        "Setting up low-cost micro-weather stations to provide early warnings to farmers.",
        "Constructing check dams and artificial glaciers (ice stupas) to secure spring-season water.",
        "Designing local community disaster-preparedness plans for landslide and flood-prone regions."
      ]
    }
  ];

  return (
    <div className="relative pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-cyan-50/10 dark:bg-cyan-950/10 -z-10" />

      <BackToMissionsLink />

      {/* Hero Section */}
      <PathwayHeroBanner
        pathwayLabel="PATHWAY 03 — FUTURE"
        labelClass="text-cyan-700 dark:text-cyan-400"
        title="Clean Energy"
        description="Solar micro-grids and EV charging nodes bring reliable, renewable power to off-grid Himalayan communities."
        imageUrl="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Field of solar panels under a blue sky"
      />
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <ScrollReveal>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            Our PABT Future pathway addresses the energy transition. We bring solar micro-grids to off-grid Himalayan settlements, build solar EV charging nodes, and fund innovative climate technologies tailored to local conditions.
          </p>
        </ScrollReveal>
      </section>

      {/* Metrics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <MetricCard
                value={m.value}
                label={m.label}
                sublabel={m.sublabel}
                themeColor="future"
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Program Areas Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ScrollReveal className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our Core Program Areas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Clean energy is the foundation of mitigation and community safety. Discover our programmatic focus areas, ready for corporate CSR implementation.
            </p>
          </ScrollReveal>
          <div className="lg:col-span-8">
            {programAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <Accordion
                  number={area.number}
                  title={area.title}
                  items={area.items}
                  themeColor="future"
                  isOpen={openAreaIndex === idx}
                  onToggle={() => setOpenAreaIndex(openAreaIndex === idx ? null : idx)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
            Flagship Future Projects
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-cyan-700 dark:text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
                  PROJECT 01
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solar Villages Initiative</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Deploying off-grid solar micro-grids in high-altitude mountain hamlets of Ladakh. We supply clean power to local families, reducing carbon output and reliance on kerosene.
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>Location: Ladakh, India</span>
                <span>42 Villages Electrified</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-cyan-700 dark:text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold">
                  PROJECT 02
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solar EV Transit Hubs</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Constructing municipal charging depots that draw energy from overhead solar canopies, enabling zero-carbon taxi and auto commuting in semi-urban centers.
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>Location: Tamil Nadu & Karnataka</span>
                <span>3.4M Green Km Powered</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
