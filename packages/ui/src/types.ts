import { IButtonTheme } from "./components/Button/types";
import { ICardTheme } from "./components/Card/types";
import { ILayoutTheme } from "./components/Layout/types";
import { ITooltipTheme } from "./components/Tooltip/types";
export interface T_EliraProvidor {
  children: React.ReactNode;
  theme: IEliraThemeConfig;
}

export interface IEliraThemeConfig {
  theme: T_ComponentThemeConfig;
}

export interface T_ComponentThemeConfig {
  button: IButtonTheme;
  layout?: ILayoutTheme;
  tooltip?: ITooltipTheme;
  card?: ICardTheme;
}
