import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { PRODUCTION_CARDS } from "@/lib/data";

const FLOW = [
  "Клиентска конфигурация",
  "E-commerce поръчка",
  "Производствена информация",
] as const;

export function ProductionFlow() {
  return (
    <section
      className="border-t border-stone-200/70 bg-[#f7f5f1] py-20 md:py-28"
      aria-labelledby="production-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="Всяка поръчка носи своята конфигурация."
            description="Клиентът не купува просто стандартен SKU. В поръчката се записва точната конфигурация, която е създал."
          />
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            {FLOW.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-3">
                <div className="w-full rounded-xl border border-stone-200 bg-white px-5 py-4 text-center text-sm font-medium tracking-wide text-ink uppercase">
                  {step}
                </div>
                {i < FLOW.length - 1 ? (
                  <span aria-hidden className="hidden text-stone-300 md:inline">
                    ↓
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <Stagger className="grid grid-cols-2 gap-3 content-start">
            {PRODUCTION_CARDS.map((card) => (
              <StaggerItem key={card}>
                <div className="rounded-xl border border-stone-200 bg-white px-4 py-5 text-sm text-stone-700">
                  {card}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn delay={0.12}>
            <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(40,36,32,0.35)] md:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-5">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase">
                    Производствена спецификация
                  </p>
                  <h3 className="mt-2 font-display text-xl text-ink">
                    BOM · Поръчка #10482
                  </h3>
                </div>
                <span className="rounded-full bg-[#f7f5f1] px-3 py-1 text-[11px] tracking-wide text-stone-500 uppercase">
                  Фаза 1
                </span>
              </div>

              <div className="mt-6 space-y-4 font-mono text-xs leading-relaxed text-stone-600 md:text-[13px]">
                <p>
                  <span className="text-stone-400">ПРОДУКТ</span>
                  <br />
                  Голямо бяло бюро · CFG-10482-A3
                </p>
                <p>
                  <span className="text-stone-400">РАЗМЕРИ</span>
                  <br />
                  W 1200 × H 730 × D 600 mm
                </p>
                <p>
                  <span className="text-stone-400">ДЕТАЙЛИ</span>
                  <br />
                  Корпус × 1 · Врата × 2 · Чекмедже × 3 · Заден панел × 1
                </p>
                <p>
                  <span className="text-stone-400">МАТЕРИАЛ / КАНТ</span>
                  <br />
                  ПДЧ бяло мат 18 mm · ABS кант 1 mm бяло
                </p>
                <p>
                  <span className="text-stone-400">ОБКОВ</span>
                  <br />
                  Панти × 4 · Водачи × 3 · Дръжки × 5
                </p>
              </div>
            </article>
          </FadeIn>
        </div>

        <FadeIn delay={0.16}>
          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-stone-600 md:text-base">
            Производствената информация се структурира така, че в следващ етап да
            могат да бъдат добавени ERP, CAD/CAM или CNC интеграции без
            необходимост от изграждане на клиентското изживяване отначало.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
