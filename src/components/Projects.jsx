import SectionIntro from "./SectionIntro";
import ProjectCard from "./ProjectCard";
import Doodles from "./graphics/Doodles";
import { projects, landingPages } from "../data/content";
import "./Projects.css";

const DOODLES = [
  { kind: "binary", x: "3%", y: "58%", mx: "8%", my: "2%", size: 17, depth: 1.6, rotate: -4 },
  { kind: "prompt", x: "5%", y: "68%", mx: "46%", my: "1.6%", size: 22, depth: 2.1, rotate: 3 },
  { kind: "bug", x: "14%", y: "80%", mx: "78%", my: "2%", size: 26, depth: 1.3, rotate: -9 },
  { kind: "branch", x: "3.4%", y: "90%", mx: "88%", my: "97%", size: 26, depth: 1.5, rotate: 7 },
  { kind: "frame", x: "94%", y: "4%", size: 24, depth: 1.8, rotate: 6, desktopOnly: true },
];

export default function Projects() {
  return (
    <section className="section projects shell" id="projects">
      <Doodles items={DOODLES} />

      <div className="projects__layout">
        <SectionIntro
          index="03 // shipped"
          label="Featured Projects"
          note={
            <>
              Founder &amp; lead dev on
              <br />3 original products
            </>
          }
        />

        <ul className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </ul>

        <div className="landings" data-reveal="up">
          <h3 className="landings__label">Landing pages</h3>
          <ul className="landings__list">
            {landingPages.map((page) => (
              <li key={page.id}>
                <a
                  className="landings__link"
                  href={page.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="landings__title">{page.title}</span>
                  <span className="landings__host">{new URL(page.href).host}</span>
                  <span className="landings__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
