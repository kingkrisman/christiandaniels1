import { useState } from "react";
import SectionIntro from "./SectionIntro";
import Doodles from "./graphics/Doodles";
import { profile, formAccessKey } from "../data/content";
import "./Contact.css";

const EMPTY = { name: "", email: "", about: "" };

const DOODLES = [
  { kind: "shield", x: "28%", y: "22%", mx: "6%", my: "2%", size: 26, depth: 1.4, rotate: 9 },
  { kind: "key", x: "33%", y: "54%", mx: "80%", my: "2%", size: 30, depth: 1.8, rotate: -6 },
  { kind: "wifi", x: "26%", y: "80%", mx: "44%", my: "2%", size: 26, depth: 1.1, rotate: 4 },
  { kind: "sha", x: "20%", y: "92%", size: 17, depth: 1.9, rotate: 4, desktopOnly: true },
  { kind: "hook", x: "93%", y: "6%", size: 16, depth: 2.1, rotate: -4, desktopOnly: true },
];

const FIELDS = [
  {
    key: "name",
    id: "f-name",
    label: "Name",
    tone: "",
    placeholder: "Your name",
    type: "text",
    autoComplete: "name",
  },
  {
    key: "email",
    id: "f-email",
    label: "Your email",
    tone: " hl--yellow",
    placeholder: "you@company.com",
    type: "email",
    autoComplete: "email",
  },
  {
    key: "about",
    id: "f-about",
    label: "About Project",
    tone: " hl--blue",
    placeholder: "I want to discuss you about ........",
    type: "text",
  },
];

const MESSAGES = {
  sending: "Sending…",
  sent: "Thanks — that's landed in my inbox. I'll reply shortly.",
  error: "That didn't send. Try again, or email me directly.",
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState("idle");

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (state !== "sending") setState("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state === "sending") return;

    // Web3Forms' own honeypot — a real person never fills this in.
    if (e.target.botcheck?.checked) return;

    setState("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: formAccessKey,
          subject: `Portfolio enquiry from ${form.name}`,
          from_name: "Portfolio contact form",
          name: form.name,
          email: form.email,
          replyto: form.email,
          message: form.about,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setState("sent");
        setForm(EMPTY);
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <section className="section contact shell" id="contact">
      <Doodles items={DOODLES} />
      <div className="contact__layout">
        <SectionIntro
          index="05 // get in touch"
          label="Contact here"
          note={
            <>
              Have a project idea?
              <br />
              just say me <strong>Hi</strong>.
            </>
          }
        />

        <form className="form" onSubmit={handleSubmit}>
          {FIELDS.map((f, i) => (
            <div
              className="field"
              key={f.key}
              data-reveal="up"
              style={{ "--d": `${i * 120}ms` }}
            >
              <label className={`field__label hand-note hl${f.tone}`} htmlFor={f.id}>
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.key}
                type={f.type}
                autoComplete={f.autoComplete}
                required
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={update(f.key)}
                disabled={state === "sending"}
              />
            </div>
          ))}

          <input
            type="checkbox"
            name="botcheck"
            className="form__botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <p className="form__secure" data-reveal="up" style={{ "--d": "320ms" }}>
            <span className="form__secure-icon" aria-hidden="true">
              <svg viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="15" rx="3" />
                <path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11" />
              </svg>
            </span>
            sent over https — lands straight in my inbox
          </p>

          <div className="form__foot" data-reveal="up" style={{ "--d": "380ms" }}>
            <p
              className={`form__status form__status--${state}`}
              role="status"
              aria-live="polite"
            >
              {MESSAGES[state] ?? ""}
            </p>
            <button
              className="btn"
              type="submit"
              disabled={state === "sending"}
            >
              {state === "sending" ? "Sending…" : "Send Here"}
            </button>
          </div>
        </form>

        <p className="form__fallback">
          Prefer email? <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </section>
  );
}
