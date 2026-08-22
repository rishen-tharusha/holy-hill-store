"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

type RevealType =
  | "fade-up"
  | "fade-down"
  // | "fade-left"
  // | "fade-right"
  | "zoom"
  | "blur"
  | "scale-up";

interface IScrollRevealProps {
  children: ReactNode;
  type?: RevealType;
  delay?: number;
  duration?: number;
}

const animations = {
  "fade-up": {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  },

  "fade-down": {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
  },

  // "fade-left": {
  //   initial: { opacity: 0, x: -40 },
  //   animate: { opacity: 1, x: 0 },
  // },

  // "fade-right": {
  //   initial: { opacity: 0, x: 40 },
  //   animate: { opacity: 1, x: 0 },
  // },

  zoom: {
    initial: { opacity: 0, scale: 0.75 },
    animate: { opacity: 1, scale: 1 },
  },

  "scale-up": {
    initial: { opacity: 0, scale: 0.85, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
  },

  blur: {
    initial: { opacity: 0, filter: "blur(15px)", y: 30 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export default function ScrollReveal({
  children,
  type = "fade-up",
  delay = 0,
  duration = 1.4,
}: IScrollRevealProps) {
  const animation = animations[type];

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}