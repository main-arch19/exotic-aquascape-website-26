import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const inputBase =
  "w-full rounded-xl border border-deep-water/15 bg-white/70 px-4 py-3 text-deep-water placeholder:text-ink-400/70 outline-none transition-colors duration-200 focus:border-emerald focus:bg-white focus:ring-2 focus:ring-lagoon/30";

function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-deep-water">
      {children}
    </label>
  );
}

type BaseProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

export function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  className,
}: BaseProps & { type?: "text" | "email" | "tel" }) {
  return (
    <div className={className}>
      <Label htmlFor={id}>
        {label} {required && <span className="text-koi">*</span>}
      </Label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputBase}
      />
    </div>
  );
}

export function TextArea({ id, label, value, onChange, required, placeholder, className }: BaseProps) {
  return (
    <div className={className}>
      <Label htmlFor={id}>
        {label} {required && <span className="text-koi">*</span>}
      </Label>
      <textarea
        id={id}
        name={id}
        value={value}
        required={required}
        placeholder={placeholder}
        rows={4}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputBase, "resize-none")}
      />
    </div>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  required,
  options,
  placeholder = "Select…",
  className,
}: BaseProps & { options: { value: string; label: string }[] }) {
  return (
    <div className={className}>
      <Label htmlFor={id}>
        {label} {required && <span className="text-koi">*</span>}
      </Label>
      <select
        id={id}
        name={id}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputBase, "appearance-none bg-[right_1rem_center] bg-no-repeat", !value && "text-ink-400/70")}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%231b7a5a' stroke-width='2'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
