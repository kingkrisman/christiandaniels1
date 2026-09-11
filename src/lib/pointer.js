/**
 * One pointer listener for the whole page.
 *
 * Publishes the cursor two ways:
 *  - as `--px` / `--py` on :root (-1..1 from the viewport centre) so plain CSS
 *    can react with calc(), no JS per element;
 *  - to subscribers, for anything that needs its own geometry (arrows aiming).
 *
 * Reads are batched into one rAF so a fast mouse can't thrash layout.
 */

let x = 0;
let y = 0;
let nx = 0;
let ny = 0;
let active = false;
let frameId = 0;
let running = false;

const subscribers = new Set();

export function pointerState() {
  return { x, y, nx, ny, active };
}

export function subscribe(fn) {
  subscribers.add(fn);
  if (active) fn(x, y);
  return () => subscribers.delete(fn);
}

function flush() {
  frameId = 0;
  const root = document.documentElement;
  root.style.setProperty("--px", nx.toFixed(4));
  root.style.setProperty("--py", ny.toFixed(4));
  subscribers.forEach((fn) => fn(x, y));
}

function onMove(event) {
  x = event.clientX;
  y = event.clientY;
  nx = (x / window.innerWidth) * 2 - 1;
  ny = (y / window.innerHeight) * 2 - 1;
  active = true;
  if (!frameId) frameId = requestAnimationFrame(flush);
}

/** Returns a teardown. No-ops on touch, and when motion is turned down. */
export function startPointerField() {
  if (running) return () => {};
  if (typeof window === "undefined") return () => {};
  if (!window.matchMedia("(pointer: fine)").matches) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  running = true;
  document.documentElement.classList.add("pointer-field");
  window.addEventListener("pointermove", onMove, { passive: true });

  return () => {
    running = false;
    document.documentElement.classList.remove("pointer-field");
    window.removeEventListener("pointermove", onMove);
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
  };
}
