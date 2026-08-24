"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";
import MetricCard from "@/components/MetricCard";
import ScrollReveal from "@/components/ScrollReveal";
import BackToMissionsLink from "@/components/BackToMissionsLink";
import PathwayHeroBanner from "@/components/PathwayHeroBanner";

export default function EsgPage() {
  const [openAreaIndex, setOpenAreaIndex] = useState<number | null>(null);
  const metrics = [
    { value: "74", label: "Enterprise Partners", sublabel: "Corporates transitioning to verified sustainable operations." },
    { value: "210+", label: "Sustainability Audits", sublabel: "Water, waste, and energy audits conducted." },
    { value: "96", label: "Disclosure Reports Filed", sublabel: "Aligned to BRSR, GRI, and global standards." },
  ];

  const programAreas = [
    {
      number: "01",
      title: "Corporate ESG Strategy",
      items: [
        "Conducting materiality assessments to identify critical environmental and social risks.",
        "Developing ESG compliance roadmaps aligned with national and international expectations.",
        "Establishing internal dashboards to track sustainability metrics and KPI progress."
      ]
    },
    {
      number: "02",
      title: "Corporate CSR Program Design",
      items: [
        "Designing high-impact CSR projects that comply with India's Section 135 regulations.",
        "Coordinating and implementing multi-year field programs with full transparency.",
        "Providing detailed, verified quarterly reports with photo evidence and geolocations."
      ]
    },
    {
      number: "03",
      title: "Sustainability Audits",
      items: [
        "Conducting comprehensive water audits to map intake, usage, and recycling opportunities.",
        "Performing zero-waste-to-landfill audits to evaluate and restructure corporate waste handling.",
        "Carrying out energy audits to identify efficiency leakages and scope for solar transition."
      ]
    },
    {
      number: "04",
      title: "ESG Reporting and Disclosure Support",
      items: [
        "Drafting Business Responsibility and Sustainability Reports (BRSR) for listed entities.",
        "Structuring sustainability reports according to Global Reporting Initiative (GRI) standards.",
        "Assisting with Carbon Disclosure Project (CDP) and TCFD compliance submissions."
      ]
    },
    {
      number: "05",
      title: "Certifications and Standards Support",
      items: [
        "Helping facilities achieve ISO 14001 (Environmental Management System) certification.",
        "Guiding buildings and warehouses to meet LEED green building certification standards.",
        "Facilitating independent zero-waste-to-landfill validation for manufacturing facilities."
      ]
    },
    {
      number: "06",
      title: "Employee Sustainability and Engagement",
      items: [
        "Conducting corporate carbon literacy and climate action training modules.",
        "Developing green workplace campaigns (zero single-use plastics, digital waste reduction).",
        "Facilitating local tree-planting and coastal cleanup volunteer outings for corporate teams."
      ]
    },
    {
      number: "07",
      title: "Responsible Supply Chains",
      items: [
        "Formulating sustainable procurement guidelines and vendor code of conduct policies.",
        "Performing environmental and social compliance audits on Tier-1 and Tier-2 suppliers.",
        "Training value chain partners on carbon mapping and waste circularity methods."
      ]
    }
  ];

  return (
    <div className="relative pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-slate-900/10 -z-10" />

      <BackToMissionsLink />

      {/* Hero Section */}
      <PathwayHeroBanner
        pathwayLabel="PATHWAY 04 — ESG & CSR"
        labelClass="text-slate-700 dark:text-slate-400"
        title="Empowering Responsible Business"
        description="Our PABT ESG pathway supports enterprise transition. We combine compliance expertise with practical field programs, helping large listed entities and medium enterprises meet BRSR, carbon reduction targets, and CSR goals."
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Business partners shaking hands"
      />

      {/* Metrics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 dark:border-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <MetricCard
                value={m.value}
                label={m.label}
                sublabel={m.sublabel}
                themeColor="esg"
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
              We cover the entire spectrum of corporate responsibility. Explore our seven specific program domains below.
            </p>
          </ScrollReveal>
          <div className="lg:col-span-8">
            {programAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 60}>
                <Accordion
                  number={area.number}
                  title={area.title}
                  items={area.items}
                  themeColor="esg"
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
            Flagship ESG Projects
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-slate-700 dark:text-slate-400 font-mono text-xs uppercase tracking-widest font-bold">
                  PROJECT 01
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">CSR ESG Transformation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Implementing verified and audited sustainability strategies for manufacturing and logistics firms. We build supply-chain frameworks that decrease carbon intensity and align to BRSR.
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>Location: Pan-India</span>
                <span>24 Enterprises Transformed</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-slate-700 dark:text-slate-400 font-mono text-xs uppercase tracking-widest font-bold">
                  PROJECT 02
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Supply Chain Greening</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Auditing over 150 small-to-medium suppliers to reduce raw material waste, implement rooftop solar panels, and enforce ethical labor codes.
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>Location: Industrial Clusters (India)</span>
                <span>150+ Suppliers Audited</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
