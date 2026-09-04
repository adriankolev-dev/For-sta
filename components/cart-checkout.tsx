import { FadeIn } from "@/components/fade-in";
import { FurnitureVisual } from "@/components/furniture-visual";
import { SectionHeading } from "@/components/section-heading";
import { MOCK_PRODUCT } from "@/lib/data";
import { formatEur } from "@/lib/utils";

const FLOW = ["Конфигуратор", "Добави в количката", "Checkout", "Поръчка"] as const;

export function CartCheckout() {
  return (
    <section
      className="border-t border-stone-200/70 bg-white py-20 md:py-28"
      aria-labelledby="cart-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="Конфигурацията се превръща в нормална поръчка."
            description="След конфигуриране продуктът влиза в количката като стандартен e-commerce артикул — с цялата конфигурация, готова за поръчка и производство."
          />
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-stone-200 bg-[#f7f5f1] px-4 py-2 text-xs font-medium tracking-[0.12em] text-ink uppercase">
                  {step}
                </span>
                {i < FLOW.length - 1 ? (
                  <span aria-hidden className="hidden text-stone-300 sm:inline">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-12">
          <div className="grid overflow-hidden rounded-2xl border border-stone-200 bg-[#f7f5f1] lg:grid-cols-[1fr_1.1fr]">
            <div className="border-b border-stone-200 bg-gradient-to-b from-white to-[#ebe7df] p-6 lg:border-r lg:border-b-0 lg:p-8">
              <FurnitureVisual
                widthCm={MOCK_PRODUCT.widthCm}
                heightCm={MOCK_PRODUCT.heightCm}
                depthCm={MOCK_PRODUCT.depthCm}
                doors={MOCK_PRODUCT.doors}
                drawers={MOCK_PRODUCT.drawers}
                backPanel={MOCK_PRODUCT.backPanel}
                material="byalo"
                compact
                showDimensions={false}
              />
            </div>

            <div className="bg-white p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase">
                    Поръчка {MOCK_PRODUCT.orderId}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink">
                    {MOCK_PRODUCT.name}
                  </h3>
                </div>
                <p className="font-display text-2xl text-ink">
                  {formatEur(MOCK_PRODUCT.price)}
                </p>
              </div>

              <dl className="mt-8 space-y-3 border-t border-stone-100 pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-500">Размери</dt>
                  <dd className="text-ink">{MOCK_PRODUCT.dimsLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-500">Компоненти</dt>
                  <dd className="text-right text-ink">
                    {MOCK_PRODUCT.componentsLabel}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-500">Материал</dt>
                  <dd className="text-ink">{MOCK_PRODUCT.materialLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-500">Количество</dt>
                  <dd className="text-ink">1</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone-500">Configuration ID</dt>
                  <dd className="font-mono text-xs text-ink">
                    {MOCK_PRODUCT.configId}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 border-t border-stone-100 pt-6 text-sm leading-relaxed text-stone-600">
                Поръчката запазва configuration ID, размери, компоненти,
                материали, количество, цена, визуализация и технически параметри.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="mt-10 max-w-2xl font-display text-xl leading-snug text-ink md:text-2xl">
            Конфигурацията не се губи между конфигуратора и поръчката — тя става
            част от самата поръчка.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
