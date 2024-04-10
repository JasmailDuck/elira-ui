import React from "react";

export interface IBadgeTheme {
  badgeVariants: { [key: string]: string };
  badgeSizeVariants: { [key: string]: string };
}

export interface IBadge extends React.HTMLAttributes<HTMLDivElement> {
  variant: string;
  size: string;
}
