"use client";

import Link from "next/link";
import { Briefcase, MapPin, Calendar, Users, CheckCircle2, Mail, Sparkles, Building, ArrowRight, ArrowLeft } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F0E] text-gray-900 dark:text-gray-100 pt-14 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Light */}
      <div className="absolute top-10 right-1/3 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      {/* Back to Join Us Navigation Button */}
      <div className="max-w-6xl mx-auto mb-3 sm:mb-6 flex items-center">
        <Link
          href="/join-us"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800/90 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-100 text-xs sm:text-sm font-bold border border-gray-200/80 dark:border-zinc-700/80 transition-all shadow-sm hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span>Back to Join Us</span>
        </Link>
      </div>

      {/* Hero Banner with Generated Career Image */}
      <div className="max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden bg-gray-900 text-white relative shadow-2xl border border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[440px]">
          {/* Left Text */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold tracking-wider border border-cyan-500/30">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>CAREERS AT PABT FOUNDATION</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Get the Right Beginning for Your Career
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              PABT Foundation is an NGO that approaches the task of social service professionally. Working on a large scale requires enthusiastic, dedicated individuals who collaborate to create lasting societal change.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:trees@pabt.in"
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm tracking-wide transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Resume to trees@pabt.in</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative h-[320px] lg:h-full min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ecological_career.png"
              alt="Ecological Career Execution"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900 via-gray-900/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Work Culture Highlights */}
      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-2 shadow-sm hover:shadow-md transition-all">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Hands-on Field Experience</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            Gain direct experience managing large-scale plantation drives, coordinating teams, and working with local communities in rural environments.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-2 shadow-sm hover:shadow-md transition-all">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Professional Growth</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            Develop communication skills, inventory management, data documentation, cataloguing activities, content writing, and CSR reporting.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-2 shadow-sm hover:shadow-md transition-all">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Purpose-Driven Impact</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            Every position comes with an intrinsic notion of working to create a better, more sustainable society for future generations.
          </p>
        </div>
      </div>

      {/* Featured Open Position Card */}
      <div className="max-w-6xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-xl space-y-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Department: Ecological Development
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              Project Associate – Ecological Development
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-500" />
                Tamil Nadu – Chengalpattu – Madhurantagam
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-cyan-500" />
                Headcount: 02 (Full-Time)
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-500" />
                Joining Timeline: Immediate
              </span>
            </div>
          </div>

        </div>

        {/* Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              <span>1. Execution</span>
            </h3>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
              <li>Lead plantation drives focusing on native species & survival rates.</li>
              <li>Implement agroforestry models aligned to local ecology.</li>
              <li>Set up & manage apiary (beekeeping) units.</li>
              <li>Establish and maintain nurseries for long-term sapling supply.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              <span>2. Community Engagement</span>
            </h3>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
              <li>Mobilize and onboard farmers into ecological programs.</li>
              <li>Conduct training & awareness sessions on sustainable practices.</li>
              <li>Ensure community ownership and continuity beyond project timelines.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              <span>3. Monitoring & Reporting</span>
            </h3>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
              <li>Track ecological indicators and share periodic updates.</li>
              <li>Maintain structured field data, photos, and documentation.</li>
              <li>Support CSR and donor reporting with accurate inputs.</li>
              <li>Coordinate with local panchayats and internal teams.</li>
            </ul>
          </div>
        </div>

        {/* Candidate Profile Box */}
        <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 space-y-2">
          <h3 className="text-sm font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider">Candidate Profile</h3>
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            • <span className="font-semibold">Education:</span> Agriculture / Forestry / Environmental Science / Rural Development (or related).<br />
            • <span className="font-semibold">Experience:</span> 1–3 years in field-based project execution with strong on-ground presence.<br />
            • <span className="font-semibold">Language:</span> Tamil fluency mandatory; English working proficiency preferred.<br />
            • <span className="font-semibold">Mindset:</span> Execution-first, ownership, accountability, and ability to work in unstructured rural environments.
          </p>
        </div>
      </div>

      {/* How to Apply Contact Banner */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950 via-gray-900 to-gray-950 text-white border border-cyan-800/50 shadow-2xl text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">How to Apply</h2>
        <p className="text-sm sm:text-base text-cyan-100/90 max-w-xl mx-auto">
          Interested candidates, send in your resume with a brief note on why you want to work with us directly to:
        </p>
        <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-lg hover:bg-cyan-500/30 transition-all">
          <Mail className="w-5 h-5 text-cyan-400" />
          <a href="mailto:trees@pabt.in" className="hover:underline">
            trees@pabt.in
          </a>
        </div>
      </div>
    </div>
  );
}
