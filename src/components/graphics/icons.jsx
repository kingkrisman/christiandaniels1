/** Sticker icons that sit on the three service cards. */

export function PencilIcon({ size = 78 }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      <g transform="rotate(-38 20 20)">
        <rect x="15" y="4" width="10" height="6" rx="1.6" fill="#f26d6d" />
        <rect x="15" y="10" width="10" height="19" fill="#f6c53f" />
        <path d="M15 10h5v19h-5z" fill="#fbe08a" />
        <path d="M15 29h10l-5 7z" fill="#f0d9b5" />
        <path d="M17.6 33.4h4.8L20 36z" fill="#101010" />
        <rect
          x="15"
          y="4"
          width="10"
          height="25"
          rx="1.6"
          fill="none"
          stroke="#101010"
          strokeWidth="1.6"
        />
        <path
          d="M15 29l5 7 5-7"
          fill="none"
          stroke="#101010"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function CodeIcon({ size = 72 }) {
  return (
    <svg viewBox="0 0 48 40" width={size} height={(size / 48) * 40} aria-hidden="true">
      <rect
        x="2"
        y="3"
        width="44"
        height="34"
        rx="5"
        fill="#fdfdfb"
        stroke="#101010"
        strokeWidth="2.4"
      />
      <path d="M2 11h44" stroke="#101010" strokeWidth="2.4" />
      <circle cx="8.5" cy="7" r="1.6" fill="#f26d6d" />
      <circle cx="14" cy="7" r="1.6" fill="#f6c53f" />
      <circle cx="19.5" cy="7" r="1.6" fill="#86e29b" />
      <path
        d="M17 18l-6 6 6 6M31 18l6 6-6 6M27 16l-6 16"
        fill="none"
        stroke="#1e3a6b"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ size = 66 }) {
  return (
    <svg viewBox="0 0 38 42" width={size} height={(size / 38) * 42} aria-hidden="true">
      <path
        d="M19 2l15 5v14c0 10-6.4 16.2-15 19C10.4 37.2 4 31 4 21V7l15-5Z"
        fill="#1e3a6b"
        stroke="#101010"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 20.5l5 5.5 10-11"
        fill="none"
        stroke="#fdfdfb"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon({ size = 64 }) {
  return (
    <svg viewBox="0 0 44 40" width={size} height={(size / 44) * 40} aria-hidden="true">
      <path
        d="M4 20c5-8 11-12 18-12s13 4 18 12c-5 8-11 12-18 12S9 28 4 20Z"
        fill="#fdfdfb"
        stroke="#101010"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="20" r="8.5" fill="#1e3a6b" />
      <circle cx="22" cy="20" r="4" fill="#101010" />
      <circle cx="24.2" cy="17.4" r="1.5" fill="#fdfdfb" />
    </svg>
  );
}

export function SparkIcon({ size = 62 }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true">
      <path
        d="M20 2c1.6 9.4 4.8 14.4 16 18-11.2 3.6-14.4 8.6-16 18-1.6-9.4-4.8-14.4-16-18C15.2 16.4 18.4 11.4 20 2Z"
        fill="#ff9147"
        stroke="#101010"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Little pennant that flags each project's discipline. */
export function FlagIcon({ color = "var(--accent-deep)", size = 16 }) {
  return (
    <svg viewBox="0 0 16 22" width={size} height={(size / 16) * 22} aria-hidden="true">
      <path d="M3 1v20" stroke="#101010" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M3.6 2.2 14.4 7 3.6 12.4z"
        fill={color}
        stroke="#101010"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
