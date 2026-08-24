"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MetricCard from "@/components/MetricCard";
import StatCounter from "@/components/StatCounter";
import AutoTestimonialCarousel from "@/components/AutoTestimonialCarousel";
import SectionWatermark from "@/components/SectionWatermark";
import HeroFrameScroll from "@/components/HeroFrameScroll";
import AboutTeaser from "@/components/AboutTeaser";
import { TreePine, Sprout, Droplets, Recycle, Wind, GraduationCap, Users, Building2 } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [activePartnerTab, setActivePartnerTab] = useState("corporate");
  const partnerPanelRef = useRef<HTMLDivElement>(null);
  const [revealOrigin, setRevealOrigin] = useState({ x: 50, y: 0 });
  const [burstKey, setBurstKey] = useState(0);

  const selectPartnerTab = (key: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e && partnerPanelRef.current) {
      const panelRect = partnerPanelRef.current.getBoundingClientRect();
      const btnRect = e.currentTarget.getBoundingClientRect();
      const originX = btnRect.left + btnRect.width / 2;
      const originY = btnRect.bottom;
      const xPct = panelRect.width > 0 ? ((originX - panelRect.left) / panelRect.width) * 100 : 50;
      const yPct = panelRect.height > 0 ? ((originY - panelRect.top) / panelRect.height) * 100 : 0;
      setRevealOrigin({
        x: Math.max(0, Math.min(100, xPct)),
        y: Math.max(0, Math.min(100, yPct)),
      });
    }
    setActivePartnerTab(key);
    setBurstKey((k) => k + 1);
  };
  const [virtualTarget, setVirtualTarget] = useState(0);
  const [activeProgress, setActiveProgress] = useState(0);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const domains = [
    {
      name: "Plant A Billion Trees",
      pathway: "PABT Nature",
      description: "Restoring forests, water bodies, biodiversity and natural ecosystems.",
      bgClass: "from-green-950/40 to-green-950/20 hover:border-green-500/40",
      accent: "text-green-700 dark:text-green-400",
      btnClass: "bg-green-600 hover:bg-green-500",
      image: "/nature_hero.png",
      href: "/nature",
    },
    {
      name: "Preserve All By Transforming",
      pathway: "PABT Circular",
      description: "Transforming waste, resources and production into circular models.",
      bgClass: "from-amber-950/40 to-orange-950/20 hover:border-amber-500/40",
      accent: "text-amber-700 dark:text-amber-400",
      btnClass: "bg-amber-600 hover:bg-amber-500",
      image: "/circular_hero.png",
      href: "/circular",
    },
    {
      name: "Powering A Brighter Tomorrow",
      pathway: "PABT Future",
      description: "Advancing clean energy, green mobility and climate innovation.",
      bgClass: "from-cyan-950/40 to-blue-950/20 hover:border-cyan-500/40",
      accent: "text-cyan-700 dark:text-cyan-400",
      btnClass: "bg-cyan-600 hover:bg-cyan-500",
      image: "/future_hero.png",
      href: "/future",
    },
    {
      name: "Partners Advancing Better Tomorrow",
      pathway: "PABT ESG",
      description: "Helping businesses build measurable, responsible operations.",
      bgClass: "from-slate-950/40 to-zinc-950/20 hover:border-slate-500/40",
      accent: "text-slate-700 dark:text-slate-400",
      btnClass: "bg-slate-600 hover:bg-slate-500",
      image: "/esg_hero.png",
      href: "/esg",
    },
    {
      name: "People And Businesses Together",
      pathway: "PABT Community",
      description: "Connecting communities, institutions and businesses for inclusive growth.",
      bgClass: "from-orange-950/40 to-red-950/20 hover:border-orange-500/40",
      accent: "text-orange-700 dark:text-orange-400",
      btnClass: "bg-orange-600 hover:bg-orange-500",
      image: "/community_hero.png",
      href: "/community",
    },
  ];

  // Smooth lerp loop running on requestAnimationFrame — stops once settled instead of looping forever
  useEffect(() => {
    let animFrame: number;
    const update = () => {
      let settled = false;
      setActiveProgress((prev) => {
        const diff = virtualTarget - prev;
        if (Math.abs(diff) < 0.001) {
          settled = true;
          return virtualTarget;
        }
        return prev + diff * 0.12; // Easing speed
      });
      if (!settled) {
        animFrame = requestAnimationFrame(update);
      }
    };
    animFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrame);
  }, [virtualTarget]);

  const activeDomainIndex = ((Math.round(activeProgress) % 5) + 5) % 5;

  const impactStats = [
    { target: 42.8, decimals: 1, suffix: "M+", label: "Trees Planted", bar: "bg-green-500", icon: TreePine },
    { target: 87, decimals: 0, suffix: "%", label: "Saplings Surviving", bar: "bg-green-500", icon: Sprout },
    { target: 128, decimals: 0, suffix: "", label: "Water Bodies Restored", bar: "bg-green-500", icon: Droplets },
    { target: 96.5, decimals: 1, suffix: "K+", label: "Waste Diverted (Tonnes)", bar: "bg-amber-500", icon: Recycle },
    { target: 210, decimals: 0, suffix: "K+", label: "Carbon Avoided (Tonnes)", bar: "bg-amber-500", icon: Wind },
    { target: 620, decimals: 0, suffix: "+", label: "Schools Engaged", bar: "bg-orange-500", icon: GraduationCap },
    { target: 1.9, decimals: 1, suffix: "K+", label: "Communities Reached", bar: "bg-orange-500", icon: Users },
    { target: 74, decimals: 0, suffix: "", label: "Corporate Partners", bar: "bg-slate-500", icon: Building2 },
  ];

  useEffect(() => {
    const el = statsSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const flagshipProjects = [
    {
      badge: "NATURE",
      badgeClass: "bg-green-500 text-gray-900",
      location: "Rajasthan, India",
      title: "Aravalli Green Belt",
      description: "1.2M native trees across 3,400 hectares of degraded ridge.",
      image: "https://images.unsplash.com/photo-1774865847272-b6f322fe6303?auto=format&fit=crop&w=1200&q=80",
    },
    {
      badge: "CIRCULAR",
      badgeClass: "bg-orange-500 text-gray-900",
      location: "Tiruppur, India",
      title: "Zero-Waste Textile Cluster",
      description: "18,000 tonnes of textile waste rerouted into circular supply.",
      image: "https://images.unsplash.com/photo-1507434745378-235a6297156b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      badge: "FUTURE",
      badgeClass: "bg-cyan-400 text-gray-900",
      location: "Ladakh, India",
      title: "Solar Villages Initiative",
      description: "42 off-grid villages powered by community solar micro-grids.",
      image: "https://images.unsplash.com/photo-1757506417384-76c0439c97ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      badge: "ESG",
      badgeClass: "bg-purple-500 text-gray-900",
      location: "Pan-India",
      title: "CSR ESG Transformation",
      description: "24 enterprises moved to audited, disclosed ESG programs.",
      image: "https://images.unsplash.com/photo-1731458769726-cef60c792665?auto=format&fit=crop&w=1200&q=80",
    },
    {
      badge: "COMMUNITY",
      badgeClass: "bg-yellow-400 text-gray-900",
      location: "Maharashtra, India",
      title: "Green Schools Movement",
      description: "310 schools with living labs and student climate councils.",
      image: "https://images.unsplash.com/photo-1658801956904-43841e89d831?auto=format&fit=crop&w=1200&q=80",
    },
    {
      badge: "NATURE",
      badgeClass: "bg-green-500 text-gray-900",
      location: "Sundarbans, India",
      title: "Coastal Mangrove Revival",
      description: "640 hectares of mangrove restored, protecting 40 villages.",
      image: "https://images.unsplash.com/photo-1529758597842-15d98e72705b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  useEffect(() => {
    const el = projectsSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProjectsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goToDomain = (targetIndex: number) => {
    const current = activeProgress;
    const currentVirtualRound = Math.round(current);
    const currentActual = ((currentVirtualRound % 5) + 5) % 5;
    
    let diff = targetIndex - currentActual;
    // Map diff to [-2, 2] for the shortest circular path
    if (diff > 2) diff -= 5;
    if (diff < -2) diff += 5;
    
    setVirtualTarget(currentVirtualRound + diff);
  };

  const partnerTabs = {
    corporate: {
      title: "Solutions for Corporate Partners",
      subtitle: "Execute high-impact CSR projects and build solid ESG compliance roadmaps.",
      points: [
        "Co-design audited afforestation & lake restoration CSR projects.",
        "Implement end-to-end employee volunteering programs with real field data.",
        "Access GRI/BRSR-aligned impact reporting and independent audits.",
        "Neutralize carbon footprints through verified biodiversity projects."
      ]
    },
    government: {
      title: "Solutions for Government Departments",
      subtitle: "Collaborate on public lake rejuvenation, watershed projects, and community forests.",
      points: [
        "Revive regional water basins and desilt community ponds.",
        "Establish large-scale agroforestry buffers and green belts.",
        "Enable green livelihood training for local rural communities.",
        "Provide scientific research on climate adaptation and soil conservation."
      ]
    },
    schools: {
      title: "Solutions for Schools & Colleges",
      subtitle: "Establish living labs and lead the next generation of climate action leaders.",
      points: [
        "Set up student climate councils and campus eco-clubs.",
        "Implement circular waste management & composting pilots on campuses.",
        "Access educational toolkits, climate literacy workshops, and site visits.",
        "Participate in national green campus rating certifications."
      ]
    },
    individuals: {
      title: "Solutions for Volunteers & Citizens",
      subtitle: "Contribute to tree plantations, submit impact testimonies, and clean up rivers.",
      points: [
        "Join weekend plantation drives and coastal cleanup campaigns.",
        "Share your first-hand community stories and raise green awareness.",
        "Run localized clean air & water audits in your urban neighborhoods.",
        "Acquire green skills through certified nature guide and recycling workshops."
      ]
    }
  };

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute top-[800px] right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse-slow -z-10" />

      {/* Hero Section — cinematic frame-by-frame scroll animation */}
      <HeroFrameScroll />

      {/* Subsequent Website Content Layer — slides upward over sticky final hero frame */}
      <div className="relative z-10 bg-[var(--background)] shadow-[0_-25px_60px_rgba(0,0,0,0.9)]">
        {/* Metric Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <MetricCard
            value="1.2M+"
            label="Trees Planted"
            sublabel="Native forest & mangrove survival tracking."
            themeColor="nature"
          />
          <MetricCard
            value="18K+"
            label="Tonnes Waste Diverted"
            sublabel="Zero-waste circular economy cluster."
            themeColor="circular"
          />
          <MetricCard
            value="87%"
            label="Sapling Survival"
            sublabel="Independently audited survival rate."
            themeColor="nature"
          />
          <MetricCard
            value="74"
            label="Corporate Partners"
            sublabel="Enterprises transitioning to ESG."
            themeColor="esg"
          />
        </div>
      </section>

      {/* About PABT Section */}
      <section id="about-section" className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100 dark:border-gray-900">
        <SectionWatermark text="ABOUT" />
        <AboutTeaser />
      </section>

      {/* Pathways Section */}
      <section id="pathways" className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 py-20 md:py-28 select-none border-t border-gray-100 dark:border-gray-900 bg-gradient-to-b from-transparent via-[var(--background)] to-transparent">
        {/* Pathways Grid Heading */}
        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Explore Our 5 Pathway Domains
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Click the cards or use the arrows to loop through each domain.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div
            className="relative w-full h-[340px] sm:h-[420px] md:h-[480px]"
            style={{
              "--spacing-x": "clamp(130px, 20vw, 260px)",
              "--spacing-y": "calc(var(--spacing-x) * 0.12)",
            } as React.CSSProperties}
          >
            {/* SVG Arc line drawn on top of cards & buttons (z-[160]) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-[160]"
              viewBox="0 0 1000 400"
              preserveAspectRatio="none"
            >
              <path
                d="M 60 300 Q 500 110 940 300"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            {domains.map((domain, i) => {
              // Circular offset math
              let offset = i - activeProgress;
              const halfN = domains.length / 2;
              while (offset < -halfN) offset += domains.length;
              while (offset > halfN) offset -= domains.length;

              const abs = Math.abs(offset);
              const scale = Math.max(1 - abs * 0.22, 0.55);
              const blurPx = Math.min(abs * 4, 8);
              const opacity = Math.max(1 - abs * 0.35, 0);
              const rotateDeg = offset * 12;
              const zIndex = Math.round(100 - abs * 10);

              return (
                <button
                  key={domain.name}
                  onClick={() => (abs < 0.5 ? router.push(domain.href) : goToDomain(i))}
                  aria-label={abs < 0.5 ? `Open ${domain.name} pathway page` : `Show ${domain.name} pathway`}
                  className="absolute left-1/2 top-[51.25%] w-44 h-60 sm:w-56 sm:h-72 md:w-64 md:h-[340px] rounded-3xl overflow-hidden border border-gray-200/80 dark:border-gray-800/80 shadow-2xl cursor-pointer"
                  style={{
                    transform: `translate(calc(-50% + ${offset} * var(--spacing-x)), calc(-50% + ${offset * offset} * var(--spacing-y))) scale(${scale}) rotate(${rotateDeg}deg)`,
                    filter: `blur(${blurPx}px)`,
                    opacity,
                    zIndex,
                    pointerEvents: abs > 1.1 ? "none" : "auto",
                  }}
                >
                  <img src={domain.image} alt={domain.name} className="w-full h-full object-cover" />
                </button>
              );
            })}

            {/* Navigation Buttons — parked past the pointer-events cutoff (abs > 1.1) so they never share a hit-box with a card */}
            <button
              onClick={() => goToDomain((activeDomainIndex - 1 + 5) % 5)}
              aria-label="Previous pathway"
              className="hidden sm:flex absolute left-1/2 top-[51.25%] z-[150] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5F6F1] text-gray-900 shadow-xl items-center justify-center hover:bg-white active:scale-95 transition-colors duration-300 cursor-pointer"
              style={{
                transform: "translate(calc(-50% - 1.35 * var(--spacing-x)), calc(-50% + 1.82 * var(--spacing-y)))",
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 5L5 19M5 19h10M5 19V9"></path>
              </svg>
            </button>

            <button
              onClick={() => goToDomain((activeDomainIndex + 1) % 5)}
              aria-label="Next pathway"
              className="hidden sm:flex absolute left-1/2 top-[51.25%] z-[150] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5F6F1] text-gray-900 shadow-xl items-center justify-center hover:bg-white active:scale-95 transition-colors duration-300 cursor-pointer"
              style={{
                transform: "translate(calc(-50% + 1.35 * var(--spacing-x)), calc(-50% + 1.82 * var(--spacing-y)))",
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 5l14 14m0 0H9m10 0V9"></path>
              </svg>
            </button>
          </div>

          <div key={domains[activeDomainIndex].name} className="text-center max-w-xl mx-auto mt-8 animate-[fadeIn_0.4s_ease-out]">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider mb-2 block ${domains[activeDomainIndex].accent}`}>
              {domains[activeDomainIndex].pathway}
            </span>
            <h3
              className={`font-black tracking-[0.12em] text-gray-900 dark:text-white mb-4 uppercase font-sans leading-tight ${
                domains[activeDomainIndex].name === "Plant A Billion Trees"
                  ? "text-2xl sm:text-4xl"
                  : "text-3xl sm:text-5xl"
              }`}
            >
              {domains[activeDomainIndex].name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
              {domains[activeDomainIndex].description}
            </p>
            <Link
              href={domains[activeDomainIndex].href}
              className={`inline-block px-8 py-3 rounded-xl text-white font-bold text-sm tracking-wider transition-colors duration-300 ${domains[activeDomainIndex].btnClass}`}
            >
              VIEW PATHWAY DETAILS
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Impact Numbers */}
      <section ref={statsSectionRef} className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100 dark:border-gray-900">
        <SectionWatermark text="IMPACT" />

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/nature_hero_banner.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />

          <div className="relative z-10 px-6 sm:px-10 py-14 sm:py-16">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block">
                Verified Impact
              </span>
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed drop-shadow-md">
                Every number below is backed by project evidence and independent verification.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5 sm:gap-x-6">
              {impactStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                    statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-white/70 mb-3" strokeWidth={1.75} />
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                    <StatCounter
                      target={stat.target}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      animate={statsVisible}
                      duration={1400 + i * 120}
                    />
                  </div>
                  <span className={`w-6 h-0.5 rounded-full ${stat.bar} mb-2`} />
                  <div className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-wide drop-shadow">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section ref={projectsSectionRef} className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100 dark:border-gray-900">
        <SectionWatermark text="PROJECTS" />
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Flagship Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ground-level initiatives already delivering measurable results across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {flagshipProjects.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className={`group relative rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-800/80 bg-gray-50/60 dark:bg-gray-950/60 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-2xl ${
                projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${project.badgeClass}`}
                >
                  {project.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="text-gray-500 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-gray-100/60 dark:bg-gray-900/60 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 font-bold text-sm tracking-wider rounded-xl transition-all duration-300"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </section>

      {/* Solutions for Partners Section */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100 dark:border-gray-900">
        <SectionWatermark text="PARTNERS" />
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Solutions For Our Partners
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            We collaborate with multiple stakeholders to ensure systemic change across rural and urban environments.
          </p>
        </div>

        <div className="relative flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(partnerTabs).map((key) => (
            <button
              key={key}
              onClick={(e) => selectPartnerTab(key, e)}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase cursor-pointer transition-all duration-300 active:scale-95 ${
                activePartnerTab === key
                  ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 scale-105"
                  : "bg-gray-100/60 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              {key === "corporate" ? "Corporates" : key === "government" ? "Governments" : key === "schools" ? "Schools" : "Volunteers"}
            </button>
          ))}
        </div>

        <div ref={partnerPanelRef} className="relative max-w-3xl mx-auto">
          <div className="relative glass-panel rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Ripple burst — retriggers on every tab click via burstKey */}
            <div
              key={burstKey}
              className="absolute w-[900px] h-[900px] rounded-full pointer-events-none animate-[rippleBurst_0.8s_ease-out]"
              style={{
                left: `${revealOrigin.x}%`,
                top: `${revealOrigin.y}%`,
                background: "radial-gradient(circle, rgba(34,197,94,0.35) 0%, rgba(34,197,94,0) 70%)",
              }}
            />

            <div className="relative p-8">
              {Object.entries(partnerTabs).map(([key, tab]) => {
                if (activePartnerTab !== key) return null;
                return (
                  <div
                    key={`${key}-${burstKey}`}
                    className="space-y-6 animate-[irisReveal_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
                    style={{ "--ox": `${revealOrigin.x}%`, "--oy": `${revealOrigin.y}%` } as React.CSSProperties}
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tab.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{tab.subtitle}</p>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                      <ul className="space-y-4">
                        {tab.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-700 dark:text-gray-300 leading-relaxed animate-[fadeIn_0.5s_ease-out_both]"
                            style={{ animationDelay: `${180 + idx * 90}ms` }}
                          >
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-sm tracking-wider rounded-xl transition-colors shadow-lg"
                      >
                        REQUEST COLLABORATION
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Voices of the Movement */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100 dark:border-gray-900">
        <SectionWatermark text="VOICES" />
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Voices of the Movement
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Hear from local community members, farmers, and students co-leading these programs.
          </p>
        </div>

        <AutoTestimonialCarousel
          testimonials={[
            {
              id: 1,
              name: "Meena Devi",
              role: "Farmer, Aravalli Green Belt",
              description:
                "Afforesting the dry ridges of the Aravallis has brought natural shade back and rejuvenated our wells. The PABT team helped us pick native species that need very little water.",
            },
            {
              id: 2,
              name: "Arjun Rao",
              role: "Student, Green Schools Movement",
              description:
                "Starting our school's Green Council showed us that waste segregation and solar energy adoption aren't just theories. We built our own compost bin and audit our electricity monthly.",
            },
            {
              id: 3,
              name: "Priya Nair",
              role: "CSR Partner Lead",
              description:
                "PABT's audited reporting made it easy for our board to sign off on a multi-year CSR commitment. The field data is real, not just a glossy annual report.",
            },
          ]}
          className="max-w-2xl mx-auto"
        />
        <div className="text-center mt-16">
          <Link href="/share-story" className="text-green-700 dark:text-green-400 hover:text-green-300 font-bold text-sm tracking-wider uppercase transition-colors">
            Share your story with PABT &rarr;
          </Link>
        </div>
      </section>

      {/* Global Call to Action */}
      <section className="bg-gradient-to-r from-green-950/80 via-gray-50 dark:via-gray-950 to-green-950/80 border-t border-b border-gray-100 dark:border-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Ready to Co-Invest in India&apos;s <br />
            Sustainable Future?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Partner with PABT Foundation today. All contributions are MCA-CSR registered, 12A tax-exempt, and 80G tax-deductible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact"
              className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-green-500/10"
            >
              BECOME A CSR PARTNER
            </Link>
            <Link
              href="/share-story"
              className="px-8 py-4 bg-gray-100/60 dark:bg-gray-900/60 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 font-bold rounded-xl transition-colors"
            >
              SUBMIT A VOLUNTEER STORY
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
