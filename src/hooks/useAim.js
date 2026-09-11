import { useEffect, useRef } from "react";
import { subscribe } from "../lib/pointer";

/**
 * Swings an element toward the cursor.
 *
 * `base` is the direction the artwork already points, in degrees (screen
 * coords, 0 = right, +y down). The offset between that heading and the cursor
 * is mapped across `swing` rather than clamped to it — clamping pinned the
 * arrows to their limit almost everywhere and read as a snap, where scaling
 * keeps them tracking smoothly wherever the pointer is.
 */
export default function useAim(base = 0, swing = 16) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return subscribe((px, py) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width) return;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const heading = (Math.atan2(py - cy, px - cx) * 180) / Math.PI;

      // wrap into -180..180, then map that range onto the swing
      const delta = ((heading - base + 540) % 360) - 180;
      const rotation = (delta / 180) * swing;

      el.style.setProperty("--aim", `${rotation.toFixed(2)}deg`);
    });
  }, [base, swing]);

  return ref;
}
