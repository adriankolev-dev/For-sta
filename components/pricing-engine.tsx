"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { PRICING_BREAKDOWN } from "@/lib/data";
import { formatEur } from "@/lib/utils";

export function PricingEngine() {
  const reduce = useReducedMotion();
  const total = PRICING_BREAKDOWN.reduce((sum, row) => sum + row.amount, 0);

  return (
    <section
      className="border-t border-stone-200/70 bg-[#f7f5f1] py-20 md:py-28"
      aria-labelledby="pricing-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <FadeIn>
            <SectionHeading
              title="Всяка конфигурация има своя цена."
              description="Цената се изчислява динамично според избраните размери, материали, компоненти и допълнителни опции."
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-600">
              Ценовите правила се управляват централизирано и могат да се
              променят без промяна на клиентското изживяване.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
              <ul className="space-y-0">
                {PRICING_BREAKDOWN.map((row, i) => (
                  <motion.li
                    key={row.label}
                    initial={reduce ? false : { opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="flex items-baseline justify-between gap-4 border-b border-stone-100 py-4"
                  >
                    <span className="text-sm text-stone-600">{row.label}</span>
                    <span className="text-sm font-medium text-ink tabular-nums">
                      {i === 0 ? formatEur(row.amount) : `+ ${formatEur(row.amount)}`}
                    </span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-ink/10 pt-6">
                <span className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase">
                  Total
                </span>
                <motion.p
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="font-display text-4xl tracking-tight text-ink md:text-5xl"
                >
                  {formatEur(total)}
                </motion.p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
