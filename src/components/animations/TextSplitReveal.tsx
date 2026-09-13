"use client";

import { motion, Variants } from "framer-motion";

interface TextSplitRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  splitBy?: "words" | "characters";
  once?: boolean;
}

export default function TextSplitReveal({
  text,
  as: Component = "h2",
  className = "",
  delay = 0.1,
  stagger = 0.03,
  splitBy = "words",
  once = true,
}: TextSplitRevealProps) {
  const items = splitBy === "words" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: "110%",
      opacity: 0,
      rotateX: -20,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.01 }}
        variants={containerVariants}
        className="inline-flex flex-wrap gap-x-[0.25em]"
      >
        {items.map((item, index) => (
          <span key={index} className="overflow-hidden inline-block py-[0.05em]">
            <motion.span variants={itemVariants} className="inline-block">
              {item}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
