import React from "react";

export interface IButtonTheme {
  buttonTypes: { [key: string]: string };
  buttonSizes: { [key: string]: string };
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  size: string;
}
