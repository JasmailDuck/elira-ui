import React, { useContext } from "react";
import { T_Layout } from "./types";
import { twMerge } from "tailwind-merge";
import { EliraThemeContext } from "../Providers";

export const Layout = React.forwardRef<HTMLDivElement, T_Layout>(
  ({ className, children, ...rest }, ref) => {
    const C_EliraTheme = useContext(EliraThemeContext);
    return (
      <div
        ref={ref}
        className={twMerge(C_EliraTheme.theme.layout?.className, className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
