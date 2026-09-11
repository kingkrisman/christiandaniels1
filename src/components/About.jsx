import SectionIntro from "./SectionIntro";
import Doodles from "./graphics/Doodles";
import { about } from "../data/content";
import "./About.css";

const DOODLES = [
  { kind: "nib", x: "3%", y: "54%", mx: "8%", my: "2%", size: 22, depth: 1.3, rotate: -9 },
  { kind: "branch", x: "13%", y: "72%", mx: "82%", my: "2%", size: 25, depth: 1.6, rotate: 6 },
  { kind: "npm", x: "4%", y: "86%", mx: "46%", my: "2.2%", size: 17, depth: 2, rotate: -3 },
  { kind: "fingerprint", x: "94%", y: "8%", size: 24, depth: 1.7, rotate: 7, desktopOnly: true },
];

export default function About() {
  return (
    <section className="section about shell" id="about">
      <Doodles items={DOODLES} />

      <div className="about__layout">
        <SectionIntro
          index="01 // about"
          label="About me"
          note={
            <>
              Computer Science, and
              <br />
              everything after it self-taught
            </>
          }
        />

        <div className="about__body">
          {about.paragraphs.map((text, i) => (
            <p
              key={text.slice(0, 24)}
              className="about__para"
              data-reveal="up"
              style={{ "--d": `${i * 110}ms` }}
            >
              {text}
            </p>
          ))}

          <ul className="about__facts">
            {about.facts.map((fact, i) => (
              <li
                key={fact.label}
                className={`fact fact--${fact.tone}`}
                data-reveal="pop"
                style={{ "--d": `${340 + i * 110}ms` }}
              >
                <span className="fact__value">{fact.value}</span>
                <span className="fact__label">{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
