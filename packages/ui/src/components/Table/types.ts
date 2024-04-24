export interface ITable {
  tableVariant: string;
  tableHeaderVariant: string;
  tableBodyVariant: string;
  tableRowVariant: string;
  tableHeadItemVariant: string;
  tableRowItemVariant: string;
}

export interface ITableTheme {
  tableVariants: { [key: string]: string };
  tableHeaderVariants: { [key: string]: string };
  tableBodyVariants: { [key: string]: string };
  tableRowVariants: { [key: string]: string };
  tableHeadItemVariants: { [key: string]: string };
  tableRowItemVariants: { [key: string]: string };
}
