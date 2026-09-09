import * as React from "react";
import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  watermark: string;
  badgeText?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHeader({
  watermark,
  badgeText,
  title,
  description,
  children
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-neutral-200/60 dark:border-neutral-800/60 mb-10">
      {/* Background Watermark Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 right-0 select-none text-[70px] sm:text-[110px] md:text-[140px] font-black tracking-tighter text-neutral-100/90 dark:text-neutral-900/40 uppercase leading-none z-0"
      >
        {watermark}
      </div>

      <div className="relative z-10 max-w-3xl space-y-3">
        {badgeText && (
          <Badge variant="secondary" className="mb-2 text-xs font-medium">
            {badgeText}
          </Badge>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          {description}
        </p>
        {children && <div className="pt-2">{children}</div>}
      </div>
    </div>
  );
}
