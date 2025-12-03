"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  variant?: "success" | "warning" | "info" | "default"
  size?: "sm" | "md"
  children: React.ReactNode
  className?: string
}

const variantStyles = {
  success:
    "text-[var(--status-green)] border border-[var(--status-green)] shadow-[0_0_6px_var(--status-green)_inset]",
  warning:
    "text-[var(--status-amber)] border border-[var(--status-amber)] ",
  info:
    "text-[var(--status-cyan)] border border-[var(--status-cyan)] shadow-[0_0_6px_var(--status-cyan)_inset]",
  default: "text-secondary-foreground border border-border shadow-[0_0_4px_var(--border)_inset]",
}

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-0.5 text-xs",
}

export function StatusBadge({
  variant = "default",
  size = "md",
  children,
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}
