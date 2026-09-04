import { BrandLogos } from "@/components/brand-logos";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <BrandLogos variant="dark" size="md" />

          <div className="text-left sm:text-right">
            <p className="text-[11px] font-medium tracking-[0.18em] text-white/70 uppercase">
              Дигитален конфигуратор за мебели
            </p>
            <p className="mt-2 text-[11px] tracking-[0.14em] text-white/40 uppercase">
              Проектно предложение · 2026
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>Подготвено от adrexio за Forèsta Furniture &amp; Interiors</p>
          <p>Конфиденциално проектно предложение</p>
        </div>
      </div>
    </footer>
  );
}
