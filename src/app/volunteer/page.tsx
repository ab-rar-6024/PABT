"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Heart,
  Calendar,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  TreePine,
  GraduationCap,
  Recycle,
  Globe,
  Handshake,
  Leaf,
  ShieldCheck,
  Share2,
  ExternalLink,
  ArrowRight,
  MessageSquare
} from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.887-9.885 9.887m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.472-8.413z" />
    </svg>
  );
}

const whatsappLinks = {
  main: "https://chat.whatsapp.com/Cliy25as6TCCL3vB8tjnp4",
  nss: "https://chat.whatsapp.com/D0rFCHehacP9gwZ9nFFBsB?mode=gi_t",
  eco: "https://chat.whatsapp.com/Egb56ehZEDbKVOfYSz1KOU?mode=gi_t",
};

const focusAreas = [
  {
    title: "Urban Tree Plantation",
    icon: TreePine,
    desc: "Transforming urban landscapes through Miyawaki dense micro-forests and community planting drives across Chennai.",
  },
  {
    title: "Green Campus Development",
    icon: GraduationCap,
    desc: "Partnering with schools and colleges to establish eco-friendly campuses, botanical gardens, and student green clubs.",
  },
  {
    title: "Waste Management & Recycling",
    icon: Recycle,
    desc: "Driving zero-waste initiatives, plastic collection drives, composting workshops, and circular economy practices.",
  },
  {
    title: "Environmental Awareness Programmes",
    icon: Globe,
    desc: "Conducting dynamic workshops, climate sensitization rallies, seminars, and youth campaigns in educational institutes.",
  },
  {
    title: "Community Volunteering",
    icon: Handshake,
    desc: "Mobilizing citizens, corporates, and youth for weekend restoration drives, seed-ball making, and local conservation.",
  },
  {
    title: "Biodiversity Conservation",
    icon: Leaf,
    desc: "Nurturing native flora species, restoring urban bird and pollinator habitats, and preserving local water bodies.",
  },
  {
    title: "Climate Action & Sustainability",
    icon: ShieldCheck,
    desc: "Fostering long-term ecological resilience through grassroots climate stewardship and sustainable lifestyle advocacy.",
  },
];

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
    icon: GraduationCap,
  },
];

