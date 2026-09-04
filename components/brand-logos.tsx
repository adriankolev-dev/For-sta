import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogosProps = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

/** Single lockup: adrexio × Forèsta — use only in one place (navbar). */
export function BrandLogos({
  variant = "light",
  size = "sm",
  className,
}: BrandLogosProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn("flex items-center gap-2.5 sm:gap-3", className)}
      aria-label="adrexio × Forèsta"
    >
      <AdrexioMark
        dark={isDark}
        className={cn(
          size === "sm" && "h-6 sm:h-7",
          size === "md" && "h-8",
          size === "lg" && "h-10",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "text-sm font-light",
          isDark ? "text-white/30" : "text-stone-300",
        )}
      >
        ×
      </span>
      <ForestaMark size={size} dark={isDark} />
    </div>
  );
}

export function AdrexioMark({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG wordmark needs <img> for invert filter
    <img
      src="/logos/adrexio.svg"
      alt="adrexio"
      width={140}
      height={30}
      className={cn(
        "h-7 w-auto object-contain object-left",
        dark && "brightness-0 invert",
        className,
      )}
    />
  );
}

export function ForestaMark({
  className,
  size = "sm",
  dark = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}) {
  const dims =
    size === "sm"
      ? { h: "h-9 sm:h-10", w: 52, hPx: 44 }
      : size === "md"
        ? { h: "h-11", w: 64, hPx: 54 }
        : { h: "h-14", w: 80, hPx: 68 };

  return (
    <Image
      src={dark ? "/logos/foresta-on-dark.webp" : "/logos/foresta.webp"}
      alt="Forèsta Furniture & Interiors"
      width={dims.w}
      height={dims.hPx}
      className={cn(dims.h, "w-auto object-contain object-left", className)}
      priority
    />
  );
}
