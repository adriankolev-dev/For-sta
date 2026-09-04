"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { JOURNEY_STEPS } from "@/lib/data";

export function EndToEndFlow() {
  const reduce = useReducedMotion();

  return (
    <section
      className="border-t border-stone-200/70 bg-[#f7f5f1] py-20 md:py-28"
      aria-labelledby="journey-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            title="От избора до производството"
            description="Пълният customer journey — от първия избор до поръчка с BOM и DXF файлове за CNC."
          />
        </FadeIn>

        <div className="relative mt-14">
          {/* Desktop horizontal line */}
          <div
            aria-hidden
            className="absolute top-7 right-0 left-0 hidden h-px bg-stone-300 lg:block"
          />

          {/* Mobile vertical line */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[15px] w-px bg-stone-300 lg:hidden"
          />

          <ol className="grid gap-8 lg:grid-cols-8 lg:gap-3">
            {JOURNEY_STEPS.map((step, i) => (
              <motion.li
                key={step.number}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-4 pl-10 lg:flex-col lg:pl-0 lg:pt-0"
              >
                <span className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 bg-white font-display text-xs text-ink lg:relative lg:mx-auto">
                  {step.number}
                </span>
                <div className="lg:mt-5 lg:text-center">
                  <p className="text-sm font-medium text-ink">{step.title}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
