"use client";

import CleanEnergyPage from "@/components/CleanEnergyPage";

export default function FuturePage() {
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

  const projects = [
    {
      "title": "Solar Villages Initiative",
      "description": "Deploying off-grid solar micro-grids in high-altitude mountain hamlets of Ladakh. We supply clean power to local families, reducing carbon output and reliance on kerosene.",
      "location": "Ladakh, India",
      "stat": "42 Villages Electrified"
    },
    {
      "title": "Solar EV Transit Hubs",
      "description": "Constructing municipal charging depots that draw energy from overhead solar canopies, enabling zero-carbon taxi and auto commuting in semi-urban centers.",
      "location": "Tamil Nadu & Karnataka",
      "stat": "3.4M Green Km Powered"
    }
  ];

  return (
    <CleanEnergyPage
      label="PATHWAY 03 — FUTURE"
      title="Clean Energy"
      description="Solar micro-grids and EV charging nodes bring reliable, renewable power to off-grid Himalayan communities."
      intro="Our PABT Future pathway addresses the energy transition. We bring solar micro-grids to off-grid Himalayan settlements, build solar EV charging nodes, and fund innovative climate technologies tailored to local conditions."
      metrics={metrics}
      areas={programAreas}
      areasBlurb="Clean energy is the foundation of mitigation and community safety. Discover our programmatic focus areas, ready for corporate CSR implementation."
      projectsHeading="Flagship Future Projects"
      projects={projects}
    />
  );
}
