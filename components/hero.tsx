"use client";

import { FadeIn } from "@/components/fade-in";
import { FurnitureVisual } from "@/components/furniture-visual";
import { scrollToId } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="nachalo"
      className="relative overflow-hidden pt-24 md:pt-28"
      aria-labelledby="hero-title"
    >
      {/* Atmospheric background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(232, 228, 220, 0.9), transparent 55%),
            radial-gradient(ellipse 50% 40% at 15% 80%, rgba(220, 214, 204, 0.5), transparent 50%),
            linear-gradient(180deg, #f7f5f1 0%, #f3f0ea 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pb-28">
        <div className="max-w-xl pt-6 lg:pt-10">
          <FadeIn>
            <p className="mb-6 text-[11px] font-medium tracking-[0.24em] text-stone-500 uppercase">
              Проектно предложение от adrexio за Forèsta
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1
              id="hero-title"
              className="font-display text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-ink"
            >
              От персонална конфигурация до производство
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
              Дигитална платформа, която позволява на клиента да конфигурира,
              визуализира и поръча мебели по зададени размери — като превръща
              всяка конфигурация в структурирана поръчка, готова за последваща
              обработка.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToId("reshenie")}
                className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Разгледайте решението
              </button>
              <button
                type="button"
                onClick={() => scrollToId("investitsiya")}
                className="rounded-full border border-stone-300 bg-white/60 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-stone-400 hover:bg-white"
              >
                Вижте инвестицията
              </button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-gradient-to-b from-white to-[#ebe7df] px-4 py-10 shadow-[0_30px_80px_-40px_rgba(40,36,32,0.35)] md:px-8 md:py-14">
            <FurnitureVisual
              widthCm={120}
              heightCm={73}
              depthCm={60}
              doors={2}
              drawers={3}
              backPanel
              material="byalo"
              showDimensions
            />
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-stone-200/80 pt-5">
              <div>
                <p className="text-sm font-medium text-ink">Голямо бяло бюро</p>
                <p className="mt-1 text-xs tracking-wide text-stone-500">
                  120 × 73 × 60 см · 2 врати · 3 чекмеджета
                </p>
              </div>
              <p className="font-display text-2xl text-ink">€1 249</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
