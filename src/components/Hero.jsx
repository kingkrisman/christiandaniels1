import { SideArrow } from "./graphics/Arrow";
import Doodles from "./graphics/Doodles";
import WordSwap from "./WordSwap";
import useAim from "../hooks/useAim";
import useMagnetic from "../hooks/useMagnetic";
import { profile } from "../data/content";
import portrait from "../assets/chris.png";
import "./Hero.css";

const VERBS = ["design", "build"];

/* The side arrow already points up-left; aim leans it from there. */
const SIDE_ARROW_HEADING = 209;

const DOODLES = [
  { kind: "cursor", x: "2.4%", y: "56%", mx: "88%", my: "3%", size: 22, depth: 1.5, rotate: -12 },
  { kind: "tags", x: "93%", y: "40%", mx: "70%", my: "2%", size: 30, depth: 1.8, rotate: -6 },
  { kind: "shield", x: "93%", y: "74%", mx: "88%", my: "12%", size: 28, depth: 1.1, rotate: 8 },
  { kind: "terminal", x: "40%", y: "93%", mx: "86%", my: "80%", size: 32, depth: 1.6, rotate: -5 },
  { kind: "semi", x: "25%", y: "91%", size: 34, depth: 2.2, rotate: 4, desktopOnly: true },
];

export default function Hero() {
  const arrowRef = useAim(SIDE_ARROW_HEADING, 18);
  const magnet = useMagnetic();

  return (
    <section className="hero shell" id="top">
      <Doodles items={DOODLES} />

      <div className="hero__badge" data-reveal="up">
        <span className="hero__portrait">
          <img
            src={portrait}
            alt={`Illustration of ${profile.fullName}`}
            width="436"
            height="572"
          />
        </span>

        <span className="hero__arrow" ref={arrowRef} style={{ "--d": "420ms" }}>
          <SideArrow />
        </span>

        <span
          className="hero__note"
          data-reveal="up"
          style={{ "--d": "700ms", "--hl-delay": "220ms" }}
        >
          <span className="hero__name hand-note hl">
            {[...profile.name].map((char, i) => (
              <span
                key={`${char}-${i}`}
                className="hero__name-ch"
                style={{ "--d": `${980 + i * 85}ms` }}
              >
                {char}
              </span>
            ))}
          </span>
        </span>
      </div>

      <div className="hero__grid">
        <h1 className="hero__title" data-reveal="words">
          <span className="word" style={{ "--d": "180ms" }}>
            I
          </span>
          {/* highlighter lives on each swapped word, not this wrapper */}
          <span
            className="word word--swap"
            style={{ "--d": "270ms", "--hl-delay": "420ms" }}
          >
            <WordSwap words={VERBS} />
          </span>
          <span className="word" style={{ "--d": "360ms" }}>
            top
          </span>
          <span className="word" style={{ "--d": "450ms" }}>
            notch
          </span>
          <span className="word" style={{ "--d": "540ms" }}>
            web
          </span>
          <span className="word" style={{ "--d": "630ms" }}>
            applications
            <i className="caret" aria-hidden="true" />
          </span>
        </h1>

        <div className="hero__aside">
          <p className="hero__intro" data-reveal="up" style={{ "--d": "520ms" }}>
            {profile.intro}
          </p>
          {/* the reveal lives on the wrapper so it can't overwrite the
              magnetic transform on the button itself */}
          <span className="hero__cta" data-reveal="up" style={{ "--d": "640ms" }}>
            <a
              className="btn"
              href="#contact"
              ref={magnet.ref}
              onPointerMove={magnet.onPointerMove}
              onPointerLeave={magnet.onPointerLeave}
            >
              Hire me
            </a>
          </span>

          <p className="hero__status" data-reveal="up" style={{ "--d": "760ms" }}>
            <span className="hero__status-dot" aria-hidden="true" />
            <span className="hero__status-text">{profile.status}</span>
            <span className="hero__status-sep" aria-hidden="true">
              //
            </span>
            <span className="hero__status-text">react · node · security</span>
          </p>
        </div>
      </div>
    </section>
  );
}
