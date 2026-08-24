"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

export interface MissionDomain {
  name: string;
  shortName: string;
  pathway: string;
  description: string;
  accentColor: string;
  image: string;
  href: string;
  index: number;
}

interface MissionSliderProps {
  domains: MissionDomain[];
}

export default function MissionSlider({ domains }: MissionSliderProps) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number, dir: "left" | "right") => {
      if (isAnimating || next === active) return;
      setIsAnimating(true);
      setTextVisible(false);
      setPrev(active);
      setDirection(dir);

      setTimeout(() => {
        setActive(next);
        setPrev(null);
        setIsAnimating(false);
        setTimeout(() => setTextVisible(true), 80);
      }, 620);
    },
    [active, isAnimating]
  );

  const goNext = useCallback(() => {
    go((active + 1) % domains.length, "right");
  }, [active, domains.length, go]);

  const goPrev = useCallback(() => {
    go((active - 1 + domains.length) % domains.length, "left");
  }, [active, domains.length, go]);

  // Auto-advance every 5s
  useEffect(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    autoRef.current = setTimeout(goNext, 5000);
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [active, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const leftIdx = (active - 1 + domains.length) % domains.length;
  const rightIdx = (active + 1) % domains.length;

  return (
    <div className="mission-slider-root" aria-label="Mission Slider">
      {/* Full-screen slide container */}
      <div className="mission-slider-stage">
        {/* Background slides */}
        {domains.map((domain, i) => {
          const isActive = i === active;
          const isPrev = i === prev;
          let cls = "mission-slide";
          if (isActive) cls += direction === "right" ? " slide-enter-right" : " slide-enter-left";
          else if (isPrev) cls += direction === "right" ? " slide-exit-left" : " slide-exit-right";
          else cls += " slide-hidden";

          return (
            <div key={domain.name} className={cls} aria-hidden={!isActive}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={domain.image}
                alt={domain.name}
                className="mission-slide-img"
                draggable={false}
              />
              <div className="mission-slide-overlay" style={{ "--accent": domain.accentColor } as React.CSSProperties} />
            </div>
          );
        })}

        {/* Peeking side labels — left */}
        <div
          className="peek peek-left"
          onClick={goPrev}
          role="button"
          tabIndex={0}
          aria-label={`Go to ${domains[leftIdx].shortName}`}
          onKeyDown={(e) => e.key === "Enter" && goPrev()}
        >
          <span className="peek-label">{domains[leftIdx].shortName}</span>
        </div>

        {/* Peeking side labels — right */}
        <div
          className="peek peek-right"
          onClick={goNext}
          role="button"
          tabIndex={0}
          aria-label={`Go to ${domains[rightIdx].shortName}`}
          onKeyDown={(e) => e.key === "Enter" && goNext()}
        >
          <span className="peek-label">{domains[rightIdx].shortName}</span>
        </div>

        {/* Center content */}
        <div className={`mission-center-content ${textVisible ? "content-visible" : "content-hidden"}`}>
          <span
            className="mission-pathway-tag"
            style={{ color: domains[active].accentColor, borderColor: domains[active].accentColor + "44" }}
          >
            {domains[active].pathway}
          </span>
          <h2 className="mission-title">{domains[active].name}</h2>
          <p className="mission-desc">{domains[active].description}</p>
          <div className="mission-actions">
            <Link
              href={domains[active].href}
              className="mission-cta-btn"
              style={{ background: domains[active].accentColor }}
            >
              Explore Pathway
            </Link>
            <button className="mission-next-btn" onClick={goNext} aria-label="Next mission">
              <span className="mission-next-label">Next</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mission-dots">
          {domains.map((d, i) => (
            <button
              key={d.name}
              className={`mission-dot ${i === active ? "dot-active" : ""}`}
              style={i === active ? { background: domains[active].accentColor } : {}}
              onClick={() => go(i, i > active ? "right" : "left")}
              aria-label={`Go to ${d.shortName}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="mission-counter">
          <span className="mission-counter-current"
            style={{ color: domains[active].accentColor }}>
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="mission-counter-sep">/</span>
          <span className="mission-counter-total">{String(domains.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Tab nav strip below */}
      <div className="mission-tabs-strip">
        {domains.map((d, i) => (
          <button
            key={d.name}
            className={`mission-tab ${i === active ? "tab-active" : ""}`}
            style={i === active ? { "--tab-accent": d.accentColor } as React.CSSProperties : {}}
            onClick={() => go(i, i > active ? "right" : "left")}
          >
            <span className="tab-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="tab-name">{d.shortName}</span>
            {i === active && (
              <span className="tab-indicator" style={{ background: d.accentColor }} />
            )}
          </button>
        ))}
      </div>

      <style>{`
        .mission-slider-root {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .mission-slider-stage {
          position: relative;
          width: 100%;
          height: 88vh;
          min-height: 520px;
          max-height: 900px;
          overflow: hidden;
          background: #0a0a0a;
        }

        /* ── Slides ── */
        .mission-slide {
          position: absolute;
          inset: 0;
          will-change: transform, opacity;
        }

        .mission-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          pointer-events: none;
          user-select: none;
        }

        .mission-slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.1) 0%,
            rgba(0,0,0,0.35) 40%,
            rgba(0,0,0,0.72) 100%
          );
        }

        /* Transition states */
        .slide-enter-right {
          animation: slideInFromRight 0.62s cubic-bezier(0.76, 0, 0.24, 1) forwards;
          z-index: 3;
        }
        .slide-enter-left {
          animation: slideInFromLeft 0.62s cubic-bezier(0.76, 0, 0.24, 1) forwards;
          z-index: 3;
        }
        .slide-exit-left {
          animation: slideOutToLeft 0.62s cubic-bezier(0.76, 0, 0.24, 1) forwards;
          z-index: 2;
        }
        .slide-exit-right {
          animation: slideOutToRight 0.62s cubic-bezier(0.76, 0, 0.24, 1) forwards;
          z-index: 2;
        }
        .slide-hidden {
          opacity: 0;
          z-index: 1;
          transform: translateX(100%);
        }

        @keyframes slideInFromRight {
          from { transform: translateX(100%); opacity: 0.6; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); opacity: 0.6; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes slideOutToLeft {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(-12%); opacity: 0; }
        }
        @keyframes slideOutToRight {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(12%); opacity: 0; }
        }

        /* ── Peek edges ── */
        .peek {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 11%;
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: width 0.3s ease;
        }
        .peek:hover { width: 13%; }

        .peek-left  { left: 0;  justify-content: flex-start; background: linear-gradient(to right, rgba(0,0,0,0.45), transparent); padding-left: 20px; }
        .peek-right { right: 0; justify-content: flex-end;   background: linear-gradient(to left,  rgba(0,0,0,0.45), transparent); padding-right: 20px; }

        .peek-label {
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 800;
          color: rgba(255,255,255,0.22);
          letter-spacing: -2px;
          line-height: 1;
          white-space: nowrap;
          transition: color 0.25s;
          font-family: inherit;
          text-shadow: 0 2px 20px rgba(0,0,0,0.4);
          writing-mode: horizontal-tb;
        }
        .peek:hover .peek-label { color: rgba(255,255,255,0.55); }

        /* ── Center content ── */
        .mission-center-content {
          position: absolute;
          bottom: 0;
          left: 12%;
          right: 12%;
          z-index: 10;
          padding-bottom: 100px;
          padding-left: 24px;
          transition: opacity 0.32s ease, transform 0.32s ease;
        }
        .content-visible  { opacity: 1; transform: translateY(0); }
        .content-hidden   { opacity: 0; transform: translateY(18px); }

        .mission-pathway-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: 1px solid;
          border-radius: 100px;
          padding: 4px 14px;
          margin-bottom: 16px;
          backdrop-filter: blur(8px);
          background: rgba(0,0,0,0.2);
        }

        .mission-title {
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -2px;
          margin: 0 0 16px;
          text-shadow: 0 4px 32px rgba(0,0,0,0.5);
        }

        .mission-desc {
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          color: rgba(255,255,255,0.78);
          max-width: 480px;
          line-height: 1.65;
          margin: 0 0 32px;
        }

        .mission-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .mission-cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 13px 30px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          color: #fff;
          text-decoration: none;
          transition: filter 0.2s, transform 0.2s;
          box-shadow: 0 4px 24px rgba(0,0,0,0.35);
        }
        .mission-cta-btn:hover { filter: brightness(1.12); transform: translateY(-2px); }

        .mission-next-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 100px;
          border: 1.5px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .mission-next-btn:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.6);
          transform: translateY(-2px);
        }
        .mission-next-label { font-size: 0.85rem; }

        /* ── Dots ── */
        .mission-dots {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 8px;
        }
        .mission-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          padding: 0;
        }
        .dot-active {
          transform: scale(1.4);
        }

        /* ── Counter ── */
        .mission-counter {
          position: absolute;
          top: 28px;
          right: 36px;
          z-index: 10;
          display: flex;
          align-items: baseline;
          gap: 4px;
          font-weight: 700;
        }
        .mission-counter-current { font-size: 1.5rem; line-height: 1; }
        .mission-counter-sep { color: rgba(255,255,255,0.3); font-size: 1rem; }
        .mission-counter-total { color: rgba(255,255,255,0.4); font-size: 0.9rem; }

        /* ── Tab strip ── */
        .mission-tabs-strip {
          display: flex;
          width: 100%;
          border-top: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(16px);
        }
        :root.dark .mission-tabs-strip {
          background: rgba(11,15,14,0.97);
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .mission-tab {
          flex: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 18px 8px 16px;
          cursor: pointer;
          border: none;
          background: transparent;
          transition: background 0.2s;
          overflow: hidden;
        }
        .mission-tab:hover { background: rgba(0,0,0,0.03); }
        :root.dark .mission-tab:hover { background: rgba(255,255,255,0.04); }

        .tab-num {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #9ca3af;
          font-family: monospace;
        }
        .tab-active .tab-num { color: var(--tab-accent, #16a34a); }

        .tab-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #6b7280;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        :root.dark .tab-name { color: #9ca3af; }
        .tab-active .tab-name { color: #111; }
        :root.dark .tab-active .tab-name { color: #f9fafb; }

        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 3px 3px 0 0;
          animation: tabIndicatorIn 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes tabIndicatorIn {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* Responsive */
        @media (max-width: 640px) {
          .mission-center-content { left: 5%; right: 5%; padding-bottom: 80px; }
          .peek { width: 7%; }
          .peek-label { font-size: 1.5rem; }
          .tab-name { font-size: 0.68rem; }
          .mission-tabs-strip { overflow-x: auto; }
          .mission-tab { min-width: 80px; padding: 14px 6px 12px; }
        }
      `}</style>
    </div>
  );
}
