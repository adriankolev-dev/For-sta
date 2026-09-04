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
            eyebrow="Възможна Фаза 2 / Бъдещо развитие"
            title="Създадено да се развива"
          />
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
            Тези функционалности не са включени в инвестицията от €39 500 и могат
            да бъдат планирани като последващи етапи.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
