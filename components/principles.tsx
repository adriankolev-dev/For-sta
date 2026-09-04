import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { PRINCIPLES } from "@/lib/data";

export function Principles() {
  return (
    <section
      className="border-t border-stone-200/70 bg-white py-20 md:py-28"
      aria-labelledby="principles-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading title="Започваме фокусирано. Изграждаме с мисъл за мащаб." />
        </FadeIn>

        <Stagger className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {PRINCIPLES.map((principle) => (
            <StaggerItem key={principle.number}>
              <article className="border-t border-ink/15 pt-6">
                <p className="font-display text-4xl text-stone-300">
                  {principle.number}
                </p>
                <h3 className="mt-6 text-lg font-medium text-ink">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {principle.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
