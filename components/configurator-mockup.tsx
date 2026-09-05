"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { FurnitureVisual } from "@/components/furniture-visual";
import { SectionHeading } from "@/components/section-heading";
import {
  MATERIALS,
  MOCK_PRODUCT,
  calculateConfigPrice,
} from "@/lib/data";
import { formatEur } from "@/lib/utils";

type MaterialId = (typeof MATERIALS)[number]["id"];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-[11px] font-medium tracking-[0.16em] text-stone-500 uppercase">
      {children}
    </span>
  );
}

function Segmented<T extends string | number | boolean>({
  options,
  value,
  onChange,
  format,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
  format?: (v: T) => string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={String(opt)}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
              active
                ? "bg-ink text-white"
                : "border border-stone-200 bg-white text-stone-600 hover:border-stone-300"
            }`}
            aria-pressed={active}
          >
            {format ? format(opt) : String(opt)}
          </button>
        );
      })}
    </div>
  );
}

export function ConfiguratorMockup() {
  const reduce = useReducedMotion();
  const [width, setWidth] = useState<number>(MOCK_PRODUCT.widthCm);
  const [height, setHeight] = useState<number>(MOCK_PRODUCT.heightCm);
  const [depth, setDepth] = useState<number>(MOCK_PRODUCT.depthCm);
  const [doors, setDoors] = useState<number>(MOCK_PRODUCT.doors);
  const [drawers, setDrawers] = useState<number>(MOCK_PRODUCT.drawers);
  const [backPanel, setBackPanel] = useState<boolean>(MOCK_PRODUCT.backPanel);
  const [material, setMaterial] = useState<MaterialId>("byalo");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const materialMeta = MATERIALS.find((m) => m.id === material)!;

  const price = useMemo(
    () =>
      calculateConfigPrice({
        doors,
        drawers,
        backPanel,
        materialDelta: materialMeta.priceDelta,
        quantity,
      }),
    [doors, drawers, backPanel, materialMeta.priceDelta, quantity],
  );

  const handleAdd = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <section
      id="izhivyavane"
      className="border-t border-stone-200/70 bg-[#f7f5f1] py-20 md:py-28"
      aria-labelledby="configurator-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Конфигуратор · демо гардероб"
            title="Сърцето на изживяването"
            description="Демонстрация на end-to-end логиката за един продукт — гардероб. Конфигурирайте и вижте как се променят визуализацията и цената."
          />
        </FadeIn>

        <FadeIn delay={0.12} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_24px_80px_-48px_rgba(40,36,32,0.4)]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* Controls */}
              <div className="border-b border-stone-200 p-6 md:p-8 lg:border-r lg:border-b-0">
                <p className="text-[11px] font-medium tracking-[0.2em] text-stone-400 uppercase">
                  Конфигурация · първи продукт
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink">
                  {MOCK_PRODUCT.name}
                </h3>

                <div className="mt-8 space-y-7">
                  <div>
                    <FieldLabel>Ширина — {width} см</FieldLabel>
                    <input
                      type="range"
                      min={140}
                      max={220}
                      step={10}
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full accent-ink"
                      aria-label="Ширина в сантиметри"
                    />
                    <div className="mt-1 flex justify-between text-[11px] text-stone-400">
                      <span>140</span>
                      <span>220</span>
                    </div>
                  </div>

                  <div>
                    <FieldLabel>Височина — {height} см</FieldLabel>
                    <input
                      type="range"
                      min={180}
                      max={250}
                      step={5}
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full accent-ink"
                      aria-label="Височина в сантиметри"
                    />
                    <div className="mt-1 flex justify-between text-[11px] text-stone-400">
                      <span>180</span>
                      <span>250</span>
                    </div>
                  </div>

                  <div>
                    <FieldLabel>Дълбочина — {depth} см</FieldLabel>
                    <input
                      type="range"
                      min={55}
                      max={70}
                      step={5}
                      value={depth}
                      onChange={(e) => setDepth(Number(e.target.value))}
                      className="w-full accent-ink"
                      aria-label="Дълбочина в сантиметри"
                    />
                    <div className="mt-1 flex justify-between text-[11px] text-stone-400">
                      <span>55</span>
                      <span>70</span>
                    </div>
                  </div>

                  <div>
                    <FieldLabel>Врати</FieldLabel>
                    <Segmented
                      options={[0, 1, 2, 3]}
                      value={doors}
                      onChange={setDoors}
                    />
                  </div>

                  <div>
                    <FieldLabel>Чекмеджета</FieldLabel>
                    <Segmented
                      options={[0, 1, 2, 3, 4]}
                      value={drawers}
                      onChange={setDrawers}
                    />
                  </div>

                  <div>
                    <FieldLabel>Заден панел</FieldLabel>
                    <Segmented
                      options={[true, false]}
                      value={backPanel}
                      onChange={setBackPanel}
                      format={(v) => (v ? "Да" : "Не")}
                    />
                  </div>

                  <div>
                    <FieldLabel>Материал</FieldLabel>
                    <Segmented
                      options={MATERIALS.map((m) => m.id)}
                      value={material}
                      onChange={setMaterial}
                      format={(id) =>
                        MATERIALS.find((m) => m.id === id)?.label ?? String(id)
                      }
                    />
                  </div>

                  <div>
                    <FieldLabel>Количество</FieldLabel>
                    <Segmented
                      options={[1, 2, 3]}
                      value={quantity}
                      onChange={setQuantity}
                    />
                  </div>
                </div>

                <div className="mt-10 border-t border-stone-100 pt-6">
                    <div className="flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <p className="text-[11px] tracking-[0.16em] text-stone-400 uppercase">
                          Цена
                        </p>
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={price}
                            initial={reduce ? false : { opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduce ? undefined : { opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                            className="font-display text-3xl text-ink"
                          >
                            {formatEur(price)}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                      <button
                        type="button"
                        onClick={handleAdd}
                        className="w-full rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
                      >
                        {added ? "Добавено" : "Добави в количката"}
                      </button>
                    </div>
                  <p className="mt-3 text-xs text-stone-400">
                    Демонстрационни стойности · не е реална поръчка
                  </p>
                </div>
              </div>

              {/* Preview */}
              <div className="relative bg-gradient-to-b from-[#f3f0ea] to-[#e8e4db] p-6 md:p-10">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[11px] font-medium tracking-[0.18em] text-stone-500 uppercase">
                    Визуализация
                  </p>
                  <p className="text-xs text-stone-500">
                    {width} × {height} × {depth} см
                  </p>
                </div>
                <FurnitureVisual
                  widthCm={width}
                  heightCm={height}
                  depthCm={depth}
                  doors={doors}
                  drawers={drawers}
                  backPanel={backPanel}
                  material={material}
                  showDimensions
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-stone-300/70 bg-white/70 px-3 py-1 text-xs text-stone-600">
                    {doors} врати
                  </span>
                  <span className="rounded-full border border-stone-300/70 bg-white/70 px-3 py-1 text-xs text-stone-600">
                    {drawers} чекмеджета
                  </span>
                  <span className="rounded-full border border-stone-300/70 bg-white/70 px-3 py-1 text-xs text-stone-600">
                    {backPanel ? "Заден панел" : "Без заден панел"}
                  </span>
                  <span className="rounded-full border border-stone-300/70 bg-white/70 px-3 py-1 text-xs text-stone-600">
                    {materialMeta.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
