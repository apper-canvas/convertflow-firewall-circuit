import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const ProgressBar = forwardRef(({ className, value = 0, max = 100, showLabel = true, ...props }, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
        {showLabel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-white mix-blend-difference">
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

ProgressBar.displayName = "ProgressBar";
export default ProgressBar;