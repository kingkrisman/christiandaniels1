import Logo from "./graphics/Logo";
import { profile } from "../data/content";
import "./Header.css";

export default function Header() {
  return (
    <header className="header shell">
      <div className="header__row">
        <a className="header__logo" href="#top" aria-label={`${profile.name} — home`}>
          <Logo size={24} />
        </a>
        <nav className="header__nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Portfolio</a>
          <a href={profile.cv} target="_blank" rel="noreferrer">
            CV
          </a>
          <a className="header__hire" href="#contact">
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
