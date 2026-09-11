import useMagnetic from "../hooks/useMagnetic";

/** Footer link that leans toward the cursor as you reach for it. */
export default function SocialLink({ label, href }) {
  const magnet = useMagnetic(0.28, 6);

  return (
    <a
      className="footer__social"
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={magnet.ref}
      onPointerMove={magnet.onPointerMove}
      onPointerLeave={magnet.onPointerLeave}
    >
      {label}
    </a>
  );
}
