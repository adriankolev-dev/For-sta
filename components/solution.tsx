import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { EXPERIENCE_CARDS } from "@/lib/data";

export function Solution() {
  return (
    <section
      id="reshenie"
      className="border-t border-stone-200/70 bg-white py-20 md:py-28"
      aria-labelledby="solution-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Позициониране"
            title="Изживяване, създадено около вашия бизнес"
            description="Използваме най-добрите практики от съвременните configurator платформи, но изграждаме логиката специално около конкретните продукти, материали, ценови правила и производствени ограничения."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-3xl border-l-2 border-ink/20 pl-5 text-sm leading-relaxed text-stone-600 md:text-base">
            Дигитално изживяване за конфигуриране на мебели, вдъхновено от
            най-добрите практики на водещите configurator платформи и изградено
            специално около продуктите, ценовите правила и производствения процес
            на клиента.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE_CARDS.map((card) => (
            <StaggerItem key={card.number}>
              <article className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-[#f7f5f1]/60 p-6 transition-colors hover:border-stone-300 hover:bg-[#f7f5f1]">
                <span className="font-display text-3xl text-stone-300 transition-colors group-hover:text-stone-400">
                  {card.number}
                </span>
                <h3 className="mt-8 text-lg font-medium text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {card.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
