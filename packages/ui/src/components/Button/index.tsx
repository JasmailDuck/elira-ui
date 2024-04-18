"use client";
import React, { useContext } from "react";
import { IButton } from "./types";
import { EliraThemeContext } from "../Providers";
import { twMerge } from "tailwind-merge";

export const Button = React.forwardRef<HTMLButtonElement, IButton>(
  ({ variant, size, className, ...rest }, ref) => {
    const C_EliraTheme = useContext(EliraThemeContext);

    const CONTEXT_BUTTON_VARIANT =
      C_EliraTheme.button?.buttonTypes[variant];
    const CONTEXT_BUTTON_SIZE = C_EliraTheme.button?.buttonSizes[size];
    return (
      <button
        ref={ref}
        className={twMerge(
          CONTEXT_BUTTON_SIZE,
          CONTEXT_BUTTON_VARIANT,
          className
        )}
        {...rest}
      />
    );
  }
);
