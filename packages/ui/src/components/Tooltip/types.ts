export interface ITooltipTheme {
  className?: string;
}

export interface ITooltip extends ITooltipTheme {
  message: string;
  children: React.ReactNode | string;
  onChange?: (open: boolean) => void;
}
