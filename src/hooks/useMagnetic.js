import { useCallback, useRef } from "react";

/** Pulls a small target a few pixels toward the cursor while it's nearby. */
export default function useMagnetic(strength = 0.32, maxPx = 9) {
  const ref = useRef(null);

  const onPointerMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el || event.pointerType !== "mouse") return;

      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const clamp = (n) => Math.max(-maxPx, Math.min(maxPx, n * strength));

      el.style.setProperty("--mag-x", `${clamp(dx).toFixed(1)}px`);
      el.style.setProperty("--mag-y", `${clamp(dy).toFixed(1)}px`);
    },
    [strength, maxPx]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mag-x", "0px");
    el.style.setProperty("--mag-y", "0px");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
