import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark" | "ghost" | "goldOutline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide rounded-md transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    // Antique Gold with Navy text
    primary:
      "bg-[#C5A15D] text-[#071F38] hover:bg-[#D9B979] shadow-sm hover:shadow-md focus:ring-[#C5A15D]",
    // Deep Navy with Gold border & Ivory text
    dark:
      "bg-[#071F38] text-[#FAF8F5] border border-[#C5A15D]/40 hover:bg-[#0B2D50] hover:border-[#C5A15D] shadow-sm focus:ring-[#071F38]",
    // Secondary Ivory / Light background
    secondary:
      "bg-[#EAE3D6] text-[#071F38] hover:bg-[#D9D0C0] border border-[#D9D0C0] focus:ring-[#C5A15D]",
    // Outline Navy
    outline:
      "bg-transparent border border-[#071F38]/30 text-[#071F38] hover:bg-[#071F38]/5 hover:border-[#071F38] focus:ring-[#071F38]",
    // Outline Gold on dark
    goldOutline:
      "bg-transparent border border-[#C5A15D] text-[#D9B979] hover:bg-[#C5A15D]/10 hover:border-[#D9B979] focus:ring-[#C5A15D]",
    // Ghost
    ghost:
      "bg-transparent text-[#071F38] hover:bg-[#071F38]/5 focus:ring-[#071F38]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
