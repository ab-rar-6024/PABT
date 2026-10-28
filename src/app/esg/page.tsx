"use client";

import PathwayHeroBanner from "@/components/PathwayHeroBanner";
import { PathwayMetrics, PathwayPrograms, PathwayProjects } from "@/components/PathwayLayouts";

export default function EsgPage() {
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

  const projects = [
    {
      "title": "CSR ESG Transformation",
      "description": "Implementing verified and audited sustainability strategies for manufacturing and logistics firms. We build supply-chain frameworks that decrease carbon intensity and align to BRSR.",
      "location": "Pan-India",
      "stat": "24 Enterprises Transformed"
    },
    {
      "title": "Supply Chain Greening",
      "description": "Auditing over 150 small-to-medium suppliers to reduce raw material waste, implement rooftop solar panels, and enforce ethical labor codes.",
      "location": "Industrial Clusters (India)",
      "stat": "150+ Suppliers Audited"
    }
  ];

  return (
    <div className="relative pb-6">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-indigo-50/60 dark:bg-indigo-950/20 -z-10" />


      {/* Hero Section */}
      <PathwayHeroBanner
        theme="esg"
        pathwayLabel="PATHWAY 04 — ESG & CSR"
        labelClass="text-indigo-700 dark:text-indigo-400"
        title="Empowering Responsible Business"
        description="Our PABT ESG pathway supports enterprise transition. We combine compliance expertise with practical field programs, helping large listed entities and medium enterprises meet BRSR, carbon reduction targets, and CSR goals."
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Business partners shaking hands"
      />

      <PathwayMetrics theme="esg" metrics={metrics} />

      <PathwayPrograms
        theme="esg"
        areas={programAreas}
        blurb="We cover the entire spectrum of corporate responsibility. Explore our seven specific program domains below."
      />

      <PathwayProjects theme="esg" heading="Flagship ESG Projects" projects={projects} />
    </div>
  );
}
