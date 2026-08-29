"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const MISSIONS = [
  {
    shortName: "Nature",
    pathway: "PABT Nature",
    description: "Forest restoration & biodiversity",
    accentColor: "#16a34a",
    image: "/nature_hero.png",
    href: "/nature",
  },
  {
    shortName: "Circularity",
    pathway: "PABT Circular",
    description: "Waste diversion & circular economy",
    accentColor: "#f59e0b",
    image: "/circular_hero.png",
    href: "/circular",
  },
  {
    shortName: "Clean Energy",
    pathway: "PABT Future",
    description: "Solar micro-grids & climate-tech",
    accentColor: "#06b6d4",
    image: "/future_hero.png",
    href: "/future",
  },
  {
    shortName: "ESG & CSR",
    pathway: "PABT ESG",
    description: "BRSR disclosures & audits",
    accentColor: "#8b5cf6",
    image: "/esg_hero.png",
    href: "/esg",
  },
  {
    shortName: "Community",
    pathway: "PABT Community",
    description: "Green livelihoods & eco-clubs",
    accentColor: "#f97316",
    image: "/community_hero.png",
    href: "/community",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [missionsOpen, setMissionsOpen] = useState(false);
  const [joinUsOpen, setJoinUsOpen] = useState(false);
  const [hoveredMission, setHoveredMission] = useState(0);
  const [prevHovered, setPrevHovered] = useState<number | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const joinUsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { name: "About PABT", href: "/about" },
    { name: "Our 5 Missions", href: "/missions", hasMega: true },
    { name: "Projects", href: "/projects" },
    { name: "Insights", href: "/insights" },
    { name: "Join Us", href: "/join-us", hasJoinUsDropdown: true },
  ];

  const JOIN_US_ITEMS = [
    {
      name: "Volunteer",
      href: "/volunteer",
      description: "Grassroots environmental action & tree drives",
      icon: (
        <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      badge: "Grassroots",
    },
    {
      name: "Intern",
      href: "/intern",
      description: "Hands-on sustainability & eco-research programs",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      badge: "Programs",
    },
    {
      name: "Career",
      href: "/career",
      description: "Full-time roles driving India's green movement",
      icon: (
        <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      badge: "Hiring",
    },
    {
      name: "Partner",
      href: "/partner",
      description: "Corporate CSR, ESG auditing & strategic alliances",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      badge: "CSR & ESG",
    },
  ];

  const openMissions = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMissionsOpen(true);
  }, []);

  const closeMissions = useCallback(() => {
    closeTimer.current = setTimeout(() => setMissionsOpen(false), 120);
  }, []);

  const openJoinUs = useCallback(() => {
    if (joinUsTimer.current) clearTimeout(joinUsTimer.current);
    setJoinUsOpen(true);
  }, []);

  const closeJoinUs = useCallback(() => {
    joinUsTimer.current = setTimeout(() => setJoinUsOpen(false), 120);
  }, []);

  const handleMissionHover = (i: number) => {
    if (i === hoveredMission) return;
    setPrevHovered(hoveredMission);
    setHoveredMission(i);
  };

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMissionsOpen(false);
        setJoinUsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setMissionsOpen(false);
    setJoinUsOpen(false);
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav shadow-lg" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-black.png"
                alt="PABT Foundation"
                className="h-8 sm:h-9 w-auto dark:hidden transition-transform duration-300 group-hover:scale-105"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-white.png"
                alt="PABT Foundation"
                className="hidden h-8 sm:h-9 w-auto dark:block transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.hasMega && pathname?.startsWith("/missions"));
              if (link.hasMega) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={openMissions}
                    onMouseLeave={closeMissions}
                  >
                    <Link
                      href={link.href}
                      className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 px-1 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 ${
                        isActive ? "text-gray-900 dark:text-white font-bold" : "text-gray-500 dark:text-gray-300"
                      }`}
                      aria-expanded={missionsOpen}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${missionsOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full" />
                      )}
                    </Link>

                    {/* Vineyard-style Mega Menu */}
                    {missionsOpen && (
                      <div
                        className="missions-mega-menu"
                        onMouseEnter={openMissions}
                        onMouseLeave={closeMissions}
                      >
                        {/* Image preview panel */}
                        <div className="mega-preview-panel">
                          {MISSIONS.map((m, i) => {
                            const isHov = i === hoveredMission;
                            const wasPrev = i === prevHovered;
                            return (
                              <div
                                key={m.shortName}
                                className={`mega-preview-img ${isHov ? "img-active" : wasPrev ? "img-prev" : "img-hidden"}`}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={m.image} alt={m.shortName} />
                                <div
                                  className="mega-preview-grad"
                                  style={{ background: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1))` }}
                                />
                              </div>
                            );
                          })}
                          {/* Active mission name overlay */}
                          <div className="mega-preview-label">
                            <span
                              className="mega-preview-pathway"
                              style={{ color: MISSIONS[hoveredMission].accentColor }}
                            >
                              {MISSIONS[hoveredMission].pathway}
                            </span>
                            <p className="mega-preview-name">{MISSIONS[hoveredMission].shortName}</p>
                          </div>
                        </div>

                        {/* Mission tabs list */}
                        <div className="mega-list-panel">
                          <div className="mega-list-header">
                            <span className="mega-list-label">Our 5 Missions</span>
                            <Link
                              href="/missions"
                              className="mega-view-all"
                              style={{ color: MISSIONS[hoveredMission].accentColor }}
                            >
                              View all →
                            </Link>
                          </div>
                          <div className="mega-mission-list">
                            {MISSIONS.map((m, i) => (
                              <Link
                                key={m.shortName}
                                href={m.href}
                                className={`mega-mission-item ${i === hoveredMission ? "mega-item-active" : ""}`}
                                onMouseEnter={() => handleMissionHover(i)}
                                style={
                                  i === hoveredMission
                                    ? ({ "--item-accent": m.accentColor } as React.CSSProperties)
                                    : {}
                                }
                              >
                                <span
                                  className="mega-item-dot"
                                  style={{ background: m.accentColor }}
                                />
                                <div className="mega-item-text">
                                  <span className="mega-item-num">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span className="mega-item-name">{m.shortName}</span>
                                  <span className="mega-item-desc">{m.description}</span>
                                </div>
                                <svg
                                  className="mega-item-arrow"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  width="14"
                                  height="14"
                                >
                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (link.hasJoinUsDropdown) {
                const isJoinActive =
                  pathname?.startsWith("/join-us") ||
                  pathname === "/volunteer" ||
                  pathname === "/intern" ||
                  pathname === "/career" ||
                  pathname === "/partner";
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={openJoinUs}
                    onMouseLeave={closeJoinUs}
                  >
                    <Link
                      href={link.href}
                      className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 px-1 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 ${
                        isJoinActive ? "text-gray-900 dark:text-white font-bold" : "text-gray-500 dark:text-gray-300"
                      }`}
                      aria-expanded={joinUsOpen}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${joinUsOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                      {isJoinActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full" />
                      )}
                    </Link>

                    {/* Join Us Rich Dropdown Menu */}
                    {joinUsOpen && (
                      <div
                        className="joinus-dropdown-menu"
                        onMouseEnter={openJoinUs}
                        onMouseLeave={closeJoinUs}
                      >
                        <div className="px-4 py-2.5 border-b border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                            Ways to get involved
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            Join Movement
                          </span>
                        </div>
                        <div className="p-1.5 space-y-1">
                          {JOIN_US_ITEMS.map((item) => {
                            const isSubActive = pathname === item.href || pathname === `/join-us${item.href}`;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 ${
                                  isSubActive
                                    ? "bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30"
                                    : "hover:bg-gray-100/80 dark:hover:bg-white/[0.05] border border-transparent"
                                }`}
                              >
                                <div className="p-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-200 flex-shrink-0">
                                  {item.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className={`text-sm font-bold tracking-tight transition-colors ${
                                      isSubActive
                                        ? "text-emerald-600 dark:text-emerald-400"
                                        : "text-gray-900 dark:text-white group-hover:text-emerald-500"
                                    }`}>
                                      {item.name}
                                    </span>
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors">
                                      {item.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1 leading-snug font-medium">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 px-1 hover:text-gray-900 dark:hover:text-white ${
                    isActive ? "text-gray-900 dark:text-white font-bold" : "text-gray-500 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 rounded-full" />
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-bold tracking-wider rounded-lg transition-all duration-300 shadow-md hover:shadow-green-500/20 transform hover:-translate-y-[1px]"
            >
              PARTNER
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-950/95 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-bold"
                      : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Join Us sub-list */}
            <div className="px-3 pt-2 pb-2 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Join Us</p>
              <div className="grid grid-cols-2 gap-2">
                {JOIN_US_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-400">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile missions sub-list */}
            <div className="px-3 pt-1 pb-2">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Missions</p>
              <div className="grid grid-cols-2 gap-2">
                {MISSIONS.map((m) => (
                  <Link
                    key={m.shortName}
                    href={m.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: m.accentColor }} />
                    {m.shortName}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-3 py-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center w-full px-5 py-3 bg-green-600 hover:bg-green-500 text-white text-base font-bold tracking-wider rounded-lg transition-all duration-300 shadow-md"
              >
                PARTNER WITH US
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ── Mega menu container ── */
        .missions-mega-menu {
          position: fixed;
          top: 92px;
          left: 50%;
          transform: translateX(-50%);
          width: min(680px, calc(100vw - 32px));
          display: flex;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 24px 60px -8px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06);
          animation: megaFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 100;
        }

        @keyframes megaFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0)     scale(1); }
        }

        :root.dark .missions-mega-menu {
          box-shadow: 0 24px 60px -8px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06);
        }

        /* ── Preview image panel (left) ── */
        .mega-preview-panel {
          position: relative;
          width: 260px;
          flex-shrink: 0;
          overflow: hidden;
          background: #111;
          min-height: 300px;
        }

        .mega-preview-img {
          position: absolute;
          inset: 0;
        }
        .mega-preview-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .mega-preview-grad {
          position: absolute;
          inset: 0;
        }

        .img-active {
          z-index: 2;
          animation: previewFadeIn 0.35s ease forwards;
        }
        .img-prev {
          z-index: 1;
          opacity: 0;
        }
        .img-hidden {
          z-index: 0;
          opacity: 0;
        }

        @keyframes previewFadeIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }

        .mega-preview-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 20px 18px;
          background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
        }
        .mega-preview-pathway {
          display: block;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .mega-preview-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          margin: 0;
          line-height: 1.1;
        }

        /* ── Mission list panel (right) ── */
        .mega-list-panel {
          flex: 1;
          background: #fff;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
        }
        :root.dark .mega-list-panel {
          background: #0f1410;
        }

        .mega-list-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px 14px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          margin-bottom: 6px;
        }
        :root.dark .mega-list-header {
          border-bottom-color: rgba(255,255,255,0.06);
        }

        .mega-list-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9ca3af;
          font-family: monospace;
        }

        .mega-view-all {
          font-size: 0.72rem;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .mega-view-all:hover { opacity: 0.75; }

        .mega-mission-list {
          display: flex;
          flex-direction: column;
        }

        .mega-mission-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 20px;
          text-decoration: none;
          transition: background 0.15s;
          position: relative;
          cursor: pointer;
        }
        .mega-mission-item:hover {
          background: rgba(0,0,0,0.03);
        }
        :root.dark .mega-mission-item:hover {
          background: rgba(255,255,255,0.04);
        }

        .mega-item-active {
          background: rgba(0,0,0,0.04);
        }
        :root.dark .mega-item-active {
          background: rgba(255,255,255,0.05);
        }
        .mega-item-active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          bottom: 6px;
          width: 3px;
          border-radius: 0 2px 2px 0;
          background: var(--item-accent, #16a34a);
        }

        .mega-item-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .mega-item-text {
          flex: 1;
          display: flex;
          align-items: baseline;
          gap: 8px;
          min-width: 0;
        }

        .mega-item-num {
          font-size: 0.6rem;
          font-family: monospace;
          font-weight: 700;
          color: #9ca3af;
          flex-shrink: 0;
        }

        .mega-item-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: #111;
          white-space: nowrap;
        }
        :root.dark .mega-item-name { color: #f3f4f6; }

        .mega-item-desc {
          font-size: 0.72rem;
          color: #9ca3af;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mega-item-arrow {
          flex-shrink: 0;
          color: #d1d5db;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.15s, transform 0.15s;
        }
        .mega-mission-item:hover .mega-item-arrow,
        .mega-item-active .mega-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Join Us Dropdown Menu ── */
        .joinus-dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: -24px;
          width: 320px;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.04);
          backdrop-filter: blur(16px);
          animation: joinUsFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 100;
          overflow: hidden;
        }

        :root.dark .joinus-dropdown-menu {
          background: rgba(15, 20, 16, 0.96);
          border-color: rgba(34, 197, 94, 0.2);
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        @keyframes joinUsFadeIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
      `}</style>
    </nav>
  );
}
