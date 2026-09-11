import { useCallback, useRef } from "react";

/**
 * Card-local cursor tilt. Writes `--tilt-x` / `--tilt-y` on the element so the
 * CSS decides how to compose them with whatever rotation it already has.
 * Spread the returned handlers onto the element you pass `ref` to.
 */
export default function useTilt(max = 7) {
  const ref = useRef(null);

  const onPointerMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el || event.pointerType !== "mouse") return;

      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      el.style.setProperty("--tilt-y", `${(px * max * 2).toFixed(2)}deg`);
      el.style.setProperty("--tilt-x", `${(-py * max * 2).toFixed(2)}deg`);
    },
    [max]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
