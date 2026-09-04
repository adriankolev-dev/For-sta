import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { BUSINESS_VALUES } from "@/lib/data";

const FLOW = ["Конфигурирай", "Изчисли", "Поръчай", "Произведи"] as const;

export function Opportunity() {
  return (
    <section
      id="vazmozhnost"
      className="border-t border-stone-200/70 bg-[#f7f5f1] py-20 md:py-28"
      aria-labelledby="opportunity-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="Един продукт. Едно безпроблемно дигитално изживяване."
            description="Конфигурирането на мебели по поръчка често изисква множество ръчни стъпки — комуникация с клиент, уточняване на размери, калкулиране на цена, проверка на възможните комбинации и подготовка на информацията за производство."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg">
            Предложеното решение обединява тези стъпки в един последователен
            дигитален процес.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white px-5 py-10 md:px-10 md:py-14">
            <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between md:gap-2">
              {FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-4 md:flex-1 md:flex-col md:gap-0">
                  <div className="flex w-full items-center md:flex-col">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-[#f7f5f1] font-display text-sm text-ink md:mx-auto">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {i < FLOW.length - 1 ? (
                      <div
                        aria-hidden
                        className="mx-3 h-px flex-1 bg-stone-200 md:mt-5 md:mb-0 md:h-px md:w-full md:flex-none"
                      />
                    ) : (
                      <div className="mx-3 flex-1 md:hidden" />
                    )}
                  </div>
                  <p className="text-sm font-medium tracking-[0.08em] text-ink uppercase md:mt-5 md:text-center">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 border-t border-stone-100 pt-8 text-center font-display text-xl text-ink md:text-2xl">
              Клиентът получава яснота. Бизнесът получава структурирана поръчка.
            </p>
          </div>
        </FadeIn>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_VALUES.map((item) => (
            <StaggerItem key={item.title}>
              <article className="h-full border-t border-stone-300 pt-5">
                <h3 className="text-base font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
