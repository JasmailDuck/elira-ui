"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import {
  ISelectContent,
  ISelectItem,
  ISelectItemIndicator,
  ISelectLabel,
  ISelectScrollDownButton,
  ISelectScrollUpButton,
  ISelectTrigger,
} from "./types";
import { EliraThemeContext } from "../Providers";

export const Select = SelectPrimitive.Root;

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
    ISelectTrigger
>(({ className, children, variant, icon, ...props }, ref) => {
  const SelectTriggerVariant =
    React.useContext(EliraThemeContext).select?.selectTriggerType.variants[
      variant
    ];
  const SelectTriggerIcon =
    React.useContext(EliraThemeContext).select?.selectTriggerType.icon[icon];
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={twMerge(SelectTriggerVariant, className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>{SelectTriggerIcon}</SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> &
    ISelectScrollUpButton
>(({ className, upVariant, upIcon, ...props }, ref) => {
  const SelectScrollUpVariant =
    React.useContext(EliraThemeContext).select?.selectScrollUpButtonType
      .variants[upVariant];
  const SelectScrollUpIcon =
    React.useContext(EliraThemeContext).select?.selectScrollUpButtonType.icon[
      upVariant
    ];
  return (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={twMerge(SelectScrollUpVariant, className)}
      {...props}
    >
      {SelectScrollUpIcon}
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

export const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> &
    ISelectScrollDownButton
>(({ className, downVariant, downIcon, ...props }, ref) => {
  const SelectScrollDownVariant =
    React.useContext(EliraThemeContext).select?.selectScrollDownButtonType
      .variants[downVariant];
  const SelectScrollDownIcon =
    React.useContext(EliraThemeContext).select?.selectScrollDownButtonType.icon[
      downIcon
    ];
  return (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={twMerge(SelectScrollDownVariant, className)}
      {...props}
    >
      {SelectScrollDownIcon}
    </SelectPrimitive.ScrollDownButton>
  );
});
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
    ISelectContent &
    ISelectScrollDownButton &
    ISelectScrollUpButton
>(
  (
    {
      className,
      children,
      variant,
      downIcon,
      downVariant,
      upIcon,
      upVariant,
      position = "popper",
      ...props
    },
    ref
  ) => {
    const SelectContentVariant =
      React.useContext(EliraThemeContext).select?.selectContentType[variant];
    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={twMerge(SelectContentVariant, className)}
          position={position}
          {...props}
        >
          <SelectScrollUpButton upIcon={upIcon} upVariant={upVariant} />
          <SelectPrimitive.Viewport className={twMerge()}>
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton
            downIcon={downIcon}
            downVariant={downVariant}
          />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  }
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & ISelectLabel
>(({ className, variant, ...props }, ref) => {
  const SelectLabelVariant =
    React.useContext(EliraThemeContext).select?.selectLabelType[variant];
  return (
    <SelectPrimitive.Label
      ref={ref}
      className={twMerge(SelectLabelVariant, className)}
      {...props}
    />
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> &
    ISelectItem &
    ISelectItemIndicator
>(
  (
    { className, children, variant, indicatorVariant, indicatorIcon, ...props },
    ref
  ) => {
    const SelectItemVariant =
      React.useContext(EliraThemeContext).select?.selectItemType[variant];

    const SelectItemIndicatorVariant =
      React.useContext(EliraThemeContext).select?.selectItemIndicator.variants[
        variant
      ];
    const SelectItemIndicatorIcon =
      React.useContext(EliraThemeContext).select?.selectItemIndicator.icon[
        variant
      ];

    return (
      <SelectPrimitive.Item
        ref={ref}
        className={twMerge(SelectItemVariant, className)}
        {...props}
      >
        <span className={SelectItemIndicatorVariant}>
          <SelectPrimitive.ItemIndicator>
            {SelectItemIndicatorIcon}
          </SelectPrimitive.ItemIndicator>
        </span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> &
    ISelectLabel
>(({ className, variant, ...props }, ref) => {
  const SelectSeparatorVariant =
    React.useContext(EliraThemeContext).select?.selectSeparatorType[variant];
  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={twMerge(SelectSeparatorVariant, className)}
      {...props}
    />
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
