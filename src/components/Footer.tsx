"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export default function Footer() {
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
              Engage & Act
            </h4>
            <ul className="space-y-3 text-sm">
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
              <li>
                <Link
                  href="/share-story"
                  className="hover:text-[#3ca2fa] transition-colors flex items-center"
                >
                  Share Your Story
                  <span className="ml-2 w-1.5 h-1.5 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                </Link>
              </li>
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
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-gray-400">Privacy Policy</Link>
            <Link href="/" className="hover:text-gray-400">Terms of Service</Link>
            <Link href="/" className="hover:text-gray-400">Disclosures</Link>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} PABT Foundation. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[22rem] -mt-40 -mb-28 justify-center items-center">
        <TextHoverEffect text="PABT" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
