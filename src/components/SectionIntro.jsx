import { CurlArrow } from "./graphics/Arrow";
import useAim from "../hooks/useAim";
import "./SectionIntro.css";

/* The curl arrow already points down-left; aim leans it from there. */
const CURL_HEADING = 153;

/** Marker label, a curled arrow that draws itself and tracks the cursor. */
export default function SectionIntro({ label, note, id, index }) {
  const arrowRef = useAim(CURL_HEADING, 20);

  return (
    <div className="intro" data-reveal="up">
      {index && <span className="intro__index">{index}</span>}
      <h2 className="intro__label hand-note" id={id}>
        <span className="hl">{label}</span>
      </h2>
      <span className="intro__arrow" ref={arrowRef}>
        <CurlArrow />
      </span>
      {note && <p className="intro__note">{note}</p>}
    </div>
  );
}
