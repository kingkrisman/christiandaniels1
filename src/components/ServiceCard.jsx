import useTilt from "../hooks/useTilt";

/**
 * One sticky note. Three nested transforms, each owned by a different layer:
 * the slot drops in, the card holds its tilt and hover lift, and the tilt
 * hook writes --tilt-x / --tilt-y for the cursor lean.
 */
export default function ServiceCard({ service, index, Icon }) {
  const tilt = useTilt(7);

  return (
    <li
      className="card-slot"
      data-reveal="card"
      style={{ "--d": `${index * 130}ms` }}
    >
      <article
        className={`card card--${service.tone} card--pos${index + 1}`}
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        <span
          className={`card__tool hand-note ${
            service.toolTone === "plain" ? "" : `hl hl--${service.toolTone}`
          }`}
        >
          {service.tool}
        </span>
        <span className="card__icon">
          <Icon />
        </span>
        <h3 className="card__title">{service.title}</h3>
        <span className="card__sheen" aria-hidden="true" />
      </article>
    </li>
  );
}
