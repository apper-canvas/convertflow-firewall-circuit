import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ className, variant = "primary", size = "md", disabled, children, ...props }, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary: "bg-white text-gray-700 border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
    success: "bg-gradient-to-r from-success to-emerald-500 text-white shadow-md hover:shadow-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed",
    outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "rounded-lg font-medium transition-all duration-200 transform active:scale-98 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;