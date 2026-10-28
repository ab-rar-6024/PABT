"use client";

import PathwayHeroBanner from "@/components/PathwayHeroBanner";
import { PathwayMetrics, PathwayPrograms, PathwayProjects } from "@/components/PathwayLayouts";

export default function CircularPage() {
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

  const projects = [
    {
      "title": "Zero-Waste Textile Cluster",
      "description": "Rerouting massive fabric offcuts and cotton waste back into recycling mills in Tiruppur. We collaborate with local garment manufacturers to create a closed-loop supply chain.",
      "location": "Tiruppur, Tamil Nadu",
      "stat": "18K Tonnes Waste Rerouted"
    },
    {
      "title": "Farming Bio-Input Hubs",
      "description": "Establishing rural bio-input hubs where organic manure and biopesticides are prepared using cow dung, urine, and farm organic waste, replacing chemical imports.",
      "location": "Karnataka & Andhra Pradesh",
      "stat": "1.2K Farms Managed"
    }
  ];

  return (
    <div className="relative pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-amber-50/10 dark:bg-amber-950/10 -z-10" />


      {/* Hero Section */}
      <PathwayHeroBanner
        theme="circular"
        pathwayLabel="PATHWAY 02 — CIRCULAR"
        labelClass="text-amber-700 dark:text-amber-400"
        title="Waste Diversion"
        description="Community sorting hubs and industrial partnerships turn landfill-bound waste into materials that feed back into production."
        intro="Our PABT Circular pathway is focused on designing waste out of systems. We establish community sorting hubs, transition farms to sustainable bio-inputs, and coordinate industrial clusters to feed byproducts back into active production loops."
        imageUrl="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Color-coded compost, waste, and recycling bins"
      />

      <PathwayMetrics theme="circular" metrics={metrics} />

      <PathwayPrograms
        theme="circular"
        areas={programAreas}
        blurb="Transitioning to a circular economy requires local systems. Explore our specific program areas, which are eligible for CSR funding."
      />

      <PathwayProjects theme="circular" heading="Flagship Circular Projects" projects={projects} />
    </div>
  );
}
