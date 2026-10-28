import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path
      d="M3 8h9M8 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** PULSAR Design System — primary action. Restrained corners, no bubble UI. */
export function Button({
  href,
  children,
  variant = "solid",
  className,
}: Props) {
  const base =
    "inline-flex items-center gap-3 px-6 py-3 font-display font-semibold rounded-sm transition-transform duration-300 ease-out hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-energy text-deep-900 hover:shadow-[0_10px_30px_-12px_rgba(185,220,89,0.5)]"
      : "border border-energy/20 text-current hover:border-energy hover:bg-energy/10";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
