import { Check } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { MVP_RULES, SCOPE_BUSINESS, SCOPE_CLIENT } from "@/lib/data";

function ScopeList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-stone-600">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-ink"
              strokeWidth={1.75}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Scope() {
  return (
    <section
      id="obhvat"
      className="border-t border-stone-200/70 bg-white py-20 md:py-28"
      aria-labelledby="scope-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Обхват на решението"
            title="Цялостна платформа. Валидация с един продукт."
            description="Офертата е пълната платформа — включително BOM, DXF за CNC и възможност да добавяте продукти. MVP е редът на доставка: първо гардеробът end-to-end, после разширявате каталога."
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <p className="mt-8 max-w-3xl rounded-2xl border border-stone-200 bg-[#f7f5f1] px-5 py-4 text-sm leading-relaxed text-stone-600 md:px-6 md:text-base">
            Инвестицията от €46 000 без ДДС покрива цялата платформа и първия
            готов продукт (гардероб) end-to-end. Възможността да добавяте нови
            продукти в каталога е част от офертата — MVP означава само с какво
            започваме.
          </p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
          {MVP_RULES.map((rule) => (
            <StaggerItem key={rule.title}>
              <article className="h-full rounded-2xl border border-stone-200 bg-[#f7f5f1] p-6">
                <h3 className="text-base font-medium text-ink">{rule.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {rule.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <FadeIn delay={0.08}>
            <ScopeList title="Клиентско изживяване" items={SCOPE_CLIENT} />
          </FadeIn>
          <FadeIn delay={0.14}>
            <ScopeList title="Бизнес функционалност" items={SCOPE_BUSINESS} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
