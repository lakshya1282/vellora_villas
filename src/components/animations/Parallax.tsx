"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // e.g. -0.2 (moves slower/opposite), 0.3 (moves faster)
  className?: string;
  direction?: "vertical" | "horizontal";
}

export default function Parallax({
  children,
  speed = 0.2,
  className = "",
  direction = "vertical",
}: ParallaxProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Calculate pixel movement based on speed factor starting cleanly at 0 when at top of page
  const movement = speed * 250;
  
  const rawY = useTransform(scrollYProgress, [0, 1], [0, movement]);
  const rawX = useTransform(scrollYProgress, [0, 1], [0, movement]);

  const smoothY = useSpring(rawY, { stiffness: 100, damping: 20 });
  const smoothX = useSpring(rawX, { stiffness: 100, damping: 20 });

  return (
    <div ref={targetRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y: direction === "vertical" ? smoothY : 0,
          x: direction === "horizontal" ? smoothX : 0,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
