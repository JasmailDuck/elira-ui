"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React, { useContext } from "react";
import { EliraThemeContext } from "../Providers";
import { twMerge } from "tailwind-merge";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={twMerge("", className)}
      {...props}
    />
  );
});
