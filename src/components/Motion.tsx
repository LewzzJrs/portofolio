"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";

const directions = {
  up: { y: 120 },
  left: { x: -160 },
  right: { x: 160 },
  zoom: { scale: 0.7 },
};

type Direction = keyof typeof directions;

type MotionProps = {
  children: ReactNode;
  className?: string;
};

export function revealProps(from: Direction = "up", delay = 0) {
  return {
    initial: { opacity: 0, filter: "blur(12px)", ...directions[from] },
    whileInView: { opacity: 1, filter: "blur(0px)", x: 0, y: 0, scale: 1 },
    viewport: { once: false, margin: "0px 0px -80px 0px" },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
  };
}

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  className,
  from,
  delay,
}: MotionProps & { from?: Direction; delay?: number }) {
  return (
    <motion.div className={className} {...revealProps(from, delay)}>
      {children}
    </motion.div>
  );
}

export function Lift({ children, className }: MotionProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -14, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 320, damping: 16 }}
    >
      {children}
    </motion.div>
  );
}
