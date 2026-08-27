"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Heart, Clock, CheckCircle2, Mail, Sparkles, BookOpen, Layers, Users, Phone } from "lucide-react";

const tracks = [
  {
    title: "Administrative & Management",
    desc: "Oversee project logistics, event coordination, inventory tracking, and operational planning.",
    badge: "Operations",
  },
  {
    title: "Marketing & Digital Media",
    desc: "Design outreach campaigns, digital assets, branding collateral, and newsletters.",
    badge: "Media",
  },
  {
    title: "Social Media & Journalism",
    desc: "Craft impact stories, manage official handles, document field stories, and write press releases.",
    badge: "Content",
  },
  {
    title: "Finance & Accounting",
    desc: "Assist with budget documentation, audit preparation, financial record keeping, and reporting.",
    badge: "Finance",
  },
  {
    title: "People Relationship & Engagement",
    desc: "Coordinate volunteer networks, manage donor communication, and host community onboarding.",
    badge: "Community",
  },
  {
    title: "Social Work & On-Field",
    desc: "Lead ground-level afforestation, Miyawaki forest maintenance, and community education workshops.",
    badge: "On-Field",
  },
];

export default function InternPage() {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F0E] text-gray-900 dark:text-gray-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      {/* Hero Banner with Generated Interns Image */}
      <div className="max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden bg-gray-900 text-white relative shadow-2xl border border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[440px]">
          {/* Left Text */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold tracking-wider border border-amber-500/30">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>INTERNSHIPS AT THUVAKKAM</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Bettering the World One Step at a Time
            </h1>

            <p className="text-xl font-mono font-bold text-amber-400">
              ORGANIZATION + INTERNS = ❤︎
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              Interning at Thuvakkam is taking the first step towards creating a sustainable change in yourself and in society. When young minds tackle real-world problems, creative solutions benefit everyone. We offer internships throughout the year.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:internship@thuvakkam.org"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm tracking-wide transition-all shadow-lg hover:shadow-amber-500/25 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Apply via Email</span>
              </a>
              <span className="text-xs font-mono text-gray-400 px-3.5 py-2 rounded-xl bg-gray-800 border border-gray-700">
                Min 60 Hours Commitment
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative h-[320px] lg:h-full min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/interns_collaboration.png"
              alt="Interns Collaboration"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900 via-gray-900/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Requirements Banner */}
      <div className="max-w-5xl mx-auto mb-16 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>All You Need to Apply:</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500 text-white flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">Interest & Skills</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                A genuine passion to put your skills to work for the greater good.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500 text-white flex-shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">Desire for Impact</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Motivation to become the change you wish to see in society.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500 text-white flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900 dark:text-white">60 Hours Commitment</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Minimum 60 hours total commitment across your internship duration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* So Many Ways to Intern - 6 Tracks Grid */}
      <div className="max-w-6xl mx-auto mb-16 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            So Many Ways to Intern
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Click any track to highlight its scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, i) => {
            const isSel = selectedTrack === i;
            return (
              <div
                key={track.title}
                onClick={() => setSelectedTrack(i)}
                className={`p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border transition-all cursor-pointer space-y-3 shadow-sm hover:shadow-lg ${
                  isSel
                    ? "border-amber-500 ring-2 ring-amber-500/20 bg-amber-50/50 dark:bg-amber-950/20"
                    : "border-gray-200 dark:border-gray-800 hover:border-amber-500/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-500/20">
                    {track.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-400">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{track.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{track.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Application Info Banner */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950 via-gray-900 to-gray-950 text-white border border-amber-800/50 shadow-2xl text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">How to Apply for Internships</h2>
        <p className="text-sm sm:text-base text-amber-100/90 max-w-xl mx-auto">
          In case of any queries regarding existing and other internship opportunities and their availability, reach out to us by email with the subject format:
          <br />
          <span className="font-mono text-amber-300 font-bold text-sm mt-3 inline-block bg-black/50 py-1.5 px-4 rounded-xl border border-amber-500/30">
            Thuvakkam Internship_[Name]_[College Name]
          </span>
        </p>
        <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono font-bold text-lg hover:bg-amber-500/30 transition-all">
          <Mail className="w-5 h-5 text-amber-400" />
          <a href="mailto:internship@thuvakkam.org" className="hover:underline">
            internship@thuvakkam.org
          </a>
        </div>
      </div>
    </div>
  );
}
