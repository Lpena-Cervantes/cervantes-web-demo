import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Section wrapper for consistent spacing + optional scroll animations
 *
 * Props:
 *  - id: section id for anchor links
 *  - className: extra class names
 *  - style: inline styles
 *  - noReveal: if true, disables framer-motion reveal (always visible)
 */
export default function Section({
  id,
  className = "",
  children,
  style,
  noReveal = false,
}) {
  const prefersReduced = useReducedMotion();

  // If noReveal is true, render without animation
  if (noReveal) {
    return (
      <section id={id} className={`section ${className}`} style={style}>
        <div className="container">{children}</div>
      </section>
    );
  }

  // Default animated section
  return (
    <section id={id} className={`section ${className}`} style={style}>
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  );
}
