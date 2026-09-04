"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import {
  INVESTMENT_ITEMS,
  INVESTMENT_TOTAL,
  PAYMENT_SCHEDULE,
} from "@/lib/data";
import { formatEur } from "@/lib/utils";

export function Investment() {
  const reduce = useReducedMotion();

  return (
    <section
      id="investitsiya"
      className="border-t border-stone-200/70 bg-[#f7f5f1] py-20 md:py-28"
      aria-labelledby="investment-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="Инвестиция"
            description="Фиксирана стойност за целия проект без ДДС, разпределена в плащания по фази — след като можете да прегледате и тествате съответния резултат."
          />
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <div className="border-b border-stone-100 bg-gradient-to-br from-[#f7f5f1] to-white px-6 py-12 text-center md:px-10 md:py-16">
              <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500 uppercase">
                Фиксирана инвестиция за проекта · без ДДС
              </p>
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-none tracking-[-0.04em] text-ink"
              >
                {formatEur(INVESTMENT_TOTAL)}
              </motion.p>
              <p className="mt-4 text-sm font-medium text-stone-500">
                без ДДС
              </p>
            </div>

            <div className="border-b border-stone-100 px-6 py-8 md:px-10">
              <p className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase">
                График на плащанията
              </p>
              <ul className="mt-6 space-y-0">
                {PAYMENT_SCHEDULE.map((item, i) => (
                  <motion.li
                    key={item.phase}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="grid gap-2 border-b border-stone-100 py-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-[11px] tracking-[0.16em] text-stone-400 uppercase">
                          {item.phase}
                        </span>
                        <span className="rounded-full border border-stone-200 px-2.5 py-0.5 text-[11px] text-stone-500">
                          {item.deploy}
                        </span>
                      </div>
                      <p className="mt-1.5 text-base font-medium text-ink">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-stone-500">{item.trigger}</p>
                    </div>
                    <p className="font-display text-2xl text-ink sm:text-right">
                      {formatEur(item.amount)}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="px-6 py-8 md:px-10">
              <p className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase">
                Разбивка по дейности
              </p>
              <ul className="mt-4 divide-y divide-stone-100">
                {INVESTMENT_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.35 }}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <span className="text-sm text-stone-600 md:text-base">
                      {item.label}
                    </span>
                    <span className="shrink-0 text-sm font-medium tabular-nums text-ink md:text-base">
                      {formatEur(item.amount)}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex items-baseline justify-between gap-6 border-t border-ink/10 bg-[#f7f5f1]/60 px-6 py-7 md:px-10">
              <span className="text-[11px] font-medium tracking-[0.2em] text-stone-500 uppercase">
                Total
              </span>
              <span className="font-display text-3xl text-ink md:text-4xl">
                {formatEur(INVESTMENT_TOTAL)}
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-6">
          <aside className="rounded-2xl bg-ink px-6 py-6 text-white md:px-8 md:py-7">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-[#3cd2f9] uppercase">
              Важно — не е включено в цената
            </p>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
              Инвестицията от{" "}
              <span className="font-semibold text-white">
                {formatEur(INVESTMENT_TOTAL)} без ДДС
              </span>{" "}
              покрива разработката, дизайна, QA и deployment.
            </p>
            <p className="mt-3 max-w-3xl text-base font-medium leading-snug text-white md:text-lg">
              Домейн, хостинг, сървърна инфраструктура, лицензи за инструменти и
              SaaS услуги се заплащат отделно от клиента.
            </p>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}
