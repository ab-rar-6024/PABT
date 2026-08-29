"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  X,
  Lock,
  FileText,
  Scale,
  Landmark,
  Eye,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "disclosures" | null>(null);
  // PABT links
  const missionLinks = [
    { label: "PABT Nature", href: "/nature" },
    { label: "PABT Circular", href: "/circular" },
    { label: "PABT Future", href: "/future" },
    { label: "PABT ESG", href: "/esg" },
    { label: "PABT Community", href: "/community" },
  ];

  const foundationLinks = [
    { label: "About PABT", href: "/about" },
    { label: "Impact & Audits", href: "/impact" },
    { label: "Flagship Projects", href: "/projects" },
    { label: "Field Notes & Insights", href: "/insights" },
  ];

  const joinUsLinks = [
    { label: "Volunteer", href: "/volunteer" },
    { label: "Internships", href: "/intern" },
    { label: "Careers", href: "/career" },
    { label: "CSR Partner", href: "/partner" },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={16} className="text-[#3ca2fa]" />,
      text: "trees@pabt.in",
      href: "mailto:trees@pabt.in",
    },
    {
      icon: <Phone size={16} className="text-[#3ca2fa]" />,
      text: "+91 99449 43333",
      href: "tel:+919944943333",
    },
    {
      icon: <MapPin size={16} className="text-[#3ca2fa]" />,
      text: "Chennai & Bengaluru, India",
    },
  ];

  // Social media SVG path configurations
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100092687792417",
      icon: (
        <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
        </svg>
      )
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/pabt.in/",
      icon: (
        <svg className="w-5.5 h-5.5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      label: "Twitter",
      href: "https://twitter.com/pabt_in",
      icon: (
        <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/91440714/admin/",
      icon: (
        <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCh2qE_xP05WVJtJ08BYeSzg",
      icon: (
        <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.556a3.003 3.003 0 0 0-2.11 2.107C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.482 20.5 12 20.5 12 20.5s7.518 0 9.388-.556a3.003 3.003 0 0 0 2.11-2.107C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <footer className="bg-[#0F0F11] text-gray-400 relative h-fit w-full overflow-hidden border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 lg:gap-12 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.png" alt="PABT Foundation" className="h-8 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Empowering India&apos;s sustainable future through native afforestation, circular resource models, clean energy, corporate ESG strategies, and school-led youth climate movements.
            </p>
          </div>

          {/* 5 Missions Column */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">
              Our 5 Missions
            </h4>
            <ul className="space-y-3 text-sm">
              {missionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#3ca2fa] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage Column */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">
              Join Us & Engage
            </h4>
            <ul className="space-y-3 text-sm">
              {joinUsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-green-400 font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs text-green-500">›</span> {link.label}
                  </Link>
                </li>
              ))}
              {foundationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#3ca2fa] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Compliance Section */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">
              Contact & Trust
            </h4>
            <ul className="space-y-4 text-sm">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors text-gray-400"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Compliance badges block */}
            <div className="mt-4 pt-4 border-t border-gray-800/80 flex items-center space-x-1 text-[10px] font-mono text-cyan-400/80">
              <ShieldCheck size={12} className="text-[#3ca2fa]" />
              <span>12A • 80G • CSR MCA AUDITED</span>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-800/60 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-gray-500">
          
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Bottom links */}
          <div className="flex space-x-6 relative z-50 pointer-events-auto">
            <Link
              href="/privacy-policy"
              className="hover:text-green-400 font-medium transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-green-400 font-medium transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclosures"
              className="hover:text-green-400 font-medium transition-colors cursor-pointer"
            >
              Disclosures
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left relative z-50">
            &copy; {new Date().getFullYear()} PABT Foundation. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[22rem] -mt-40 -mb-28 justify-center items-center pointer-events-none z-0">
        <TextHoverEffect text="PABT" className="z-0" />
      </div>

      <FooterBackgroundGradient />
    </footer>

    {/* Sub Footer */}
    <div className="w-full bg-[#f8f9fa] dark:bg-[#070908] border-t border-gray-200 dark:border-gray-800/80 py-3.5 px-4 sm:px-8 text-xs font-sans text-gray-600 dark:text-gray-400 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span>&copy; 2026 AIKONIK</span>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <span className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>Contact:</span>
            <a
              href="https://wa.me/919042272801?text=I%20have%20seen%20your%20website%20PABT%20i%20want%20the%20same%20like"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <svg className="w-3.5 h-3.5 fill-current text-emerald-500 flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.097-4.433c1.554.922 3.328 1.409 5.141 1.41h.005c5.388 0 9.771-4.383 9.773-9.77.001-2.61-1.014-5.064-2.859-6.908-1.844-1.845-4.298-2.86-6.907-2.861-5.389 0-9.773 4.384-9.775 9.771-.001 1.897.538 3.738 1.56 5.367l-.999 3.648 3.662-.957zm11.442-6.529c-.279-.14-1.649-.814-1.905-.907-.256-.093-.443-.14-.629.14-.187.279-.722.907-.885 1.093-.163.186-.326.21-.605.07-.279-.14-1.18-.435-2.248-1.388-.83-.741-1.39-1.656-1.553-1.935-.163-.279-.017-.43.122-.569.125-.125.279-.326.419-.489.14-.163.186-.279.279-.465.093-.186.047-.349-.023-.489-.07-.14-.629-1.514-.862-2.072-.227-.543-.458-.469-.629-.478-.163-.008-.349-.01-.535-.01-.186 0-.489.07-.745.349-.256.279-.978.955-.978 2.33 0 1.374 1.001 2.701 1.14 2.887.14.186 1.966 3.002 4.763 4.214.666.288 1.186.46 1.591.589.668.213 1.276.183 1.757.111.535-.08 1.649-.674 1.882-1.326.233-.652.233-1.21.163-1.326-.07-.116-.256-.186-.535-.326z"/>
              </svg>
              9042272801
            </a>
            <span>/</span>
            <a
              href="https://wa.me/918122922605?text=I%20have%20seen%20your%20website%20PABT%20i%20want%20the%20same%20like"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              8122922605
            </a>
          </span>
        </div>
      </div>
    </div>

    {/* Interactive Policy Modal Overlay */}
    {activeModal && (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
        <div
          className="relative w-full max-w-2xl bg-white dark:bg-[#0d1410] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-black/20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {activeModal === "privacy" && <ShieldCheck className="w-5 h-5" />}
                {activeModal === "terms" && <Scale className="w-5 h-5" />}
                {activeModal === "disclosures" && <Landmark className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {activeModal === "privacy" && "Privacy Policy"}
                  {activeModal === "terms" && "Terms of Service"}
                  {activeModal === "disclosures" && "Public Disclosures & Governance"}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  PABT Foundation Compliance
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
              className="p-2 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-h-[60vh]">
            {activeModal === "privacy" && (
              <>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs space-y-1">
                  <p className="font-bold uppercase tracking-wider">Official PABT Privacy Policy</p>
                  <p>Plant A Billion Trees Foundation (trees@pabt.in)</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-base">
                    <Eye className="w-4 h-4 text-emerald-500" />
                    1. Information Gathering
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    PABT Foundation collects information from users when they make a donation, sign up for a campaign, or subscribe for updates. While submitting a donation, well-wishers provide: Name, Email, Telephone Number, Address, and payment details for 80G tax receipts.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-base">
                    <Lock className="w-4 h-4 text-emerald-500" />
                    2. Use of Personal Information
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    PABT Foundation keeps user information strictly confidential. Data is handled internally by authorized officials only and is never shared with external agencies or commercial third parties.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-base">
                    <FileText className="w-4 h-4 text-emerald-500" />
                    3. Privacy of Email Lists & Cookies
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    We do not sell, rent, trade, or lease email database addresses. Cookies are used solely to recognize returning visitors and enhance user experience.
                  </p>
                </div>

                <div className="space-y-2 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    Refund & Cancellation Policy
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    No refund or cancellation for donated amounts processed through online payment gateways is entertained. Donations are immediately utilized for community development and Miyawaki afforestation.
                  </p>
                </div>
              </>
            )}

            {activeModal === "terms" && (
              <>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs space-y-1">
                  <p className="font-bold uppercase tracking-wider">Official PABT Terms & Conditions</p>
                  <p>Use of site subject to PABT Foundation regulations</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-base">
                    <Scale className="w-4 h-4 text-emerald-500" />
                    1. Site Usage & Rules
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    You agree to use this site only for lawful purposes in a manner that does not restrict or inhibit the use and enjoyment of the site by any third party.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 text-base">
                    <FileText className="w-4 h-4 text-emerald-500" />
                    2. Copyright Restrictions
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Commercial use or publication of any item displayed is strictly prohibited without prior authorization from PABT FOUNDATION. Documents may be copied for personal, non-commercial use only.
                  </p>
                </div>

                <div className="space-y-2 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    3. Registered Office & Jurisdiction
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Governed by the laws of India. Regd Office: NO. 1584, 17th Main Road, JP Nagar, Bangalore - 560078, Karnataka. Contact: +91 99449 43333 | trees@pabt.in.
                  </p>
                </div>
              </>
            )}

            {activeModal === "disclosures" && (
              <>
                <p>
                  PABT Foundation is registered with the Ministry of Corporate Affairs and statutory bodies, upholding total governance and financial transparency.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                    <p className="text-xs font-bold text-emerald-500">12A Tax Exempt</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Income Tax Non-Profit Status</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                    <p className="text-xs font-bold text-emerald-500">80G Tax Deductible</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">50% Tax Exemption Receipts</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                    <p className="text-xs font-bold text-emerald-500">CSR-1 Registered</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">MCA Approved for Corporate CSR</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
                    <p className="text-xs font-bold text-emerald-500">GuideStar Certified</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Verified Transparency Level</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-black/20 flex justify-end">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
}
