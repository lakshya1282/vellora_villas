"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MaskRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "center";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function MaskReveal({
  children,
  direction = "up",
  delay = 0.05,
  duration = 0.8,
  className = "",
  once = true,
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: "some",
    margin: "0px 0px -40px 0px",
  });

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 32, x: 0 };
      case "down":
        return { y: -32, x: 0 };
      case "left":
        return { x: -32, y: 0 };
      case "right":
        return { x: 32, y: 0 };
      case "center":
        return { scale: 0.96 };
      default:
        return { y: 32, x: 0 };
    }
  };

  const offset = getOffset();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{
          ...offset,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                y: 0,
                x: 0,
                scale: 1,
                opacity: 1,
              }
            : {
                ...offset,
                opacity: 0,
              }
        }
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
