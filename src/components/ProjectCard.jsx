import useTilt from "../hooks/useTilt";
import { FlagIcon } from "./graphics/icons";
import { mocks } from "./graphics/mocks";

const flagColor = {
  accent: "var(--accent-deep)",
  blue: "var(--blue-deep)",
  yellow: "var(--yellow-deep)",
  green: "var(--green)",
};

export default function ProjectCard({ project, index }) {
  const Mock = mocks[project.mock];
  const tilt = useTilt(5);

  return (
    <li className="project-slot" data-reveal="up" style={{ "--d": `${(index % 2) * 110}ms` }}>
      <article
        className="project hand"
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        <a
          className="project__link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          <figure className="project__figure">
            <div className="project__shot hand">
              {project.image ? (
                <img src={project.image} alt={project.title} loading="lazy" />
              ) : (
                <Mock />
              )}
            </div>
            <figcaption className="project__foot">
              <span className="project__head">
                <h3 className="project__title">{project.title}</h3>
                <span className="project__stack">{project.stack}</span>
              </span>
              <span className="project__tag-wrap">
                <span className="project__flag">
                  <FlagIcon color={flagColor[project.tone]} />
                </span>
                <span className={`project__tag project__tag--${project.tone}`}>
                  {project.tag}
                </span>
              </span>
            </figcaption>
          </figure>
        </a>
      </article>
    </li>
  );
}
