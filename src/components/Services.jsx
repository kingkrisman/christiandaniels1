import SectionIntro from "./SectionIntro";
import ServiceCard from "./ServiceCard";
import Doodles from "./graphics/Doodles";
import { PencilIcon, CodeIcon, ShieldIcon } from "./graphics/icons";
import { services } from "../data/content";
import "./Services.css";

const icons = { pencil: PencilIcon, code: CodeIcon, shield: ShieldIcon };

const DOODLES = [
  { kind: "braces", x: "92%", y: "8%", mx: "84%", my: "2%", size: 30, depth: 1.7, rotate: -7 },
  { kind: "nib", x: "2.2%", y: "30%", mx: "6%", my: "2.5%", size: 22, depth: 1.2, rotate: 10 },
  { kind: "arrowfn", x: "44%", y: "4%", mx: "46%", my: "1.5%", size: 24, depth: 2, rotate: -3 },
  { kind: "fingerprint", x: "2.6%", y: "62%", mx: "66%", my: "2.5%", size: 24, depth: 1.4, rotate: -8 },
];

export default function Services() {
  return (
    <section className="section services shell" id="services">
      <Doodles items={DOODLES} />
      <SectionIntro label="What i do?" index="02 // capabilities" />

      <ul className="services__grid">
        {services.map((s, i) => (
          <ServiceCard key={s.id} service={s} index={i} Icon={icons[s.icon]} />
        ))}
      </ul>
    </section>
  );
}
