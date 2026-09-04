import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { FUTURE_EXTENSIONS } from "@/lib/data";

export function FutureExtensions() {
  return (
    <section
      className="border-t border-stone-200/70 bg-[#f7f5f1] py-20 md:py-28"
      aria-labelledby="future-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="След валидацията"
            title="Създадено да се развива"
            description="Офертата е цялостното решение. След като потокът за гардероба е валидиран — включително BOM и DXF — добавяме нови продукти и по желание по-дълбоки интеграции."
          />
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <aside className="rounded-2xl border border-stone-200 bg-white px-6 py-6 md:px-8 md:py-7">
            <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500 uppercase">
              След завършване на проекта
            </p>
            <p className="mt-3 max-w-3xl font-display text-xl leading-snug text-ink md:text-2xl">
              Можем да предложим поддръжка след стартиране
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600 md:text-base">
              След предаването на платформата можем да осигурим продължаваща
              поддръжка — техническа помощ, корекции, малки подобрения и
              съдействие при работа със системата. Условията и обхватът се
              договарят отделно и не са част от инвестицията от €46 000 без ДДС.
            </p>
          </aside>
        </FadeIn>

        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FUTURE_EXTENSIONS.map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-xl border border-stone-200/80 bg-white/70 px-5 py-4 text-sm text-stone-600">
                {item}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.12}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-stone-600">
            Тези функционалности не са включени в инвестицията от €46 000 без ДДС и могат
            да бъдат планирани като последващи етапи.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
