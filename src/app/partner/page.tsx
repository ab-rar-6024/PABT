"use client";

import Link from "next/link";
import { Handshake, Building2, ShieldCheck, FileCheck, Users, CheckCircle2, Mail, Sparkles, Award, BarChart3, Phone } from "lucide-react";

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F0E] text-gray-900 dark:text-gray-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      {/* Hero Banner with Generated CSR Image */}
      <div className="max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden bg-gray-900 text-white relative shadow-2xl border border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[440px]">
          {/* Left Text */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold tracking-wider border border-purple-500/30">
              <Handshake className="w-4 h-4 text-purple-400" />
              <span>CSR & CORPORATE PARTNERSHIPS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Amplify Your CSR Impact with Thuvakkam
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              Transform your corporate social responsibility vision into tangible, measurable, and sustainable change under <span className="text-purple-400 font-semibold">Section 135 of the Companies Act, 2014</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:info@thuvakkam.org"
                className="px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-extrabold text-sm tracking-wide transition-all shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Request CSR Proposals</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative h-[320px] lg:h-full min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/csr_partnership.png"
              alt="CSR Partnership"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900 via-gray-900/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Compliance & Trust Badges */}
      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 text-center space-y-2 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-base">GuideStar Certified</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Endorsed as one of India’s most reliable, transparent NGOs.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 text-center space-y-2 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <FileCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-base">80G & 12A Registered</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            50% Tax Exemption on donations under Income Tax Act 1961.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 text-center space-y-2 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-base">MCA Approved</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Authorised by Ministry of Corporate Affairs for CSR drives.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 text-center space-y-2 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white text-base">Audited Accounts</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Independently audited annually by Anand Radhika & Associates.
          </p>
        </div>
      </div>

      {/* CSR & Employee Engagement Highlights with Image Feature */}
      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-4 shadow-sm">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
            Corporate Social Responsibility
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Curated Proposals & Reporting</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Select from vetted initiatives spanning Miyawaki afforestation, urban biodiversity, school infrastructure, and water conservation. We handle end-to-end execution, maintenance, and furnish quarterly/annual impact metrics.
          </p>
          <ul className="space-y-2 text-xs font-medium text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              <span>Full compliance with Union & Tamil Nadu State CSR guidelines</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              <span>Detailed impact reports with photo evidence & beneficiary testimonies</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              <span>Maintenance support for multi-year project sustainability</span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm flex flex-col justify-between">
          <div className="h-48 relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/employee_engagement.png"
              alt="Employee Engagement Drive"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10150F] via-transparent to-transparent" />
          </div>
          <div className="p-8 pt-2 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Employee Engagement Drives
            </span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Active Corporate Participation</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Engage your workforce in hands-on green drives and social welfare activities across Environment, Education, and Humanity. Boost team cohesion while making a direct societal impact.
            </p>
            <ul className="space-y-2 text-xs font-medium text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                <span>On-field plantation & Miyawaki creation days</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                <span>Mentorship & educational workshops for students</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Corporate Partner Contact Banner */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950 via-gray-900 to-indigo-950 text-white border border-purple-800/50 shadow-2xl text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Partner With Thuvakkam</h2>
        <p className="text-sm sm:text-base text-purple-100/90 max-w-xl mx-auto">
          Organizations wishing to align with their CSR goals can reach out to our team directly for curated proposal documents and project roadmaps:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
          <a
            href="mailto:info@thuvakkam.org"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all font-mono"
          >
            <Mail className="w-5 h-5 text-purple-400" />
            <span>info@thuvakkam.org</span>
          </a>
          <a
            href="tel:+919444888937"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all"
          >
            <Phone className="w-5 h-5 text-purple-400" />
            <span>+91 94448 88937</span>
          </a>
        </div>
      </div>
    </div>
  );
}
