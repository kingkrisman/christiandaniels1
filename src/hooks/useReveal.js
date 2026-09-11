import { useEffect } from "react";

/**
 * Watches every [data-reveal] element on the page and adds `is-in` the
 * first time it scrolls into view. One observer for the whole document
 * rather than a ref per component, so markup stays declarative.
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
