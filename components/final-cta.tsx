"use client";

import { FadeIn } from "@/components/fade-in";
import { scrollToId } from "@/lib/utils";

export function FinalCta() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-ink py-24 md:py-32"
      aria-labelledby="cta-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,255,255,0.06), transparent 50%),
            radial-gradient(ellipse 40% 40% at 10% 90%, rgba(255,255,255,0.04), transparent 45%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <FadeIn>
          <h2
            id="cta-title"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-white"
          >
            Нека превърнем мебелите по поръчка в дигитален продукт.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Конфигурируемо, мащабируемо изживяване, което свързва избора на
            клиента с ясна поръчка и структуриран производствен процес.
          </p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <button
            type="button"
            onClick={() => scrollToId("investitsiya")}
            className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            Да започнем проекта
          </button>
          <p className="mt-8 text-[11px] tracking-[0.18em] text-white/35 uppercase">
            adrexio × Forèsta — Дигитален конфигуратор за мебели
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
