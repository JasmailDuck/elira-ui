import { T_ButtonTheme } from "./components/Button/types";
import { T_LayoutTheme } from "./components/Layout/types";
import { T_TooltipTheme } from "./components/Tooltip/T_tooltip";

export interface T_EliraProvidor {
  children: React.ReactNode;
  theme: T_EliraThemeConfig;
}

export interface T_EliraThemeConfig {
  theme: T_ComponentThemeConfig;
}

export interface T_ComponentThemeConfig {
  button: T_ButtonTheme
  layout?: T_LayoutTheme;
  tooltip?: T_TooltipTheme;
}
