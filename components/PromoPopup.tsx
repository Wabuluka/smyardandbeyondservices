"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { activePromotions, business } from "@/lib/data";
import { CONSENT_EVENT } from "@/components/CookieConsent";

// Bump the suffix if you want the popup to reappear for everyone (e.g. a new season).
const STORAGE_KEY = "sm-promo-seen:v2";

export default function PromoPopup() {
  const [promo, setPromo] = useState<ReturnType<typeof activePromotions>[number] | null>(null);

  useEffect(() => {
    let seen = false;
    let consented = false;
    try {
      seen = !!localStorage.getItem(STORAGE_KEY);
      consented = !!localStorage.getItem("sm-cookie-consent");
    } catch {
      /* storage unavailable — still show */
    }
    const [first] = activePromotions();
    if (seen || !first) return;

    // Don't stack on top of the cookie banner: show shortly after load if the
    // visitor already answered it, otherwise as soon as they do.
    const show = () => setPromo(first);
    if (consented) {
      const timer = setTimeout(show, 1500);
      return () => clearTimeout(timer);
    }
    window.addEventListener(CONSENT_EVENT, show, { once: true });
    return () => window.removeEventListener(CONSENT_EVENT, show);
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setPromo(null);
  }

  if (!promo) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Free price quote"
      className="fixed bottom-4 right-4 z-40 w-[calc(100%-2rem)] max-w-sm rounded-lg border-2 border-primary bg-base-100 p-5 shadow-xl"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="btn btn-ghost btn-xs btn-circle absolute right-2 top-2"
      >
        ✕
      </button>
      <p className="font-mono text-xs uppercase tracking-wide text-primary">Free quote</p>
      <h3 className="mt-1 font-display text-lg font-bold text-primary">{promo.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral">{promo.detail}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a href={business.phoneHref} onClick={dismiss} className="btn btn-primary btn-sm">
          Call {business.phone}
        </a>
        <a
          href={`mailto:${business.email}?subject=${encodeURIComponent("Free price quote")}`}
          onClick={dismiss}
          className="btn btn-outline btn-primary btn-sm"
        >
          Email us
        </a>
        {promo.cta && (
          <Link href={promo.cta.href} onClick={dismiss} className="btn btn-ghost btn-sm">
            {promo.cta.label}
          </Link>
        )}
      </div>
    </div>
  );
}
