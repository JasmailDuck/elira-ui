import React from "react";

export interface T_ButtonVariant {
  name: string;
  className: string;
}

export interface T_ButtonSize {
  name: string;
  className: string;
}

export interface T_ButtonTheme {
  buttonTypes: T_ButtonVariant[];
  buttonSizes: T_ButtonSize[];
}

export interface T_Button
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  size: string;
  buttonTypes?: T_ButtonVariant[];
  buttonSizes?: T_ButtonSize[];
}
