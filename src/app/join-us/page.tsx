"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";

const pathways = [
  {
    title: "Volunteer",
    href: "/volunteer",
    icon: Users,
    image: "/volunteer_drive.png",
    tagline: "PABT Green Community – Chennai",
    description:
      "Join the official PABT Green Community bringing together NSS Volunteers, Eco Club Members, students, and citizens across 7 focus areas to create a greener Chennai. Connect directly via WhatsApp!",
    highlights: ["Official WhatsApp Community Groups", "7 Core Environmental Focus Areas", "NSS & Eco Club Student Networks", "Flexible Weekend Drives & Miyawaki Planting"],
  },
  {
    title: "Intern",
    href: "/intern",
    icon: GraduationCap,
    image: "/interns_collaboration.png",
    tagline: "Bettering the World One Step at a Time",
    description:
      "Transform young minds into leaders. Offer your skills across 6 specialized internship tracks (Operations, Marketing, Journalism, Finance, Engagement, Field Work) with a minimum 60-hour commitment.",
    highlights: ["6 Specialized Domain Tracks", "Min. 60 hours commitment", "Real-world project ownership", "Mentorship from NGO leaders"],
  },
  {
    title: "Career",
    href: "/career",
    icon: Briefcase,
    image: "/ecological_career.png",
    tagline: "Professional Approach to Social Service",
    description:
      "Build a meaningful career. Work full-time with dedicated teams in Ecological Development, Agroforestry, Apiary Management, and Community Engagement across Tamil Nadu.",
    highlights: ["Full-time impact roles", "Field & agroforestry execution", "Competitive non-profit culture", "Panchayat & community leadership"],
  },
  {
    title: "Partner",
    href: "/partner",
    icon: Handshake,
    image: "/csr_partnership.png",
    tagline: "Amplify Corporate Social Responsibility",
    description:
      "Amplify your corporate CSR vision. Partner with PABT Foundation under U/S 135 Companies Act 2014 for environment, education, and employee engagement with 50% tax exemption (80G/12A).",
    highlights: ["50% Tax Exemption (80G & 12A)", "GuideStar India Certified NGO", "Quarterly transparent impact reports", "Employee engagement drives"],
  },
];

export default function JoinUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F0E] text-gray-900 dark:text-gray-100 pt-14 sm:pt-20 pb-16 sm:pb-24 px-3 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
        <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
          JOIN THE MOVEMENT
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug">
          Join Us in Creating a{" "}
          <span className="text-green-600 dark:text-green-400">
            Greener, Kinder World
          </span>
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
          <span className="font-bold text-gray-900 dark:text-white">PABT Foundation</span> stands for <span className="italic text-green-600 dark:text-green-400">“Planting A Billion Trees &amp; Beyond”</span>. 
          Explore the pathways below to start driving real-world environmental and societal impact.
        </p>
      </div>

      {/* Vertical Timeline Layout for Pathways */}
      <div ref={containerRef} className="max-w-5xl mx-auto relative mb-16 sm:mb-20 py-4">
        {/* Track line (faint background) */}
        <div className="absolute top-0 bottom-0 left-2.5 sm:left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-green-500/15" />

        {/* Scroll-driven fill line (Desktop) */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 hidden md:block"
        />

        {/* Scroll-driven fill line (Mobile) */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute top-0 bottom-0 left-2.5 sm:left-4 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 md:hidden"
        />

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {pathways.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-center justify-between group"
              >
                {/* Central Circle Marker */}
                <div className="absolute left-2.5 sm:left-4 md:left-1/2 -translate-x-1/2 top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-[#0B0F0E] border-4 border-green-500 shadow-md z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
                </div>

                {/* Card Container */}
                <div
                  className={`w-full md:w-[46%] pl-7 sm:pl-12 md:pl-0 ${
                    isEven ? "md:pr-8 md:text-right md:mr-auto" : "md:pl-8 md:ml-auto"
                  }`}
                >
                  <div className="rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="relative h-56 overflow-hidden bg-gray-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/10">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <span className="absolute bottom-3 left-3 text-xs font-mono font-bold uppercase tracking-wider text-green-400 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                        {item.tagline}
                      </span>
                    </div>

                    <div className="p-6 text-left space-y-4">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 border-t border-gray-200/80 dark:border-gray-800/80 pt-3">
                        {item.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          href={item.href}
                          className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs tracking-wide transition-colors shadow-sm"
                        >
                          <span>Explore {item.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Impact Stats Banner */}
      <div className="max-w-5xl mx-auto rounded-3xl bg-gray-900 text-white p-8 sm:p-12 border border-gray-800 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-green-400 font-mono">10+ Years</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Of Service</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">50,000+</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Saplings Planted</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">60+ Hrs</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Min. Internship</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono">80G / 12A</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Tax Exempt NGO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