export default function VolunteerPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Join PABT Green Community – Chennai",
          text: "Join the official PABT Green Community WhatsApp group for tree plantation and environmental drives in Chennai!",
          url: whatsappLinks.main,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(whatsappLinks.main);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F0E] text-gray-900 dark:text-gray-100 pt-20 sm:pt-24 pb-16 sm:pb-20 px-3 sm:px-6 lg:px-8 relative overflow-x-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 right-1/4 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Banner Header */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 text-white relative shadow-xl border border-emerald-900/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 space-y-4 sm:space-y-6 z-10">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-xs font-mono font-bold tracking-wider border border-emerald-500/40 shadow-sm max-w-full">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
              <span className="truncate">VOLUNTEER & GREEN COMMUNITY</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight text-left break-words">
              🌱 Join the PABT Green Community – Chennai 🌱
            </h1>

            <div className="space-y-2.5 sm:space-y-3 text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed text-left">
              <p className="font-semibold text-emerald-300 text-sm sm:text-base">Dear Friends,</p>
              <p className="break-words">
                <strong className="text-white font-bold">Plant A Billion Trees (PABT) Foundation</strong> is delighted to launch the{" "}
                <span className="text-emerald-400 font-bold">PABT Green Community</span>, bringing together{" "}
                <span className="text-white underline decoration-emerald-500 font-semibold">NSS Volunteers</span> and{" "}
                <span className="text-white underline decoration-emerald-500 font-semibold">Eco Club Members</span> with a shared vision of creating a greener, cleaner, and more sustainable Chennai.
              </p>
              <p className="text-[11px] sm:text-xs lg:text-sm text-gray-400 leading-relaxed">
                This initiative welcomes students, schools, colleges, corporates, NGOs, environmental enthusiasts, and citizens who are passionate about protecting our environment and serving the community.
              </p>
            </div>

            {/* Direct WhatsApp Hero CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-4">
              <a
                href={whatsappLinks.main}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-black text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 border border-emerald-300 text-center"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-950 flex-shrink-0" />
                <span className="truncate">Join Official WhatsApp Group</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              </a>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-800/90 hover:bg-gray-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all border border-gray-700 flex items-center justify-center gap-2 text-center"
              >
                <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <span>{copied ? "Link Copied!" : "Share Invitation"}</span>
              </button>
            </div>
          </div>

          {/* Right Image Display */}
          <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-full lg:min-h-[460px] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/volunteer_drive.png"
              alt="PABT Green Community Volunteers"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-950 via-gray-950/40 to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-white space-y-0.5 sm:space-y-1 text-left">
              <p className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold truncate">
                One Community • One Mission • One Future
              </p>
              <p className="text-xs sm:text-sm font-extrabold truncate">Plant A Billion Trees (PABT) Foundation</p>
            </div>
          </div>
        </div>
      </div>

      {/* PROMINENT WHATSAPP COMMUNITY SECTION (The Main Feature) */}
      <div className="max-w-6xl mx-auto mb-10 sm:mb-16">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-950/90 via-gray-900 to-green-950/90 border-2 border-emerald-500/50 p-4 sm:p-8 lg:p-10 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-2 sm:space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] sm:text-xs font-mono font-bold tracking-widest border border-emerald-500/40">
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
              <span>OFFICIAL WHATSAPP COMMUNITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              Join Our Official PABT Green Community
            </h2>
            <p className="text-xs sm:text-base text-gray-300 px-2">
              Connect directly with hundreds of eco-volunteers, NSS members, and environmental champions across Chennai.
            </p>
          </div>

          {/* WhatsApp Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* Main Community Card (Recommended) */}
            <div className="lg:col-span-6 rounded-xl sm:rounded-2xl bg-emerald-950/60 border-2 border-emerald-500 p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 shadow-xl relative overflow-hidden group hover:border-emerald-400 transition-all text-left">
              <div className="inline-block self-start px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500 text-gray-950 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                RECOMMENDED FIRST
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-emerald-500 text-gray-950 flex-shrink-0">
                    <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Main PABT Community</h3>
                    <p className="text-[11px] sm:text-xs text-emerald-300 font-medium">Recommended for All Volunteers & Citizens</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1 sm:pt-2">
                  Our central hub for event announcements, weekend tree plantation updates, Miyawaki drives, and overall community coordination in Chennai.
                </p>
              </div>

              <a
                href={whatsappLinks.main}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-black text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.01] text-center"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">Join Main WhatsApp Community</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ml-auto" />
              </a>
            </div>

            {/* NSS Community Card */}
            <div className="lg:col-span-3 rounded-xl sm:rounded-2xl bg-gray-900/90 border border-gray-700/80 p-5 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-5 hover:border-emerald-500/50 transition-all text-left">
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30 flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">NSS Community</h3>
                    <p className="text-[10px] sm:text-[11px] text-gray-400">For NSS Volunteers & Leaders</p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Tailored communication for National Service Scheme (NSS) units across schools and colleges in Tamil Nadu.
                </p>
              </div>

              <a
                href={whatsappLinks.nss}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gray-800 hover:bg-emerald-600 text-white font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 border border-gray-700 hover:border-emerald-500 text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:text-white flex-shrink-0" />
                <span>Join NSS Group</span>
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 ml-auto sm:ml-0" />
              </a>
            </div>

            {/* Eco Club Community Card */}
            <div className="lg:col-span-3 rounded-xl sm:rounded-2xl bg-gray-900/90 border border-gray-700/80 p-5 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-5 hover:border-emerald-500/50 transition-all text-left">
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex-shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Eco Club Community</h3>
                    <p className="text-[10px] sm:text-[11px] text-gray-400">For Eco Club Members</p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Dedicated updates for school and college Eco Clubs, campus sustainability drives, and green initiatives.
                </p>
              </div>

              <a
                href={whatsappLinks.eco}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gray-800 hover:bg-emerald-600 text-white font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 border border-gray-700 hover:border-emerald-500 text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Join Eco Club Group</span>
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 ml-auto sm:ml-0" />
              </a>
            </div>
          </div>

          {/* Announcement Banner */}
          <div className="rounded-xl sm:rounded-2xl bg-emerald-950/40 border border-emerald-500/30 p-3.5 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-emerald-200 text-left">
            <span className="text-lg sm:text-xl flex-shrink-0">📢</span>
            <p className="leading-relaxed">
              <strong className="text-white">Notice:</strong> Kindly join the <span className="text-emerald-400 font-bold">Main Community first</span> and feel free to share this invitation with your friends, NSS volunteers, Eco Club members, schools, colleges, and anyone interested in creating a greener Chennai!
            </p>
          </div>
        </div>
      </div>

      {/* OUR FOCUS AREAS SECTION */}
      <div className="max-w-6xl mx-auto mb-10 sm:mb-16 space-y-6 sm:space-y-8">
        <div className="text-center space-y-1.5 sm:space-y-2 max-w-2xl mx-auto px-2">
          <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            SEVEN PILLARS OF ACTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">🌿 Our Focus Areas</h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Together, our community works across 7 vital ecological and social pillars to make Chennai cleaner and greener.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-2.5 sm:space-y-3 hover:border-emerald-500/40 transition-all shadow-sm text-left"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* INVITATION & SIGN-OFF MESSAGE */}
      <div className="max-w-4xl mx-auto mb-10 sm:mb-16 p-5 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-5 sm:space-y-6 text-center relative shadow-sm">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <blockquote className="text-xs sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 italic font-serif leading-relaxed max-w-2xl mx-auto px-2">
          “It would be our great pleasure to have you as part of this green movement. Together, we can create a lasting environmental impact and build a healthier future for Chennai.”
        </blockquote>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-800 max-w-md mx-auto space-y-1">
          <p className="text-xs sm:text-sm font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">
            🌍 Together, Let's Green Chennai
          </p>
          <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">One Community • One Mission • One Future</p>
          <p className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white pt-2">
            🌳 Plant A Billion Trees (PABT) Foundation
          </p>
          <div className="text-xs text-gray-500 dark:text-gray-400 pt-1">
            With regards,<br />
            <span className="font-bold text-gray-800 dark:text-gray-200">Siva C</span>, Program Manager
          </div>
        </div>
      </div>

      {/* On-Ground Volunteer Activities Showcase */}
      <div className="max-w-6xl mx-auto mb-10 sm:mb-16 space-y-6 sm:space-y-8">
        <div className="text-center space-y-1.5 sm:space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">On-Ground Volunteer Drives</h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Explore the key field activities you can participate in during our weekend drives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg text-left"
              >
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 p-2 rounded-lg sm:rounded-xl bg-black/60 backdrop-blur-md text-emerald-400 border border-white/10">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-1.5 sm:space-y-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-3 sm:space-y-4 shadow-sm text-left">
          <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg sm:text-xl">Direct Social Impact</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Participate directly in urban forestry (Miyawaki), seed ball making drives, pond restoration, and school workshops.
          </p>
        </div>

        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-3 sm:space-y-4 shadow-sm text-left">
          <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg sm:text-xl">Flexible Weekend Drives</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Join weekend plantation or educational activities suited to your personal availability and location.
          </p>
        </div>

        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-3 sm:space-y-4 shadow-sm text-left">
          <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 w-fit">
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-lg sm:text-xl">Certificate & Recognition</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Receive official volunteer appreciation certificates for your active contribution to environmental and societal welfare.
          </p>
        </div>
      </div>

      {/* Direct Contact Banner */}
      <div className="max-w-4xl mx-auto p-5 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-950 via-gray-900 to-green-950 text-white border border-emerald-800/50 shadow-2xl text-center space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-3xl font-extrabold leading-snug">Connect with Volunteer Coordination</h2>
        <p className="text-xs sm:text-base text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
          Have questions or want to organize a drive for your institution? Reach out to our volunteer coordination team:
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 pt-2">
          <a
            href={whatsappLinks.main}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl sm:rounded-2xl bg-emerald-500 text-gray-950 font-extrabold text-xs sm:text-sm hover:bg-emerald-400 transition-all shadow-lg text-center"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-950 flex-shrink-0" />
            <span className="truncate">Join Main WhatsApp Community</span>
          </a>
          <a
            href="mailto:info@thuvakkam.org"
            className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl sm:rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs sm:text-sm hover:bg-emerald-500/30 transition-all font-mono text-center"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
            <span>info@thuvakkam.org</span>
          </a>
        </div>
      </div>
    </div>
  );
}


