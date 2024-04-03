import React from "react";

export interface IPageTheme {
  [key: string]: string;
}

export interface IPage extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant: string;
}
