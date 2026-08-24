"use client";

import { useEffect, useRef, useState } from "react";
import { Leaf, Recycle, Zap, ShieldCheck, Users } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

type Project = {
  domain: string;
  accent: string;
  title: string;
  description: string;
  location: string;
  stat: string;
};

const DOMAIN_ICON: Record<string, typeof Leaf> = {
  Nature: Leaf,
  Circularity: Recycle,
  "Clean Energy": Zap,
  "ESG & CSR": ShieldCheck,
  Community: Users,
};

const DOMAIN_LINK: Record<string, { href: string; cta: string }> = {
  Nature: { href: "/nature", cta: "View Nature Projects" },
  Circularity: { href: "/circular", cta: "View Circular Projects" },
  "Clean Energy": { href: "/future", cta: "View Future Projects" },
  "ESG & CSR": { href: "/esg", cta: "View ESG Projects" },
  Community: { href: "/community", cta: "View Community Projects" },
};

const DOMAIN_GLOW: Record<string, string> = {
  Nature: "bg-green-500/20",
  Circularity: "bg-amber-500/20",
  "Clean Energy": "bg-cyan-500/20",
  "ESG & CSR": "bg-slate-500/20",
  Community: "bg-orange-500/20",
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <BentoGrid className="grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => {
          const link = DOMAIN_LINK[project.domain] ?? { href: "/projects", cta: "Learn More" };
          return (
            <div
              key={project.title}
              className={`col-span-1 h-full transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <BentoCard
                Icon={DOMAIN_ICON[project.domain] ?? Leaf}
                name={project.title}
                description={`${project.description} — ${project.stat} · ${project.location}.`}
                href={link.href}
                cta={link.cta}
                className="h-full"
                background={
                  <div
                    className={`absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl ${
                      DOMAIN_GLOW[project.domain] ?? "bg-green-500/20"
                    }`}
                  />
                }
              />
            </div>
          );
        })}
      </BentoGrid>
    </div>
  );
}
