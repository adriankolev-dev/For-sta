import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { ADMIN_METRICS, ADMIN_NAV } from "@/lib/data";

export function AdminMockup() {
  return (
    <section
      className="border-t border-stone-200/70 bg-white py-20 md:py-28"
      aria-labelledby="admin-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="Управление на каталога от едно място."
            description="Бизнес екипът управлява продуктите, компонентите, материалите и ценовите правила от едно място."
          />
        </FadeIn>

        <FadeIn delay={0.12} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-[#f7f5f1] shadow-[0_24px_80px_-48px_rgba(40,36,32,0.35)]">
            <div className="flex items-center gap-2 border-b border-stone-200 bg-white px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
              <span className="ml-3 text-xs text-stone-400">
                Admin · Каталог и правила
              </span>
            </div>

            <div className="grid lg:grid-cols-[220px_1fr]">
              <aside className="hidden border-r border-stone-200 bg-white p-4 lg:block">
                <p className="px-3 text-[10px] font-medium tracking-[0.2em] text-stone-400 uppercase">
                  Навигация
                </p>
                <ul className="mt-3 space-y-0.5">
                  {ADMIN_NAV.map((item, i) => (
                    <li key={item}>
                      <span
                        className={`block rounded-lg px-3 py-2 text-sm ${
                          i === 0
                            ? "bg-ink text-white"
                            : "text-stone-600 hover:bg-stone-50"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="p-5 md:p-7">
                <div className="mb-6 flex flex-wrap gap-2 lg:hidden">
                  {ADMIN_NAV.slice(0, 4).map((item, i) => (
                    <span
                      key={item}
                      className={`rounded-full px-3 py-1.5 text-xs ${
                        i === 0
                          ? "bg-ink text-white"
                          : "border border-stone-200 bg-white text-stone-600"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {ADMIN_METRICS.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-stone-200 bg-white px-4 py-5"
                    >
                      <p className="text-[11px] tracking-[0.12em] text-stone-400 uppercase">
                        {metric.label}
                      </p>
                      <p className="mt-3 font-display text-2xl text-ink md:text-3xl">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-stone-200 bg-white p-5">
                    <h3 className="text-sm font-medium text-ink">
                      Правила на продукта
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-sm text-stone-600">
                      <li className="flex justify-between border-b border-stone-100 pb-2">
                        <span>Мин. ширина</span>
                        <span className="text-ink">80 см</span>
                      </li>
                      <li className="flex justify-between border-b border-stone-100 pb-2">
                        <span>Макс. ширина</span>
                        <span className="text-ink">180 см</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Макс. чекмеджета</span>
                        <span className="text-ink">4</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-white p-5">
                    <h3 className="text-sm font-medium text-ink">
                      Ценови правила
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-sm text-stone-600">
                      <li className="flex justify-between border-b border-stone-100 pb-2">
                        <span>Базова цена</span>
                        <span className="text-ink">€800</span>
                      </li>
                      <li className="flex justify-between border-b border-stone-100 pb-2">
                        <span>Врата</span>
                        <span className="text-ink">+ €85</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Чекмедже</span>
                        <span className="text-ink">+ €60</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-white p-5">
                    <h3 className="text-sm font-medium text-ink">Материали</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Бяло", "Дъб", "Антрацит"].map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-stone-200 px-3 py-1.5 text-xs text-stone-600"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-white p-5">
                    <h3 className="text-sm font-medium text-ink">Компоненти</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Врати", "Чекмеджета", "Заден панел", "Обков"].map(
                        (c) => (
                          <span
                            key={c}
                            className="rounded-full border border-stone-200 px-3 py-1.5 text-xs text-stone-600"
                          >
                            {c}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
