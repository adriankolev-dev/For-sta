import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { EXCLUDED_ITEMS } from "@/lib/data";

export function Excluded() {
  return (
    <section
      className="border-t border-stone-200/70 bg-[#f7f5f1] py-20 md:py-28"
      aria-labelledby="excluded-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="Обхват и ограничения"
            description="Следните функционалности не са включени в инвестицията от €46 000 без ДДС:"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mt-10 max-w-2xl space-y-3">
            {EXCLUDED_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-stone-600"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400"
                />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-stone-500">
            Тези възможности могат да бъдат планирани и оценени като последващи
            етапи след валидиране на основната платформа.
          </p>
        </FadeIn>

        <FadeIn delay={0.18} className="mt-8">
          <aside className="max-w-2xl rounded-2xl bg-ink px-5 py-5 md:px-6">
            <p className="text-[12px] font-semibold tracking-[0.18em] text-[#3cd2f9] uppercase">
              Инфраструктура и лицензи
            </p>
            <p className="mt-2.5 text-base font-medium leading-snug text-white">
              Инструменти, лицензи, домейн и хостинг не са част от инвестицията
              от €46 000 без ДДС и се поемат от клиента.
            </p>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}
