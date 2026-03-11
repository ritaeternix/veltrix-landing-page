"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  delay?: number;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  delay = 0,
  duration = 2,
}: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const delayMs = delay * 1000;

          const animate = (now: number) => {
            const elapsed = now - start - delayMs;
            if (elapsed < 0) {
              requestAnimationFrame(animate);
              return;
            }
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, delay, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
