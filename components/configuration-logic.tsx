import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { CONFIG_RULES } from "@/lib/data";

const PIPELINE = [
  "Вход от клиента",
  "Правила на продукта",
  "Валидна конфигурация",
  "Цена",
] as const;

export function ConfigurationLogic() {
  return (
    <section
      className="border-t border-stone-200/70 bg-white py-20 md:py-28"
      aria-labelledby="logic-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="Лесно за клиента. Прецизно за бизнеса."
            description="Системата разбира правилата на продукта и не позволява конфигурации, които не могат да бъдат произведени."
          />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <div className="grid gap-3 md:grid-cols-4">
            {PIPELINE.map((step, i) => (
              <div key={step} className="relative">
                <div className="rounded-xl border border-stone-200 bg-[#f7f5f1] px-5 py-6">
                  <p className="text-[11px] tracking-[0.18em] text-stone-400 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm font-medium tracking-wide text-ink uppercase">
                    {step}
                  </p>
                </div>
                {i < PIPELINE.length - 1 ? (
                  <div
                    aria-hidden
                    className="absolute top-1/2 -right-2 z-10 hidden h-px w-4 bg-stone-300 md:block"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </FadeIn>

        <Stagger className="mt-10 flex flex-wrap gap-2">
          {CONFIG_RULES.map((rule) => (
            <StaggerItem key={rule}>
              <span className="inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600">
                {rule}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15}>
          <p className="mt-10 max-w-2xl font-display text-xl leading-snug text-ink md:text-2xl">
            Ако дадена комбинация не е технически възможна, системата я блокира
            още при конфигурирането.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
