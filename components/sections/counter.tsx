"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  target: number;
  duration: number; // in milliseconds
}

export default function Counter({
  target = 100,
  duration = 2000,
  className,
  ...props
}: Props) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const start = 0;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;

      const progressRatio = Math.min(progress / duration, 1); // clamp to 1
      const eased = easeOutQuad(progressRatio); // easing function
      const current = Math.floor(start + eased * (target - start));

      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [target, duration]);

  return (
    <div
      className={cn(
        "flex justify-center md:justify-start mb-2 text-[#F5F7FA]",
        className
      )}
      {...props}
    >
      <span className="flex text-5xl font-extrabold mb-2 ">{count}</span>
      <span className="flex text-5xl font-extrabold mb-2">+</span>
    </div>
  );
}

// Optional: easeOutQuad function for smoother animation
function easeOutQuad(t: number) {
  return t * (2 - t);
}
