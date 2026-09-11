/**
 * The squiggly pointer that sits under every section label.
 * One shape, reused: a stroke that bows right, doubles back and
 * lands in an arrowhead aimed down-left.
 *
 * pathLength="1" normalises every path to a single dash unit, so the
 * .stroke-draw trace-on in index.css works without measuring anything.
 */
export function CurlArrow({ className = "", width = 48 }) {
  return (
    <svg
      className={`curl-arrow ${className}`}
      viewBox="0 0 44 58"
      width={width}
      fill="none"
      aria-hidden="true"
    >
      <path
        className="stroke-draw"
        pathLength="1"
        d="M28 3Q8 18 24 30 38 40 14 52"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        className="stroke-draw stroke-draw--head"
        pathLength="1"
        d="M24 52.2 14 52l5.8-8.1"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The long arrow reaching back from the name note to the portrait. */
export function SideArrow({ width = 88 }) {
  return (
    <svg
      className="side-arrow"
      viewBox="0 0 88 24"
      width={width}
      fill="none"
      aria-hidden="true"
    >
      <path
        className="stroke-draw"
        pathLength="1"
        d="M84 5Q56 22 34 16 22 12.5 12 7"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        className="stroke-draw stroke-draw--head"
        pathLength="1"
        d="M18 16.2 12 7l11 .2"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
