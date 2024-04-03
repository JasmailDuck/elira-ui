"use client";
import React, { useContext } from "react";
import { ILayout } from "./types";
import { twMerge } from "tailwind-merge";
import { EliraThemeContext } from "../Providers";

export const Layout = React.forwardRef<HTMLDivElement, ILayout>(
  ({ className, children, variant, ...rest }, ref) => {
    const C_EliraTheme = useContext(EliraThemeContext);

    const LAYOUT_VARIANT = C_EliraTheme.theme.layout
      ? C_EliraTheme.theme.layout[variant]
      : undefined;

    return (
      <div ref={ref} className={twMerge(LAYOUT_VARIANT, className)} {...rest}>
        {children}
      </div>
    );
  }
);
