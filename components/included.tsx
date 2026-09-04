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
