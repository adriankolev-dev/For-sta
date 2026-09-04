import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-[11px] font-medium tracking-[0.22em] uppercase",
            light ? "text-white/50" : "text-stone-500",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.12] tracking-[-0.02em]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            light ? "text-white/65" : "text-stone-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
