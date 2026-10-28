"use client";

import { useReveal } from "@/hooks/useReveal";

/** Activates scroll-reveal observation for [data-reveal] elements. */
export function RevealProvider() {
  useReveal();
  return null;
}
