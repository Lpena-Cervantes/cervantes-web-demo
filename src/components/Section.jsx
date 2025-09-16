import { motion, useReducedMotion } from "framer-motion";

export default function Section({ id, className = "", children, style }) {
  const prefersReduced = useReducedMotion();
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
