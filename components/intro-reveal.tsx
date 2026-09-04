"use client";

import { useEffect, useState } from "react";

/**
 * Forèsta logo curtain reveal — CSS timeline on first paint.
 */
export function IntroReveal() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("foresta-intro-active");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 1200 : 3400;

    const timer = window.setTimeout(() => {
      setDone(true);
      document.documentElement.classList.remove("foresta-intro-active");
    }, total);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("foresta-intro-active");
    };
  }, []);

  if (done) return null;

  return (
    <div className="foresta-intro" aria-hidden>
      <div className="foresta-intro__panel foresta-intro__panel--left" />
      <div className="foresta-intro__panel foresta-intro__panel--right" />
      <div className="foresta-intro__brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/foresta-on-dark.webp"
          alt=""
          width={200}
          height={200}
          className="foresta-intro__logo"
          decoding="async"
        />
        <p className="foresta-intro__label">Проектно предложение</p>
        <div className="foresta-intro__line" />
      </div>
    </div>
  );
}
