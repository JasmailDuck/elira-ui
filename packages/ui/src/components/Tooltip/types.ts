import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export interface ITooltipTheme {
  className?: string;
}

export interface ITooltip extends ITooltipTheme {
  message: string;
  children: React.ReactNode | string;
  onChange?: (open: boolean) => void;
  contentProps?: TooltipPrimitive.TooltipContentProps;
}
