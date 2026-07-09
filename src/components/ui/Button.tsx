import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "light" | "outlineLight" | "outlineDark" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon disabled:opacity-50 disabled:pointer-events-none will-change-transform";

const variants: Record<Variant, string> = {
  // The koi-coral CTA — the one warm accent, reserved for conversion.
  primary:
    "bg-koi text-white shadow-[0_10px_30px_-8px_rgba(232,116,59,0.6)] hover:bg-koi-600 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(232,116,59,0.7)]",
  light: "bg-sand text-deep-water hover:bg-white hover:-translate-y-0.5",
  outlineLight:
    "border border-sand/40 text-sand hover:border-sand hover:bg-sand/10",
  outlineDark:
    "border border-deep-water/25 text-deep-water hover:border-deep-water hover:bg-deep-water/5",
  ghost: "text-deep-water hover:bg-deep-water/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", children, className, icon } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, onClick, target, rel } = props;
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  const { variant: _v, size: _s, children: _c, className: _cn, icon: _i, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
