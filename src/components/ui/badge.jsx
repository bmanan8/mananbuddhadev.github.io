import * as React from "react";

export function Badge({ children, variant = "secondary", className = "", ...props }) {
  const baseStyles = "inline-flex items-center rounded-xl px-2 py-0.5 text-xs font-medium";
  const variants = {
    secondary: "bg-slate-100 text-slate-900 border border-slate-200",
    outline: "border border-slate-300 text-slate-900"
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
