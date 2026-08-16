import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.1,
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          right-0
          h-[2px]
          origin-left
          z-[9999]
          pointer-events-none
          bg-gradient-to-r
          from-blue-500
          via-blue-300
          to-white
        "
        style={{ scaleX }}
      />

      {/* Subtle Glow */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          right-0
          h-[2px]
          origin-left
          z-[9998]
          pointer-events-none
          bg-gradient-to-r
          from-blue-500/30
          via-blue-300/20
          to-white/20
          blur-[2px]
        "
        style={{ scaleX }}
      />
    </>
  );
}