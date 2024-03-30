import React, { useContext } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { T_Tooltip } from "./types";
import { twMerge } from "tailwind-merge";
import { EliraThemeContext } from "../Providers";

export const Tooltip: React.FC<T_Tooltip> = ({
  children,
  message,
  className,
  onChange,
}) => {
  //---------------------------- CONTEXT  ---------------------------- //

  const C_EliraTheme = useContext(EliraThemeContext);

  //---------------------------- STATES  ---------------------------- //

  return (
    <TooltipPrimitive.TooltipProvider delayDuration={200}>
      <TooltipPrimitive.Root onOpenChange={onChange}>
        <TooltipPrimitive.Trigger asChild={typeof children != "string"}>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.TooltipContent
          className={twMerge(C_EliraTheme.theme.tooltip?.className, className)}
        >
          {message}
        </TooltipPrimitive.TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  );
};
