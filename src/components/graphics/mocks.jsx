/**
 * Placeholder thumbnails drawn as SVG so the build needs no binary assets.
 * Each one sketches the product it stands for. Swap any of them for a real
 * screenshot by giving the project an `image` in src/data/content.js.
 */

/** NeuroLens — adaptive reading surface with a focus band and controls. */
export function NeuroLensMock() {
  const lines = [
    [28, 118], [40, 96], [52, 126], [64, 82],
    [96, 122], [108, 104], [120, 130], [132, 90],
    [164, 118], [176, 128], [188, 96],
  ];
  return (
    <svg viewBox="0 0 320 284" className="mock" aria-hidden="true">
      <rect width="320" height="284" fill="#eeeafc" />

      {/* reading page */}
      <rect x="74" y="14" width="176" height="256" rx="9" fill="#fff" />
      <rect x="90" y="30" width="88" height="8" rx="4" fill="#2c2a3f" />

      {lines.map(([y, w]) => (
        <rect key={y} x="90" y={y + 20} width={w} height="5" rx="2.5" fill="#c8c4da" />
      ))}

      {/* the focus band that follows the reader */}
      <rect x="82" y="140" width="160" height="26" rx="5" fill="#ffb07a" opacity="0.55" />
      <rect x="90" y="150" width="132" height="5" rx="2.5" fill="#5c4632" />
      <path d="M82 140h160M82 166h160" stroke="#dd6a1e" strokeWidth="1.2" />

      {/* left rail of reading controls */}
      <g>
        <rect x="12" y="42" width="44" height="30" rx="7" fill="#fff" />
        <text
          x="34"
          y="63"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="#2c2a3f"
        >
          Aa
        </text>
        <rect x="12" y="82" width="44" height="30" rx="7" fill="#fff" />
        <path
          d="M22 92h24M22 97h24M22 102h24"
          stroke="#8e88a8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="12" y="122" width="44" height="30" rx="7" fill="#1e3a6b" />
        <circle cx="34" cy="137" r="8" fill="none" stroke="#fff" strokeWidth="2.2" />
        <circle cx="34" cy="137" r="2.6" fill="#ffb07a" />
      </g>

      {/* pace slider */}
      <rect x="266" y="60" width="8" height="164" rx="4" fill="#fff" />
      <rect x="266" y="118" width="8" height="60" rx="4" fill="#1e3a6b" />
      <circle cx="270" cy="118" r="9" fill="#ffb07a" stroke="#1e3a6b" strokeWidth="2" />

      <rect x="74" y="14" width="176" height="256" rx="9" fill="none" stroke="#d5cfee" />
    </svg>
  );
}

