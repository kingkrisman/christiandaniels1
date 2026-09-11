import { useEffect } from "react";
import { startPointerField } from "../lib/pointer";

/** Boots the shared pointer field once, from the app root. */
export default function usePointerField() {
  useEffect(() => startPointerField(), []);
}
