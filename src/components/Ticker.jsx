import { skills } from "../data/content";
import "./Ticker.css";

/**
 * Scrolling strip of the CV's core skills. Carries the software and security
 * side of the page at full width, and unlike the margin doodles it reads the
 * same on a phone.
 */
export default function Ticker() {
  const group = (
    <ul className="ticker__group">
      {skills.map((s) => (
        <li key={s.label} className={`ticker__item ticker__item--${s.kind}`}>
          <span className="ticker__dot" aria-hidden="true" />
          {s.label}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="ticker" aria-label="Tools and technologies">
      <div className="ticker__track">
        {group}
        {/* second copy makes the loop seamless; hidden from assistive tech */}
        <div aria-hidden="true" className="ticker__clone">
          {group}
        </div>
      </div>
    </section>
  );
}
