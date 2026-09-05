"use client";

import { cn } from "@/lib/utils";

export type FurnitureVisualProps = {
  widthCm: number;
  heightCm: number;
  depthCm: number;
  doors: number;
  drawers: number;
  backPanel: boolean;
  material: "byalo" | "dabak" | "antratsit";
  showDimensions?: boolean;
  className?: string;
  compact?: boolean;
};

const MATERIAL_STYLES: Record<
  FurnitureVisualProps["material"],
  { face: string; edge: string; shadow: string; label: string }
> = {
  byalo: {
    face: "linear-gradient(145deg, #fafafa 0%, #f0f0ee 45%, #e8e8e4 100%)",
    edge: "#d4d4d0",
    shadow: "rgba(40, 36, 32, 0.18)",
    label: "Бяло",
  },
  dabak: {
    face: "linear-gradient(145deg, #d9c4a4 0%, #c4a882 45%, #b8966e 100%)",
    edge: "#9a7a55",
    shadow: "rgba(60, 40, 20, 0.22)",
    label: "Дъб",
  },
  antratsit: {
    face: "linear-gradient(145deg, #4a4a48 0%, #353533 45%, #2a2a28 100%)",
    edge: "#1f1f1d",
    shadow: "rgba(0, 0, 0, 0.35)",
    label: "Антрацит",
  },
};

export function FurnitureVisual({
  widthCm,
  heightCm,
  depthCm,
  doors,
  drawers,
  backPanel,
  material,
  showDimensions = true,
  className,
  compact = false,
}: FurnitureVisualProps) {
  const mat = MATERIAL_STYLES[material];
  const isDark = material === "antratsit";
  const handle = isDark ? "#c8c8c4" : "#8a8a86";
  const gap = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";

  // Scale relative to wardrobe demo defaults (180 × 220 × 60)
  const scaleW = widthCm / 180;
  const scaleH = heightCm / 220;
  const scaleD = depthCm / 60;

  const doorCount = Math.max(0, Math.min(3, doors));
  const drawerCount = Math.max(0, Math.min(4, drawers));

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-x-clip",
        compact ? "min-h-[200px]" : "min-h-[280px] sm:min-h-[320px] md:min-h-[420px]",
        className,
      )}
    >
      {/* Soft studio ground */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[8%] bottom-[12%] h-[18%] rounded-[100%] bg-stone-900/6 blur-2xl"
      />

      <div
        className="furniture-stage relative mx-auto w-full max-w-[min(100%,260px)] transition-all duration-500 ease-out sm:max-w-[300px] md:max-w-[340px]"
        style={{
          width: compact
            ? `${Math.min(180, 160 * scaleW)}px`
            : `${Math.min(340, 260 * scaleW)}px`,
          transform: `perspective(900px) rotateY(-14deg) rotateX(5deg) scale(${0.92 + scaleD * 0.08})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Back panel */}
        {backPanel ? (
          <div
            className="absolute -top-[6%] right-[-8%] bottom-[8%] w-[12%] rounded-sm transition-opacity duration-300"
            style={{
              background: mat.edge,
              transform: "translateZ(-28px)",
              boxShadow: `inset 2px 0 8px ${mat.shadow}`,
            }}
          />
        ) : null}

        {/* Main body */}
        <div
          className="relative overflow-hidden rounded-[3px] transition-all duration-500"
          style={{
            height: compact ? `${180 * scaleH}px` : `${240 * scaleH}px`,
            background: mat.face,
            boxShadow: `
              14px 18px 40px ${mat.shadow},
              inset -1px 0 0 ${mat.edge},
              inset 0 1px 0 rgba(255,255,255,0.45)
            `,
            border: `1px solid ${mat.edge}`,
          }}
        >
          {/* Top surface highlight */}
          <div
            className="absolute inset-x-0 top-0 h-[6%]"
            style={{
              background: isDark
                ? "linear-gradient(180deg, rgba(255,255,255,0.08), transparent)"
                : "linear-gradient(180deg, rgba(255,255,255,0.7), transparent)",
            }}
          />

          {/* Cabinet layout */}
          <div className="absolute inset-[5%] flex gap-[2%]">
            {/* Doors column */}
            {doorCount > 0 ? (
              <div
                className="flex flex-1 gap-[2%]"
                style={{ flex: doorCount >= 2 ? 1.1 : 0.85 }}
              >
                {Array.from({ length: doorCount }).map((_, i) => (
                  <div
                    key={`door-${i}`}
                    className="relative flex-1 rounded-[2px] transition-all duration-300"
                    style={{
                      background: isDark
                        ? "linear-gradient(160deg, rgba(255,255,255,0.04), transparent)"
                        : "linear-gradient(160deg, rgba(255,255,255,0.5), rgba(0,0,0,0.02))",
                      border: `1px solid ${gap}`,
                      boxShadow: `inset 0 0 0 1px ${gap}`,
                    }}
                  >
                    <span
                      className="absolute top-1/2 h-[14%] w-[3px] -translate-y-1/2 rounded-full"
                      style={{
                        background: handle,
                        right: i === doorCount - 1 && doorCount > 1 ? "12%" : "auto",
                        left: i === 0 || doorCount === 1 ? "12%" : "auto",
                        opacity: 0.85,
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {/* Drawers column */}
            {drawerCount > 0 ? (
              <div
                className="flex flex-col gap-[2.5%]"
                style={{ flex: doorCount > 0 ? 0.75 : 1 }}
              >
                {Array.from({ length: drawerCount }).map((_, i) => (
                  <div
                    key={`drawer-${i}`}
                    className="relative flex-1 rounded-[2px] transition-all duration-300"
                    style={{
                      background: isDark
                        ? "linear-gradient(180deg, rgba(255,255,255,0.05), transparent)"
                        : "linear-gradient(180deg, rgba(255,255,255,0.55), rgba(0,0,0,0.025))",
                      border: `1px solid ${gap}`,
                    }}
                  >
                    <span
                      className="absolute top-1/2 left-1/2 h-[3px] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{ background: handle, opacity: 0.8 }}
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {/* Empty open shelf if no doors/drawers */}
            {doorCount === 0 && drawerCount === 0 ? (
              <div
                className="flex-1 rounded-[2px]"
                style={{ border: `1px solid ${gap}` }}
              />
            ) : null}
          </div>

          {/* Side depth edge */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[4%]"
            style={{
              background: `linear-gradient(90deg, transparent, ${mat.edge})`,
              opacity: 0.55,
            }}
          />
        </div>

        {/* Legs / plinth */}
        <div className="mt-[2px] flex justify-between px-[6%]">
          <div
            className="h-[10px] w-[8%] rounded-b-sm"
            style={{ background: mat.edge }}
          />
          <div
            className="h-[10px] w-[8%] rounded-b-sm"
            style={{ background: mat.edge }}
          />
        </div>
      </div>

      {showDimensions && !compact ? (
        <>
          <span className="absolute top-[10%] left-[2%] hidden text-[10px] tracking-[0.18em] text-stone-400 uppercase sm:block">
            {widthCm * 10} mm
          </span>
          <span className="absolute right-[2%] bottom-[28%] hidden text-[10px] tracking-[0.18em] text-stone-400 uppercase sm:block">
            {heightCm * 10} mm
          </span>
          <span className="absolute bottom-[6%] left-1/2 -translate-x-1/2 text-[10px] tracking-[0.18em] text-stone-400 uppercase">
            {depthCm * 10} mm
          </span>
        </>
      ) : null}
    </div>
  );
}
