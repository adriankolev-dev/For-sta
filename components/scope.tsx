import { Check } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { SCOPE_BUSINESS, SCOPE_CLIENT } from "@/lib/data";

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
            eyebrow="Обхват на MVP"
            title="Какво включва крайният продукт"
            description="След четирите фази на разработка получавате цялостното клиентско изживяване — от конфигурирането до поръчката — без излишна сложност."
          />
        </FadeIn>

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