/** KÀWÉ — live quiz with options, progress and score. */
export function KaweMock() {
  const options = [
    { y: 122, fill: "#e8f6ec", stroke: "#86e29b", w: 168 },
    { y: 156, fill: "#f4f2fa", stroke: "#ddd8ec", w: 152 },
    { y: 190, fill: "#f4f2fa", stroke: "#ddd8ec", w: 176 },
    { y: 224, fill: "#f4f2fa", stroke: "#ddd8ec", w: 140 },
  ];
  return (
    <svg viewBox="0 0 320 284" className="mock" aria-hidden="true">
      <rect width="320" height="284" fill="#fdf1e3" />

      {/* progress + score chips */}
      <rect x="26" y="20" width="200" height="9" rx="4.5" fill="#eadfd1" />
      <rect x="26" y="20" width="128" height="9" rx="4.5" fill="#ff9147" />
      <rect x="240" y="14" width="56" height="22" rx="11" fill="#1e3a6b" />
      <text
        x="268"
        y="29"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#fff"
      >
        7/10
      </text>

      {/* question card */}
      <rect x="26" y="48" width="270" height="56" rx="9" fill="#1e3a6b" />
      <rect x="42" y="66" width="132" height="7" rx="3.5" fill="#fff" />
      <rect x="42" y="80" width="94" height="6" rx="3" fill="#8fa6ca" />
      <circle cx="272" cy="76" r="15" fill="#ffb07a" />
      <text
        x="272"
        y="82"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="#1e3a6b"
      >
        ?
      </text>

      {/* answer options */}
      {options.map((o, i) => (
        <g key={o.y}>
          <rect
            x="26"
            y={o.y}
            width="270"
            height="26"
            rx="7"
            fill={o.fill}
            stroke={o.stroke}
            strokeWidth="1.6"
          />
          <circle
            cx="42"
            cy={o.y + 13}
            r="7"
            fill={i === 0 ? "#86e29b" : "#fff"}
            stroke={i === 0 ? "#4caf6d" : "#cfc9e0"}
            strokeWidth="1.6"
          />
          {i === 0 && (
            <path
              d="M38.5 43.2l2.6 2.8 4.4-5"
              transform={`translate(0 ${o.y - 30})`}
              fill="none"
              stroke="#1d5c34"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <rect x="58" y={o.y + 10} width={o.w} height="6" rx="3" fill="#a9a2bd" />
        </g>
      ))}
    </svg>
  );
}

/** Daniels Network — live player with a channel strip. */
export function StreamingMock() {
  return (
    <svg viewBox="0 0 320 284" className="mock" aria-hidden="true">
      <rect width="320" height="284" fill="#141a28" />

      {/* player */}
      <rect x="18" y="18" width="284" height="158" rx="8" fill="#22304e" />
      <circle cx="160" cy="92" r="30" fill="#ffb07a" />
      <path d="M152 78l22 14-22 14z" fill="#141a28" />

      {/* live badge */}
      <rect x="32" y="32" width="54" height="20" rx="10" fill="#e8425a" />
      <circle cx="45" cy="42" r="4" fill="#fff" />
      <text
        x="66"
        y="46"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fontWeight="700"
        fill="#fff"
      >
        LIVE
      </text>

      {/* scrubber */}
      <rect x="32" y="152" width="256" height="5" rx="2.5" fill="#39496d" />
      <rect x="32" y="152" width="150" height="5" rx="2.5" fill="#ff9147" />
      <circle cx="182" cy="154.5" r="7" fill="#fff" />

      {/* channel strip */}
      <text
        x="18"
        y="204"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fontWeight="600"
        fill="#94a3c4"
      >
        Channels
      </text>
      {[18, 92, 166, 240].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="214"
            width="64"
            height="44"
            rx="6"
            fill={i === 0 ? "#2e4372" : "#1d2740"}
            stroke={i === 0 ? "#ffb07a" : "#2a3a5c"}
            strokeWidth={i === 0 ? 2 : 0}
          />
          <rect x={x + 8} y="222" width="30" height="4" rx="2" fill="#5b6c95" />
          <rect x={x + 8} y="231" width="44" height="4" rx="2" fill="#3c4a6d" />
          <circle cx={x + 32} cy="248" r="6" fill="#ffb07a" opacity={i === 0 ? 1 : 0.35} />
        </g>
      ))}
    </svg>
  );
}

/** DA'SAYONCE — property search and listing cards. */
export function PropertyMock() {
  return (
    <svg viewBox="0 0 320 284" className="mock" aria-hidden="true">
      <rect width="320" height="284" fill="#eef1ea" />

      {/* search bar */}
      <rect x="20" y="16" width="228" height="28" rx="14" fill="#fff" />
      <circle cx="40" cy="30" r="6" fill="none" stroke="#8d9a86" strokeWidth="2" />
      <path d="M44.5 34.5l4 4" stroke="#8d9a86" strokeWidth="2" strokeLinecap="round" />
      <rect x="56" y="27" width="92" height="6" rx="3" fill="#c3ccbd" />
      <rect x="258" y="16" width="42" height="28" rx="8" fill="#1e3a6b" />
      <path
        d="M268 26h22M268 31h22M268 36h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* featured listing */}
      <rect x="20" y="58" width="280" height="106" rx="8" fill="#cdd8e8" />
      <path d="M20 132l60-44 52 34 44-30 124 62v14H20z" fill="#9fb2cb" />
      <path d="M196 92l36-26 68 48v22H196z" fill="#8ba1bf" />
      <circle cx="252" cy="84" r="12" fill="#ffd9a0" />
      <rect x="34" y="132" width="84" height="20" rx="10" fill="#101010" />
      <text
        x="76"
        y="146"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#fff"
      >
        ₦45M
      </text>

      {/* listing cards */}
      {[20, 165].map((x, i) => (
        <g key={x}>
          <rect x={x} y="176" width="135" height="92" rx="8" fill="#fff" />
          <rect x={x + 10} y="186" width="115" height="42" rx="5" fill={i ? "#d8ddd3" : "#cfd9e6"} />
          <path
            d={`M${x + 10} ${228}l30-22 26 17 24-15 35 20v0h-115z`}
            fill={i ? "#b3bcac" : "#a8b8ce"}
          />
          <rect x={x + 10} y="236" width="74" height="6" rx="3" fill="#3a4436" />
          <rect x={x + 10} y="248" width="52" height="5" rx="2.5" fill="#aab3a4" />
          <rect x={x + 92} y="244" width="33" height="15" rx="7.5" fill="#ffb07a" />
        </g>
      ))}
    </svg>
  );
}

export const mocks = {
  neurolens: NeuroLensMock,
  kawe: KaweMock,
  streaming: StreamingMock,
  property: PropertyMock,
};
