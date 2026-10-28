"use client";

import PathwayHeroBanner from "@/components/PathwayHeroBanner";
import { PathwayMetrics, PathwayPrograms, PathwayProjects } from "@/components/PathwayLayouts";

export default function CommunityPage() {
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

  const projects = [
    {
      "title": "Green Schools Movement",
      "description": "Mentoring schools across Maharashtra to establish physical composting systems, waste classification, and student environment councils.",
      "location": "Maharashtra, India",
      "stat": "310 Schools Engaged"
    },
    {
      "title": "Women Organic Nurseries",
      "description": "Supporting women's self-help groups (SHGs) to construct and manage community sapling nurseries, providing independent rural income.",
      "location": "Tamil Nadu & Karnataka",
      "stat": "120+ Micro-Enterprises"
    }
  ];

  return (
    <div className="relative pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-orange-50/10 dark:bg-orange-950/10 -z-10" />


      {/* Hero Section */}
      <PathwayHeroBanner
        theme="community"
        pathwayLabel="PATHWAY 05 — COMMUNITY"
        labelClass="text-orange-700 dark:text-orange-400"
        title="Mobilizing People for Planet"
        description="Our PABT Community pathway is built on the belief that long-term sustainability requires citizen ownership. We organize campus eco-clubs, run climate literacy courses, support women-led organic nurseries, and structure volunteer-driven field campaigns."
        imageUrl="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Group of community members smiling together"
      />

      <PathwayMetrics theme="community" metrics={metrics} />

      <PathwayPrograms
        theme="community"
        areas={programAreas}
        blurb="We connect institutions, corporate teams, and rural groups. Explore our specific program areas eligible for CSR collaboration."
      />

      <PathwayProjects theme="community" heading="Flagship Community Projects" projects={projects} />
    </div>
  );
}
