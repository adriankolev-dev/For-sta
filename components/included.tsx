import { Check } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { INCLUDED_ITEMS } from "@/lib/data";

export function Included() {
  return (
    <section
      className="border-t border-stone-200/70 bg-white py-20 md:py-28"
      aria-labelledby="included-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading title="Какво е включено" />
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <aside className="rounded-2xl border border-stone-200 bg-[#f7f5f1] px-6 py-6 md:px-8 md:py-7">
            <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500 uppercase">
              Екип и въвеждане
            </p>
            <p className="mt-3 max-w-3xl font-display text-xl leading-snug text-ink md:text-2xl">
              Персонален Product Owner и обучение за работа в системата
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600 md:text-base">
              Към проекта назначаваме персонален Product Owner, който води
              комуникацията с вас през целия процес — от уточненията до
              приема на фазите. След стартиране провеждаме обучение, за да може
              екипът ви да работи уверено с конфигуратора и администрацията.
            </p>
          </aside>
        </FadeIn>

        <Stagger className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED_ITEMS.map((item) => (
            <StaggerItem key={item}>
              <div className="flex items-start gap-3 border-b border-stone-100 pb-4">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="text-sm text-stone-700">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
