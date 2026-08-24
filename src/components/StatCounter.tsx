"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  animate: boolean;
  duration?: number;
}

export default function StatCounter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  animate,
  duration = 1600,
}: StatCounterProps) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!animate || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, target, duration]);

  return (
    <span>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
