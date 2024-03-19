import React, { useContext } from "react";
import { T_Button } from "./types";
import { EliraThemeContext } from "../Providers";
import { twMerge } from "tailwind-merge";

export const Button = React.forwardRef<HTMLButtonElement, T_Button>(
  ({ variant, size, buttonSizes, buttonTypes, ...rest }, ref) => {
    const C_EliraTheme = useContext(EliraThemeContext);

    const CONTEXT_BUTTON_VARIANT = C_EliraTheme.theme.button?.buttonTypes.find(
      (v) => v.name === variant
    )?.className;
    const CONTEXT_BUTTON_SIZE = C_EliraTheme.theme.button?.buttonSizes.find(
      (v) => v.name === size
    )?.className;
    const PROP_BUTTON_VARIANT = buttonTypes?.find(
      (v) => v.name === variant
    )?.className;
    const PROP_BUTTON_SIZE = buttonSizes?.find(
      (v) => v.name === size
    )?.className;

    return (
      <button
        ref={ref}
        className={twMerge(
          CONTEXT_BUTTON_SIZE,
          PROP_BUTTON_SIZE,
          CONTEXT_BUTTON_VARIANT,
          PROP_BUTTON_VARIANT
        )}
        {...rest}
      />
    );
  }
);
