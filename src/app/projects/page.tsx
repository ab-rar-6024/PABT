import { CalendarRange, ShieldCheck, ClipboardCheck, MapPin, Users } from "lucide-react";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkewCards, { type GradientCard } from "@/components/ui/gradient-card-showcase";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

export const metadata = {
  title: "Projects | PABT Foundation",
  description: "Flagship projects across PABT Foundation's five pathways: Nature, Circularity, Clean Energy, ESG, and Community.",
};

export default function ProjectsPage() {
  const highlights: GradientCard[] = [
    {
      title: "Aravalli Green Belt",
      desc: "1.2M native saplings restoring 3,400 hectares of degraded ridge across Rajasthan.",
      gradientFrom: "#16A34A",
      gradientTo: "#0D9488",
      href: "/nature",
      cta: "Explore Nature",
    },
    {
      title: "Zero-Waste Textile Cluster",
      desc: "18K tonnes of fabric waste rerouted into a closed-loop supply chain in Tiruppur.",
      gradientFrom: "#F59E0B",
      gradientTo: "#DC2626",
      href: "/circular",
      cta: "Explore Circular",
    },
    {
      title: "Solar Villages Initiative",
      desc: "42 off-grid Ladakh villages electrified by community solar micro-grids.",
      gradientFrom: "#06B6D4",
      gradientTo: "#6366F1",
      href: "/future",
      cta: "Explore Future",
    },
  ];

  const projects = [
    {
      domain: "Nature",
      accent: "text-green-700 dark:text-green-400",
      title: "Aravalli Green Belt",
      description: "Rejuvenating degraded ridge land across Rajasthan. We have restored over 3,400 hectares using native seeds and drought-resistant trees.",
      location: "Rajasthan, India",
      stat: "1.2M Native Saplings",
    },
    {
      domain: "Nature",
      accent: "text-green-700 dark:text-green-400",
      title: "Coastal Mangrove Revival",
      description: "Restoring natural bio-shields in the Sundarbans. We work with local women self-help groups to cultivate and plant saline-tolerant mangrove saplings.",
      location: "Sundarbans, West Bengal",
      stat: "100K Mangroves Planted",
    },
    {
      domain: "Circularity",
      accent: "text-amber-700 dark:text-amber-400",
      title: "Zero-Waste Textile Cluster",
      description: "Rerouting fabric offcuts and cotton waste back into recycling mills in Tiruppur through a closed-loop supply chain with local garment manufacturers.",
      location: "Tiruppur, Tamil Nadu",
      stat: "18K Tonnes Waste Rerouted",
    },
    {
      domain: "Circularity",
      accent: "text-amber-700 dark:text-amber-400",
      title: "Farming Bio-Input Hubs",
      description: "Rural bio-input hubs preparing organic manure and biopesticides from farm waste, replacing chemical imports for smallholder farmers.",
      location: "Karnataka & Andhra Pradesh",
      stat: "1.2K Farms Managed",
    },
    {
      domain: "Clean Energy",
      accent: "text-cyan-700 dark:text-cyan-400",
      title: "Solar Villages Initiative",
      description: "Off-grid solar micro-grids in high-altitude mountain hamlets of Ladakh, supplying clean power and reducing reliance on kerosene.",
      location: "Ladakh, India",
      stat: "42 Villages Electrified",
    },
    {
      domain: "Clean Energy",
      accent: "text-cyan-700 dark:text-cyan-400",
      title: "Solar EV Transit Hubs",
      description: "Municipal charging depots drawing power from overhead solar canopies, enabling zero-carbon commuting in semi-urban centers.",
      location: "Tamil Nadu & Karnataka",
      stat: "3.4M Green Km Powered",
    },
    {
      domain: "ESG & CSR",
      accent: "text-slate-700 dark:text-slate-400",
      title: "CSR ESG Transformation",
      description: "Verified sustainability strategies for manufacturing and logistics firms, building supply-chain frameworks aligned to BRSR.",
      location: "Pan-India",
      stat: "24 Enterprises Transformed",
    },
    {
      domain: "ESG & CSR",
      accent: "text-slate-700 dark:text-slate-400",
      title: "Supply Chain Greening",
      description: "Auditing small-to-medium suppliers to reduce raw material waste, enable rooftop solar adoption, and enforce ethical labor codes.",
      location: "Industrial Clusters (India)",
      stat: "150+ Suppliers Audited",
    },
    {
      domain: "Community",
      accent: "text-orange-700 dark:text-orange-400",
      title: "Green Schools Movement",
      description: "Mentoring schools to establish composting systems, waste classification, and student-led environment councils.",
      location: "Maharashtra, India",
      stat: "310 Schools Engaged",
    },
    {
      domain: "Community",
      accent: "text-orange-700 dark:text-orange-400",
      title: "Women Organic Nurseries",
      description: "Supporting women's self-help groups to build and manage community sapling nurseries, creating independent rural income.",
      location: "Tamil Nadu & Karnataka",
      stat: "120+ Micro-Enterprises",
    },
  ];

  // Foundation credibility highlights — distinct from the flagship project
  // highlights above and the full project list below, so nothing repeats.
  const bentoFeatures = [
    {
      Icon: CalendarRange,
      name: "20-Year Mission Roadmap",
      description: "A staged 2026–2046 plan carrying PABT from regional pilots to nationwide scale.",
      href: "/about",
      cta: "Our Story",
      glow: "bg-green-500/20",
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
    },
    {
      Icon: ShieldCheck,
      name: "12AA, 80G & CSR Certified",
      description: "Fully registered non-profit status with tax-exempt donations and MCA CSR eligibility.",
      href: "/contact",
      cta: "Partner With Us",
      glow: "bg-emerald-500/20",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: ClipboardCheck,
      name: "Independent Field Audits",
      description: "Third-party auditors verify every plantation and project before it's counted.",
      href: "/impact",
      cta: "See Methodology",
      glow: "bg-slate-500/20",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: MapPin,
      name: "Active in 8+ Indian States",
      description: "From Ladakh's solar villages to Sundarbans' mangroves, on the ground pan-India.",
      href: "/about",
      cta: "Where We Work",
      glow: "bg-orange-500/20",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Users,
      name: "Enterprises, Schools & Volunteers",
      description: "A working network of corporate partners, campuses and citizen volunteers.",
      href: "/community",
      cta: "Get Involved",
      glow: "bg-amber-500/20",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <div className="relative pb-24">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block animate-float">
          Projects
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
          Flagship Projects, Ground Up
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Ten active projects across five pathways — each one designed with the local community it serves, and tracked against a public set of targets.
        </p>
      </section>

      <section className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-16">
            <span className="text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block">
              Flagship Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Three Pathways, One Movement
            </h2>
          </div>
          <SkewCards cards={highlights} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100 dark:border-gray-900">
        <ProjectsGrid projects={projects} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100 dark:border-gray-900">
        <div className="text-center mb-10">
          <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block">
            Why Trust PABT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            The Foundation Behind the Projects
          </h2>
        </div>
        <BentoGrid className="lg:grid-rows-3">
          {bentoFeatures.map((feature) => (
            <BentoCard
              key={feature.name}
              Icon={feature.Icon}
              name={feature.name}
              description={feature.description}
              href={feature.href}
              cta={feature.cta}
              className={feature.className}
              background={
                <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl ${feature.glow}`} />
              }
            />
          ))}
        </BentoGrid>
      </section>
    </div>
  );
}
