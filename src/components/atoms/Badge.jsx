import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Badge = forwardRef(({ className, variant = "default", children, ...props }, ref) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    documents: "bg-blue-100 text-blue-800",
    images: "bg-purple-100 text-purple-800",
    audio: "bg-green-100 text-green-800",
    video: "bg-orange-100 text-orange-800",
    success: "bg-success/10 text-success",
    error: "bg-error/10 text-error"
  };

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";
export default Badge;