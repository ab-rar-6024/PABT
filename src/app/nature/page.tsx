"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";
import MetricCard from "@/components/MetricCard";
import ScrollReveal from "@/components/ScrollReveal";
import BackToMissionsLink from "@/components/BackToMissionsLink";
import PathwayHeroBanner from "@/components/PathwayHeroBanner";

export default function NaturePage() {
  const [openAreaIndex, setOpenAreaIndex] = useState<number | null>(null);
  const metrics = [
    { value: "1.2M+", label: "Trees Planted", sublabel: "Native forests across Rajasthan & Sundarbans." },
    { value: "128", label: "Water Bodies Restored", sublabel: "Lakes, ponds, and local community wetlands." },
    { value: "87%", label: "Sapling Survival", sublabel: "Verified through regular field audits." },
  ];

  const plantingSpecies = [
    {
      name: "Neem",
      benefit: "Oxygen Booster",
      description: "An evergreen native known for purifying the air and its long history in natural pest control and traditional medicine.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ganuga",
      benefit: "Cool Air",
      description: "A fast-growing, nitrogen-fixing species with a dense canopy that keeps surrounding soil and air noticeably cooler.",
      image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Kadamba",
      benefit: "Shade",
      description: "A large, fast-growing canopy tree prized for the wide, dense shade it casts and its fragrant round flowers.",
      image: "https://images.unsplash.com/photo-1743065513116-b1c96b2f13ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Gulmohar",
      benefit: "Bushy & Flowering",
      description: "The flame tree — known for its brilliant red-orange blossoms that blanket the canopy through summer.",
      image: "https://images.unsplash.com/photo-1698106284980-fc3adbe1df83?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Peltophorum",
      benefit: "Bushy & Flowering",
      description: "The yellow flame tree, valued as a bushy avenue species with bright golden flower clusters.",
      image: "https://images.unsplash.com/photo-1589595243873-71a69df237ca?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Tabebuia Rosea",
      benefit: "Bushy & Flowering",
      description: "The pink trumpet tree — its canopy turns a striking pink-lavender when in full bloom.",
      image: "https://images.unsplash.com/photo-1773632653609-948bd423e5c1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Begnonea Megapotamica",
      benefit: "Bushy & Flowering",
      description: "A vigorous, bushy flowering species with trumpet-shaped blooms that draw pollinators year-round.",
      image: "https://images.unsplash.com/photo-1679764299543-d2708093fbd1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mahogany",
      benefit: "Bushy & Wood",
      description: "A tall, straight-trunked hardwood species valued for long-term timber and dense, durable wood.",
      image: "https://images.unsplash.com/photo-1664882339455-2816565628c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Millingtonea",
      benefit: "Bushy & Flowering",
      description: "The Indian cork tree — tall and fast-growing, with fragrant white flowers that bloom in the cool season.",
      image: "https://images.unsplash.com/photo-1568502748971-9ef19c722767?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mango Mix",
      benefit: "Fruit & Bushy",
      description: "A mix of grafted mango varieties chosen for reliable fruiting alongside a full, bushy shade canopy.",
      image: "https://images.unsplash.com/photo-1732472581875-89ff83f18439?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const programAreas = [
    {
      number: "01",
      title: "Tree Plantation and Forest Restoration",
      items: [
        "Deploying Miyawaki ultra-dense native forests to restore biodiversity quickly.",
        "Developing agroforestry programs with local farmers to integrate cash crops with native tree buffers.",
        "Implementing digital monitoring, drone tracking, and soil moisture sensors to ensure long-term sapling survival."
      ]
    },
    {
      number: "02",
      title: "Water Conservation and Lake Restoration",
      items: [
        "Desilting and widening degraded local lakes and municipal ponds.",
        "Rejuvenating natural drainage channels to prevent urban flash flooding.",
        "Establishing local Water User Associations (WUAs) to maintain decentralized watersheds."
      ]
    },
    {
      number: "03",
      title: "Biodiversity and Wildlife Conservation",
      items: [
        "Establishing native seed banks to protect indigenous flora and endangered plant species.",
        "Re-establishing natural wildlife corridors and ecological buffers in agricultural clusters.",
        "Implementing community-led monitoring systems to catalog insects, birds, and soil micro-organisms."
      ]
    },
    {
      number: "04",
      title: "Ocean, River and Coastal Cleanup",
      items: [
        "Restoring saline-tolerant coastal mangrove buffers in high-cyclone regions (Sundarbans).",
        "Conducting community-led waste extraction drives at river mouths and estuaries.",
        "Deploying local river filters and floating booms to block plastic ingress into coastal areas."
      ]
    }
  ];

  return (
    <div className="relative pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-green-50/20 dark:bg-green-950/20 -z-10" />

      <BackToMissionsLink />

      {/* Hero Section */}
      <PathwayHeroBanner
        pathwayLabel="PATHWAY 01 — NATURE"
        labelClass="text-green-700 dark:text-green-400"
        title="Plant A Billion Trees"
        description="One sapling at a time, we're restoring degraded landscapes, reviving soil and water, and rebuilding biodiversity across India."
      />
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
          Our PABT Nature pathway focuses on combatting biodiversity loss, replenishing water basins, and planting a billion native trees. We combine traditional ecological knowledge with modern digital sensors to ensure that restoration results in permanent, thriving forests.
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
              themeColor="nature"
            />
          ))}
        </div>
      </section>

      {/* What We Are Planting */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          <ScrollReveal>
            <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block">
              Our Species
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-5">
              What We Are Planting
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              We drive a mission to plant a billion trees across India — the country&apos;s biggest solutionary movement, prioritizing trees over ordinary plants. Our goal is to bring an initiative that helps secure enough food for our country and provides cool shade wherever humidity persists.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
              <img
                src="https://pabt.in/wp-content/uploads/2023/06/what-we-are-planting.png"
                alt="What PABT is planting"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantingSpecies.map((species, i) => (
            <ScrollReveal key={species.name} delay={(i % 3) * 90}>
              <div className="glass-panel rounded-2xl border border-green-900/30 hover:border-green-500/40 transition-colors overflow-hidden h-full flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={species.image}
                    alt={species.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-gray-900 dark:text-white font-bold text-base mb-2">{species.name}</h3>
                  <span className="inline-block w-fit px-2.5 py-1 rounded-full bg-green-50/50 dark:bg-green-950/50 text-green-700 dark:text-green-400 text-[11px] font-semibold uppercase tracking-wide mb-3">
                    {species.benefit}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{species.description}</p>
                </div>
              </div>
            </ScrollReveal>
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
              Our ecological framework addresses the landscape level. We expand below the details of each action, which are fully customizable for CSR allocations.
            </p>
          </div>
          <div className="lg:col-span-8">
            {programAreas.map((area, idx) => (
              <Accordion
                key={idx}
                number={area.number}
                title={area.title}
                items={area.items}
                themeColor="nature"
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
          Flagship Nature Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold">
                PROJECT 01
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Aravalli Green Belt</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Rejuvenating degraded ridge land across Rajasthan. We have restored over 3,400 hectares using native seeds and drought-resistant trees.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Location: Rajasthan, India</span>
              <span>1.2M Native Saplings</span>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold">
                PROJECT 02
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Coastal Mangrove Revival</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Restoring natural bio-shields in the Sundarbans. We work with local women self-help groups to cultivate and plant saline-tolerant mangrove saplings.
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>Location: Sundarbans, West Bengal</span>
              <span>100K Mangroves Planted</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
