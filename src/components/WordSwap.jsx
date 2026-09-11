import { useEffect, useState } from "react";
import "./WordSwap.css";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Cycles a word in place.
 *
 * Every word stays mounted, stacked in one grid cell, so the wrapper is always
 * as wide as the longest one and the rest of the headline never moves. The
 * highlighter sits on each word rather than the wrapper, so the marker hugs
 * whichever word is showing.
 *
 * Since we only ever step forward by one, the outgoing word is simply the
 * index before this one — no second state, and no side effects inside the
 * state updater.
 */
export default function WordSwap({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);
  const [hasCycled, setHasCycled] = useState(false);

  useEffect(() => {
    if (reduced() || words.length < 2) return undefined;

    const id = setInterval(() => {
      setHasCycled(true);
      setIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => clearInterval(id);
  }, [words.length, interval]);

  const previous = hasCycled ? (index - 1 + words.length) % words.length : -1;

  return (
    <span className="swap" aria-label={words.join(" or ")}>
      {words.map((word, i) => (
        <span
          key={word}
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
