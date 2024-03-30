import React, { useContext } from "react";
import { ICardTypes } from "./types";
import { twMerge } from "tailwind-merge";
import { EliraThemeContext } from "../Providers";

export const Card = React.forwardRef<HTMLDivElement, ICardTypes>(
  ({ className, children, variant, ...rest }, ref) => {
    const C_EliraTheme = useContext(EliraThemeContext);

    const CARD_VARIANT = C_EliraTheme.theme.card
      ? C_EliraTheme.theme.card[variant]
      : undefined;
    return (
      <div ref={ref} className={twMerge(CARD_VARIANT, className)} {...rest}>
        {children}
      </div>
    );
  }
);
