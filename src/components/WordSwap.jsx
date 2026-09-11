import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./WordSwap.css";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Cycles a word in place, with the wrapper sized to whichever word is showing
 * so the rest of the headline sits tight against it.
 *
 * Every word stays mounted as a grid item in one shared cell. Because each item
 * is `justify-items: start` + `nowrap`, it sizes to its own text regardless of
 * the wrapper's width — which is what makes the measurement here reliable, and
 * is why an earlier hidden-copy measurer did not work.
 *
 * The highlighter sits on each word rather than the wrapper, so the marker hugs
 * whichever word is showing.
 */
export default function WordSwap({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);
  const [hasCycled, setHasCycled] = useState(false);
  const [widths, setWidths] = useState(null);
  const wordEls = useRef([]);

  useLayoutEffect(() => {
    const measure = () => {
      const next = wordEls.current.map((el) =>
        el ? el.getBoundingClientRect().width : 0
      );
      // bail if nothing moved, so the observer below can't feed itself
      setWidths((prev) =>
        prev &&
        prev.length === next.length &&
        prev.every((w, i) => Math.abs(w - next[i]) < 0.5)
          ? prev
          : next
      );
    };

    measure();
    document.fonts?.ready.then(measure);

    const observer = new ResizeObserver(measure);
    wordEls.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [words]);

  useEffect(() => {
    if (reduced() || words.length < 2) return undefined;

    const id = setInterval(() => {
      setHasCycled(true);
      setIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => clearInterval(id);
  }, [words.length, interval]);

  const previous = hasCycled ? (index - 1 + words.length) % words.length : -1;
  const width = widths?.[index];

  return (
    <span
      className="swap"
      style={width ? { width: `${width}px` } : undefined}
      aria-label={words.join(" or ")}
    >
      {words.map((word, i) => (
        <span
          key={word}
          ref={(el) => {
            wordEls.current[i] = el;
          }}
          className={`swap__word hl${i === index ? " is-current" : ""}${
            i === previous && i !== index ? " is-leaving" : ""
          }`}
          aria-hidden={i === index ? undefined : "true"}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
