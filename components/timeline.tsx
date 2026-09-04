import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { TIMELINE_PHASES } from "@/lib/data";
import { formatEur } from "@/lib/utils";

export function Timeline() {
  return (
    <section
      id="srokove"
      className="border-t border-stone-200/70 bg-white py-20 md:py-28"
      aria-labelledby="timeline-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="Итеративна разработка с ясни фази на деплой"
            description="Проектът се изпълнява на четири фази. След всяка фаза получавате работещ резултат за преглед и тест. Плащането следва приема на фазата — не чакате края на целия проект."
          />
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "Итеративно",
                text: "Всяка фаза надгражда предишната с видим резултат.",
              },
              {
                title: "Тестваемо",
                text: "Получавате staging / prototype среда за реален преглед.",
              },
              {
                title: "Плащане на фаза",
                text: "Инвестицията се разпределя според приетите етапи.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-stone-200 bg-[#f7f5f1]/60 px-5 py-4"
              >
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="relative mt-14 space-y-5">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[1.15rem] hidden w-px bg-stone-200 md:block"
          />

          {TIMELINE_PHASES.map((phase, index) => (
            <FadeIn key={phase.phase} delay={index * 0.05}>
              <article className="relative rounded-2xl border border-stone-200 bg-[#f7f5f1]/40 md:ml-0">
                <div className="grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)]">
                  <div className="border-b border-stone-200 p-6 md:p-8 lg:border-r lg:border-b-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[11px] font-medium tracking-wide text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase">
                        {phase.phase}
                      </p>
                    </div>

                    <h3 className="mt-5 font-display text-2xl leading-snug text-ink md:text-[1.75rem]">
                      {phase.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {phase.outcome}
                    </p>

                    <dl className="mt-8 space-y-4 border-t border-stone-200/80 pt-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-[11px] tracking-[0.16em] text-stone-400 uppercase">
                          Продължителност
                        </dt>
                        <dd className="text-sm font-medium text-ink">
                          {phase.duration}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-[11px] tracking-[0.16em] text-stone-400 uppercase">
                          Deploy
                        </dt>
                        <dd className="text-right text-sm font-medium text-ink">
                          {phase.deploy}
                        </dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-[11px] tracking-[0.16em] text-stone-400 uppercase">
                          Плащане
                        </dt>
                        <dd className="font-display text-2xl text-ink">
                          {formatEur(phase.payment)}
                        </dd>
                      </div>
                    </dl>

                    <p className="mt-4 text-xs leading-relaxed text-stone-500">
                      {phase.paymentTrigger}
                    </p>
                  </div>

                  <div className="grid gap-6 p-6 sm:grid-cols-2 md:p-8">
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.16em] text-stone-400 uppercase">
                        Какво получавате
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {phase.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-stone-700"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.16em] text-stone-400 uppercase">
                        Какво тествате
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {phase.clientTest.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-stone-700"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-400"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12} className="mt-12">
          <div className="flex flex-col gap-6 rounded-2xl border border-stone-200 bg-[#f7f5f1] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500 uppercase">
                Обща продължителност
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Част от дейностите се припокриват между фазите за по-кратък
                общ срок.
              </p>
            </div>
            <p className="font-display text-4xl tracking-tight text-ink md:text-5xl">
              6–8 месеца
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
