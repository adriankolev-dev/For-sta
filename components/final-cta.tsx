"use client";

import { FadeIn } from "@/components/fade-in";
import { CONTACT } from "@/lib/data";
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
            Цялостно решение от конфигурация до CNC-готови DXF файлове — с
            възможност да добавяте продукти. Старт с гардероб за валидация на
            потока. След завършване можем да предложим и продължаваща поддръжка.
          </p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT.emailHref}
              className="rounded-full bg-white px-8 py-4 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Да започнем проекта
            </a>
            <button
              type="button"
              onClick={() => scrollToId("investitsiya")}
              className="rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-white/50"
            >
              Вижте инвестицията
            </button>
          </div>

          <div className="mx-auto mt-12 max-w-md border-t border-white/10 pt-8">
            <p className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase">
              Контакт
            </p>
            <p className="mt-3 font-display text-2xl text-white">{CONTACT.name}</p>
            <div className="mt-4 flex flex-col items-center gap-2 text-sm text-white/70 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href={CONTACT.phoneHref}
                className="transition-colors hover:text-white"
              >
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emailHref}
                className="transition-colors hover:text-white"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <p className="mt-8 text-[11px] tracking-[0.18em] text-white/35 uppercase">
            adrexio × Forèsta — Дигитален конфигуратор за мебели
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
