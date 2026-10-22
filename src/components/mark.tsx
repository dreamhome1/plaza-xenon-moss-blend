import { cn } from "@/lib/cn";

export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M7 18.2 20 8l13 10.2V33H7V18.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16.5 33V23h7v10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M17.4 15.6h2.2c1.35 0 2.15.62 2.15 1.52 0 .72-.45 1.25-1.18 1.42.9.18 1.52.8 1.52 1.62 0 1.08-.9 1.8-2.45 1.8H17.4v-6.36Zm1.35 1.08v1.62h.82c.62 0 .98-.26.98-.8s-.36-.82-.98-.82h-.82Zm0 2.7v1.8h1c.72 0 1.08-.28 1.08-.9s-.36-.9-1.08-.9h-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BrandLockup({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  const cream = tone === "cream";
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-sm",
          cream ? "bg-on-forest text-gold-2" : "bg-forest text-gold-2",
        )}
      >
        <Monogram className="size-7" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-sans text-sm font-semibold tracking-brand",
            cream ? "text-on-forest" : "text-ink",
          )}
        >
          BDREAM
        </span>
        <span className={cn("mt-1 block font-sans text-xs font-medium tracking-brand", cream ? "text-gold-2" : "text-gold")}>
          HOME
        </span>
      </span>
    </span>
  );
}
