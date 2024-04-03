"use client";
import React, { useContext } from "react";
import { IPage } from "./types";
import { twMerge } from "tailwind-merge";
import { EliraThemeContext } from "../Providers";

export const Page = React.forwardRef<HTMLDivElement, IPage>(
  ({ className, children, variant, ...rest }, ref) => {
    const C_EliraTheme = useContext(EliraThemeContext);

    const PAGE_VARIANT = C_EliraTheme.theme.page
      ? C_EliraTheme.theme.page[variant]
      : undefined;

    return (
      <div ref={ref} className={twMerge(PAGE_VARIANT, className)} {...rest}>
        {children}
      </div>
    );
  }
);
