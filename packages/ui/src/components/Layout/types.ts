import React from "react";

export interface ILayoutTheme {
  [key: string]: string;
}

export interface ILayout extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant: string;
}
