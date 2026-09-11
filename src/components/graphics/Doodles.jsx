import "./Doodles.css";

/**
 * Margin scribbles. The layout reads UI/UX on its own, so these bring in the
 * other two halves of the CV — software and IT/security — as the kind of
 * glyphs you'd doodle next to your notes.
 *
 * Every one parallaxes off the shared --px/--py pointer field.
 *
 * Desktop has wide margins to fill; a phone doesn't, so each doodle carries a
 * second position (`mx`/`my`) that drops it into the gap above a section
 * instead. Pass `desktopOnly` for the ones there's simply no room for.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const SHAPES = {
  /* --- IT & security --- */
  lock: (
    <svg viewBox="0 0 24 28" {...stroke} aria-hidden="true">
      <rect x="3" y="11" width="18" height="15" rx="3" />
      <path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11" />
      <path d="M12 17v4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 28" {...stroke} aria-hidden="true">
      <path d="M12 2l9 3.5v8.5c0 6-4 10-9 12-5-2-9-6-9-12V5.5L12 2Z" />
      <path d="M8 14l3 3 5.5-6" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 28 22" {...stroke} aria-hidden="true">
      <path d="M2 8a18 18 0 0 1 24 0" />
      <path d="M6.5 12.5a12 12 0 0 1 15 0" />
      <path d="M11 17a6 6 0 0 1 6 0" />
      <path d="M14 20.4v.2" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 30 16" {...stroke} aria-hidden="true">
      <circle cx="7" cy="8" r="5" />
      <path d="M12 8h16M24 8v4M20 8v3" />
    </svg>
  ),
  bug: (
    <svg viewBox="0 0 26 28" {...stroke} aria-hidden="true">
      <rect x="8" y="8" width="10" height="14" rx="5" />
      <path d="M8 12H3M8 17H2.5M18 12h5M18 17h5.5M10 8l-2-3M16 8l2-3M11 21.5l-2 3.5M15 21.5l2 3.5" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 28 26" {...stroke} aria-hidden="true">
      <circle cx="14" cy="4" r="3" />
      <circle cx="4" cy="21" r="3" />
      <circle cx="24" cy="21" r="3" />
      <path d="M14 7v6.5M12.4 15l-6 3.6M15.6 15l6 3.6" />
    </svg>
  ),
  fingerprint: (
    <svg viewBox="0 0 24 26" {...stroke} aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 16 0v3" />
      <path d="M8 12a4 4 0 0 1 8 0v5" />
      <path d="M12 12v8" />
      <path d="M20 18v2M4 16v3" />
    </svg>
  ),

  /* --- software --- */
  terminal: (
    <svg viewBox="0 0 30 24" {...stroke} aria-hidden="true">
      <rect x="2" y="2" width="26" height="20" rx="3" />
      <path d="M2 7h26" />
      <path d="M7 12l3 3-3 3M13 18h7" />
    </svg>
  ),
  branch: (
    <svg viewBox="0 0 22 28" {...stroke} aria-hidden="true">
      <circle cx="6" cy="5" r="3" />
      <circle cx="6" cy="23" r="3" />
      <circle cx="17" cy="10" r="3" />
      <path d="M6 8v12M17 13c0 4-11 2-11 7" />
    </svg>
  ),

  /* --- UI/UX --- */
  cursor: (
    <svg viewBox="0 0 18 22" {...stroke} aria-hidden="true">
      <path d="M2 2l13 8-5.6 1.6L7 19 2 2Z" />
    </svg>
  ),
  nib: (
    <svg viewBox="0 0 20 26" {...stroke} aria-hidden="true">
      <path d="M10 2l7 12-7 10-7-10 7-12Z" />
      <path d="M10 9v9M3.6 14h12.8" />
    </svg>
  ),
  frame: (
    <svg viewBox="0 0 26 26" {...stroke} aria-hidden="true">
      <path d="M2 8V2h6M18 2h6v6M24 18v6h-6M8 24H2v-6" />
    </svg>
  ),
};

/* text glyphs carry the rest of the software half */
const GLYPHS = {
  tags: "</>",
  braces: "{ }",
  prompt: "$ _",
  semi: ";",
  binary: "01001",
  arrowfn: "=>",
  hook: "useRef()",
  sudo: "sudo",
  port: ":443",
  ssh: "ssh",
  npm: "npm i",
  nullish: "??",
  sha: "0xA7F",
};

export function Doodle({
  kind,
  x,
  y,
  mx,
  my,
  size = 30,
  mSize,
  depth = 1,
  rotate = 0,
  desktopOnly = false,
}) {
  const glyph = GLYPHS[kind];

  return (
    <span
      className={`doodle ${glyph ? "doodle--glyph" : ""} ${
        desktopOnly ? "doodle--desktop" : ""
      }`}
      aria-hidden="true"
      style={{
        "--x": x,
        "--y": y,
        "--mx": mx ?? x,
        "--my": my ?? y,
        "--size": `${size}px`,
        "--m-size": `${mSize ?? Math.round(size * 0.8)}px`,
        "--depth": depth,
        "--rot": `${rotate}deg`,
      }}
    >
      {glyph ?? SHAPES[kind]}
    </span>
  );
}

/** Renders a set of doodles positioned against the nearest positioned parent. */
export default function Doodles({ items = [] }) {
  return (
    <div className="doodles" aria-hidden="true">
      {items.map((item, i) => (
        <Doodle key={`${item.kind}-${i}`} {...item} />
      ))}
    </div>
  );
}
