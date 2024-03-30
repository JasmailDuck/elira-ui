
export interface ICardTheme {
  [key: string]: string;
}

export interface ICardTypes extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant: string;
}
