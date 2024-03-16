import { ReactHTMLElement } from "react";

export interface T_TooltipTheme {
  className?: string;
}

export interface T_Tooltip extends T_TooltipTheme{
  message: string;
  children: React.ReactNode | string
}
