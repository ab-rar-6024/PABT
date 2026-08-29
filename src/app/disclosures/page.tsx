import React from "react";
import Link from "next/link";
import { ShieldCheck, FileSpreadsheet, Award, Landmark, ArrowLeft, Download } from "lucide-react";

export const metadata = {
  title: "Disclosures & Governance | PABT Foundation",
  description: "Public disclosures, statutory compliance registrations (80G, 12A, CSR-1), financial audits, and transparency reports of PABT Foundation.",
};

export default function DisclosuresPage() {
  const complianceBadges = [
    { label: "12A Tax Exempt", desc: "Income Tax Department Non-Profit Status" },
    { label: "80G Tax Deductible", desc: "50% Tax Exemption for Indian Donors" },
    { label: "CSR-1 Registered", desc: "MCA Registered for Corporate CSR Mandates" },
    { label: "GuideStar Certified", desc: "Verified Level of Transparency & Governance" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F0E] text-gray-900 dark:text-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-green-600 dark:text-green-400 uppercase tracking-widest hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-mono font-bold">
            <Landmark className="w-4 h-4" />
            <span>STATUTORY COMPLIANCE & TRANSPARENCY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Public Disclosures
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            PABT Foundation maintains radical transparency across all operations, financial allocations, audited accounts, and corporate CSR projects.
          </p>
        </div>

        {/* Compliance Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {complianceBadges.map((badge) => (
            <div
              key={badge.label}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-1.5"
            >
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-base">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span>{badge.label}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-green-500" />
              1. Financial Audits & Annual Reports
            </h2>
            <p>
              In compliance with Indian non-profit regulations, PABT Foundation undergoes annual third-party financial audits. Audited balance sheets, income & expenditure statements, and program allocation ledgers are available upon request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-green-500" />
              2. ESG & CSR Compliance (Ministry of Corporate Affairs)
            </h2>
            <p>
              PABT Foundation is registered under the Ministry of Corporate Affairs (MCA) with CSR-1 Registration No. for implementing Corporate Social Responsibility projects under Schedule VII of the Companies Act, 2013.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              3. Request Statutory Documentation
            </h2>
            <p>
              To request copies of our registration certificates, 80G/12A approvals, or CSR audit compliance packages, please email our compliance team at{" "}
              <a href="mailto:trees@pabt.in" className="text-green-600 dark:text-green-400 font-bold hover:underline">
                trees@pabt.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
