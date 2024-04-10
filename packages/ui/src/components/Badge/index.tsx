import React, { useContext } from "react";
import { IBadge } from "./types";
import { EliraThemeContext } from "../Providers";
import { twMerge } from "tailwind-merge";

export const Badge: React.FC<IBadge> = ({ className, variant, size, ...rest }) => {
  const ELIRA_BADGE_VARIANT_CLASS =
    useContext(EliraThemeContext).theme.badge?.badgeVariants[variant];

  const ELIRA_BADGE_SIZE_VARIANT_CLASS =
    useContext(EliraThemeContext).theme.badge?.badgeSizeVariants[size];

  return (
    <div
      className={twMerge(
        ELIRA_BADGE_SIZE_VARIANT_CLASS,
        ELIRA_BADGE_VARIANT_CLASS,
        className
      )}
      {...rest}
    />
  );
};


