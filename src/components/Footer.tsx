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
      text: "+91 95006 66668",
      href: "tel:+919500666668",
    },
    {
      icon: <MapPin size={16} className="text-[#3ca2fa]" />,
      text: "Chennai & Bengaluru, India",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Pabtin/100092687792417/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/pabt.in/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/pabt-in/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/pabt_in",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCh2qE_xP05WVJtJ08BYeSzg",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <footer className="relative bg-[#070908] text-gray-300 overflow-hidden font-sans border-t border-emerald-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            
            {/* Column 1: Brand & Mission */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-white.png"
                  alt="PABT Foundation"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </Link>

              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                Restoring degraded ecosystems through Miyawaki dense urban forests, watershed rejuvenation, and nationwide youth climate action.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>80G / 12A / CSR-1 Registered Non-Profit</span>
              </div>
            </div>

            {/* Column 2: Pillars */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                PABT Pillars
              </h4>
              <ul className="space-y-2.5 text-sm">
                {missionLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-green-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Organization */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Organization
              </h4>
              <ul className="space-y-2.5 text-sm">
                {foundationLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-green-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
                {joinUsLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-green-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Contact & Support
              </h4>
              <ul className="space-y-3 text-sm">
                {contactInfo.map(({ icon, text, href }) => (
                  <li key={text} className="flex items-center gap-2.5">
                    {icon}
                    {href ? (
                      <a href={href} className="hover:text-green-400 transition-colors">
                        {text}
                      </a>
                    ) : (
                      <span>{text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons & Bottom Bar */}
          <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            {/* Social icons */}
            <div className="flex space-x-5">
              {socialLinks.map(({ label, href, icon }) => (
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
    </>
  );
}
