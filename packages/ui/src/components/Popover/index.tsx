"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";
import { IPopoverContent, IPopoverTrigger } from "./types";
import { EliraThemeContext } from "../Providers";

export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> &
    IPopoverTrigger
>(({ className, variant, children, ...rest }, ref) => {
  const ELIRA_POPOVER_TRIGGER_CLASS =
    React.useContext(EliraThemeContext).popover?.triggerVariant.variant[
      variant
    ];

  return (
    <PopoverPrimitive.Trigger
      className={twMerge(ELIRA_POPOVER_TRIGGER_CLASS, className)}
      asChild={typeof children != "string"}
    >
      {children}
    </PopoverPrimitive.Trigger>
  );
});

PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    IPopoverContent
>(({ className, variant, ...props }, ref) => {
  const ELIRA_POPOVER_CONTENT_CLASS =
    React.useContext(EliraThemeContext).popover?.contentVariant.variant[
      variant
    ];
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        className={twMerge(ELIRA_POPOVER_CONTENT_CLASS, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
