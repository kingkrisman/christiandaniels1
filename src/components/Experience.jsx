import SectionIntro from "./SectionIntro";
import Doodles from "./graphics/Doodles";
import { experience } from "../data/content";
import "./Experience.css";

const DOODLES = [
  { kind: "lock", x: "3%", y: "56%", mx: "7%", my: "2%", size: 24, depth: 1.5, rotate: -8 },
  { kind: "node", x: "13%", y: "80%", mx: "84%", my: "2%", size: 27, depth: 1.1, rotate: 7 },
  { kind: "port", x: "4%", y: "88%", mx: "48%", my: "2.4%", size: 18, depth: 2, rotate: -3 },
  { kind: "ssh", x: "3.5%", y: "70%", mx: "26%", my: "2.4%", size: 18, depth: 1.7, rotate: 5 },
];

export default function Experience() {
  return (
    <section className="section experience shell" id="experience">
      <Doodles items={DOODLES} />
      <div className="experience__layout">
        <SectionIntro
          index="04 // track record"
          label="Work Experience"
          note={
            <>
              Building and shipping
              <br />
              products since 2019
            </>
          }
        />

        <div className="xp" data-reveal="frame">
          {/* hand-ruled frame, drawn past its own corners */}
          <span className="xp__rule xp__rule--top rule-draw-x" aria-hidden="true" />
          <span
            className="xp__rule xp__rule--bottom rule-draw-x"
            style={{ "--d": "180ms" }}
            aria-hidden="true"
          />
          <span
            className="xp__rule xp__rule--left rule-draw-y"
            style={{ "--d": "90ms" }}
            aria-hidden="true"
          />
          <span
            className="xp__rule xp__rule--right rule-draw-y"
            style={{ "--d": "270ms" }}
            aria-hidden="true"
          />

          <ol className="xp__list">
            {experience.map((job, i) => (
              <li
                key={job.id}
                className="xp__item"
                data-reveal="up"
                style={{ "--d": `${260 + i * 110}ms` }}
              >
                <span
                  className={`xp__num xp__num--${job.tone}`}
                  data-reveal="pop"
                  style={{ "--d": `${340 + i * 110}ms` }}
                >
                  {i + 1}
                </span>
                <div className="xp__body">
                  <h3 className="xp__role">
                    {job.role} <strong>{job.company}</strong>
                  </h3>
                  <p className="xp__detail">{job.detail}</p>
                  <p className="xp__date">{job.date}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
