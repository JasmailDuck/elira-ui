import { T_TooltipTheme } from './components/Tooltip/T_tooltip.js';

interface T_EliraProvidor {
    children: React.ReactNode;
    theme: T_EliraThemeConfig;
}
interface T_EliraThemeConfig {
    theme: T_ComponentThemeConfig;
}
interface T_ComponentThemeConfig {
    tooltip?: T_TooltipTheme;
}

export type { T_ComponentThemeConfig, T_EliraProvidor, T_EliraThemeConfig };
