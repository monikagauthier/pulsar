import { cn } from "@/lib/cn";

/** Monospace telemetry-style eyebrow with a precision dot. */
export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-energy",
        className,
      )}
    >
      <span className="h-[7px] w-[7px] rounded-full bg-energy shadow-[0_0_0_4px_rgba(185,220,89,0.14)]" />
      {children}
    </span>
  );
}
