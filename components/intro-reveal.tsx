"use client";

import { useEffect, useState } from "react";

/**
 * adrexio logo curtain reveal — CSS timeline on first paint.
 */
export function IntroReveal() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("foresta-intro-active");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 900 : 2300;

    const finish = () => {
      setDone(true);
      root.classList.remove("foresta-intro-active");
      root.style.overflow = "";
    };

    const timer = window.setTimeout(finish, total);

    return () => {
      window.clearTimeout(timer);
      root.classList.remove("foresta-intro-active");
      root.style.overflow = "";
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
          src="/logos/adrexio.svg"
          alt=""
          width={280}
          height={60}
          className="foresta-intro__logo"
          decoding="async"
        />
        <p className="foresta-intro__label">Проектно предложение</p>
        <div className="foresta-intro__line" />
      </div>
    </div>
  );
}
