"use client";
import React, { useContext } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ITooltip } from "./types";
import { twMerge } from "tailwind-merge";
import { EliraThemeContext } from "../Providers";

export const Tooltip: React.FC<ITooltip> = ({
  children,
  message,
  className,
  onChange,
  contentProps,
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
          {...contentProps}
          className={twMerge(C_EliraTheme.tooltip?.className, className)}
        >
          {message}
        </TooltipPrimitive.TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  );
};
