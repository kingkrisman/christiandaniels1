import { profile } from "../../data/content";
import "./Logo.css";

/**
 * The mark: a C drawn as one open arc, with a block caret sitting in its
 * mouth. Reads as the initial and as a terminal cursor — the same caret that
 * blinks after the headline.
 */
export function CMark({ size = 26, className = "" }) {
  return (
    <svg
      className={`c-mark ${className}`}
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        className="c-mark__arc"
        d="M23.03 8.2A10.5 10.5 0 1 0 23.03 23.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <rect
        className="c-mark__caret"
        x="22.6"
        y="13.2"
        width="5.6"
        height="5.6"
        rx="1.4"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Logo({ size = 26, word = profile.name }) {
  return (
    <span className="logo" style={{ "--logo-size": `${size}px` }}>
      <CMark size={size} className="logo__mark" />
      <span className="logo__word">{word}</span>
    </span>
  );
}
