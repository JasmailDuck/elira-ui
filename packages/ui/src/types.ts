import { IAvatorTheme } from "./components/Avatar/types";
import { IBadgeTheme } from "./components/Badge/types";
import { IButtonTheme } from "./components/Button/types";
import { ICardTheme } from "./components/Card/types";
import { ILayoutTheme } from "./components/Layout/types";
import { IModalTheme } from "./components/Modal/types";
import { IPageTheme } from "./components/Page/types";
import { IPopoverTheme } from "./components/Popover/types";
import { ISelectTheme } from "./components/Select/types";
import { ITableTheme } from "./components/Table/types";
import { ITooltipTheme } from "./components/Tooltip/types";
export interface IEliraProvider {
  children: React.ReactNode;
  theme: Partial<IEliraThemeConfig>;
}

export interface IEliraThemeConfig {
  button: IButtonTheme;
  layout: ILayoutTheme;
  tooltip: ITooltipTheme;
  card: ICardTheme;
  page: IPageTheme;
  avatar: IAvatorTheme;
  badge: IBadgeTheme;
  popover: IPopoverTheme;
  modal: IModalTheme;
  table: ITableTheme;
  select: ISelectTheme;
}
