import Logo from "./graphics/Logo";
import SocialLink from "./SocialLink";
import { socials, profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__rule" aria-hidden="true" />

      <div className="footer__inner shell">
        <a
          className="footer__logo"
          href="#top"
          aria-label={`${profile.name} — back to top`}
          data-reveal="up"
        >
          <Logo size={26} />
        </a>

        <div className="footer__end">
          <ul className="footer__socials">
            {socials.map((s, i) => (
              <li key={s.label} data-reveal="pop" style={{ "--d": `${i * 90}ms` }}>
                <SocialLink {...s} />
              </li>
            ))}
          </ul>
          <p className="footer__copy" data-reveal="up" style={{ "--d": "300ms" }}>
            Copyright. {profile.fullName} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
