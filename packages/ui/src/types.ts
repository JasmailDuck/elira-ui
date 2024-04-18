import { IAvatorTheme } from "./components/Avatar/types";
import { IBadgeTheme } from "./components/Badge/types";
import { IButtonTheme } from "./components/Button/types";
import { ICardTheme } from "./components/Card/types";
import { ILayoutTheme } from "./components/Layout/types";
import { IModalTheme } from "./components/Modal/types";
import { IPageTheme } from "./components/Page/types";
import { IPopoverTheme } from "./components/Popover/types";
import { ITooltipTheme } from "./components/Tooltip/types";
export interface IEliraProvider<T extends IEliraThemeConfig> {
  children: React.ReactNode;
  theme: T;
}


export interface IEliraThemeConfig {
  button: IButtonTheme;
  layout?: ILayoutTheme;
  tooltip?: ITooltipTheme;
  card?: ICardTheme;
  page?: IPageTheme;
  avatar?: IAvatorTheme;
  badge?: IBadgeTheme;
  popover?: IPopoverTheme;
  modal?: IModalTheme;
}
