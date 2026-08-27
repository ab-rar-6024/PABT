"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Heart, Calendar, Award, CheckCircle2, Phone, Mail, MapPin, Sparkles, ShieldCheck, TreePine, Smile } from "lucide-react";

const activities = [
  {
    title: "Miyawaki Forest Planting",
    desc: "Plant dense native forests using Miyawaki method to create rapid green cover in urban areas.",
    image: "/miyawaki_planting.png",
    icon: TreePine,
  },
  {
    title: "Seed-Ball Making Drives",
    desc: "Craft clay-seed balls with native tree seeds for aerial & manual dispersal in barren lands.",
    image: "/seedball_drive.png",
    icon: Sparkles,
  },
  {
    title: "Water Body & Pond Cleanup",
    desc: "Restore local water bodies, remove plastic waste, and construct natural embankments.",
    image: "/water_cleanup.png",
    icon: Heart,
  },
  {
    title: "School Climate Workshops",
    desc: "Educate school students on environmental conservation, recycling, and climate action.",
    image: "/school_workshop.png",
    icon: Smile,
  },
];

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F0E] text-gray-900 dark:text-gray-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      {/* Hero Banner with Generated Volunteer Image */}
      <div className="max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden bg-gray-900 text-white relative shadow-2xl border border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[440px]">
          {/* Left Text */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 text-xs font-mono font-bold tracking-wider border border-green-500/30">
              <Users className="w-4 h-4 text-green-400" />
              <span>VOLUNTEER NETWORK</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Be the Change You Wish to See
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              A community-driven movement working across <span className="text-green-400 font-semibold">Environment</span>, <span className="text-amber-400 font-semibold">Education</span>, and <span className="text-cyan-400 font-semibold">Humanity</span> to build a greener, kinder world.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:info@thuvakkam.org"
                className="px-6 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-black font-extrabold text-sm tracking-wide transition-all shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Join Next Weekend Drive</span>
              </a>
              <a
                href="tel:+919444888937"
                className="px-6 py-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold text-sm tracking-wide transition-all border border-gray-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-green-400" />
                <span>+91 94448 88937</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative h-[320px] lg:h-full min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/volunteer_drive.png"
              alt="Volunteers Planting Trees"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900 via-gray-900/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Volunteer Activities Spotlight Cards with Images */}
      <div className="max-w-6xl mx-auto mb-16 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold tracking-tight">On-Ground Volunteer Activities</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Explore the key field activities you can participate in during our weekend drives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-green-500/50 transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-green-400 border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">{item.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-4 shadow-sm">
          <div className="p-3 rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400 w-fit">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-xl">Direct Social Impact</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Participate directly in urban forestry (Miyawaki), seed ball making drives, pond restoration, and school workshops.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-4 shadow-sm">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-xl">Flexible Weekend Drives</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Join weekend plantation or educational activities suited to your personal availability and location.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-4 shadow-sm">
          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 w-fit">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-xl">Certificate & Recognition</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Receive official volunteer appreciation certificates for your active contribution to environmental and societal welfare.
          </p>
        </div>
      </div>

      {/* Direct Contact Banner */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-green-950 via-gray-900 to-emerald-950 text-white border border-green-800/50 shadow-2xl text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Connect with Volunteer Coordination</h2>
        <p className="text-sm sm:text-base text-green-100/90 max-w-xl mx-auto">
          Want to join our next weekend plantation or education drive? Reach out to our volunteer coordination team directly:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
          <a
            href="tel:+919444888937"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-green-500/20 border border-green-500/40 text-green-300 font-semibold hover:bg-green-500/30 transition-all"
          >
            <Phone className="w-5 h-5 text-green-400" />
            <span>+91 94448 88937</span>
          </a>
          <a
            href="mailto:info@thuvakkam.org"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-green-500/20 border border-green-500/40 text-green-300 font-semibold hover:bg-green-500/30 transition-all font-mono"
          >
            <Mail className="w-5 h-5 text-green-400" />
            <span>info@thuvakkam.org</span>
          </a>
        </div>
      </div>
    </div>
  );
}
