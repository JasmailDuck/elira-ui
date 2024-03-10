export interface T_TooltipTheme {
  cssStyle?: React.CSSProperties;
  className?: string;
}

export interface T_Tooltip {
  message: string;
  children: React.ReactNode | string;
}
