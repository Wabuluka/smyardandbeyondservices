"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { CONSENT_EVENT, STORAGE_KEY } from "@/components/CookieConsent";

/** Website-to-mailbox visitor tracking container. */
const GTM_ID = "GTM-NGQ3R2CM";

function hasAccepted() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

/**
 * Loads Google Tag Manager only once the visitor has accepted cookies —
 * on mount for returning visitors, or as soon as they click Accept.
 * Rejecting (or never answering) keeps the tag off the page.
 */
export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const check = () => setEnabled(hasAccepted());
    check();
    window.addEventListener(CONSENT_EVENT, check);
    return () => window.removeEventListener(CONSENT_EVENT, check);
  }, []);

  return enabled ? <GoogleTagManager gtmId={GTM_ID} /> : null;
}
