import { useEffect, useRef } from "react";

export default function useReveal(options = { threshold: 0.12 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = 1; el.style.transform = "none";
      return;
    }

    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transition = "opacity .5s ease, transform .5s ease";
        el.style.opacity = 1;
        el.style.transform = "none";
        io.disconnect();
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return ref;
}
