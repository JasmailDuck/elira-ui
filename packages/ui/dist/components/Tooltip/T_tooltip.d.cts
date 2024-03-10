interface T_TooltipTheme {
    cssStyle?: React.CSSProperties;
    className?: string;
}
interface T_Tooltip {
    message: string;
    children: React.ReactNode | string;
}

export type { T_Tooltip, T_TooltipTheme };
