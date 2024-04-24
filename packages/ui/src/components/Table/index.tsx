import * as React from "react";
import { twMerge } from "tailwind-merge";
import { ITable } from "./types";
import { EliraThemeContext } from "../Providers";

export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & Pick<ITable, "tableVariant">
>(({ className, tableVariant, ...props }, ref) => {
  const ELIRA_TABLE_CLASS =
    React.useContext(EliraThemeContext).table?.tableVariants[tableVariant];
  return (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={twMerge(ELIRA_TABLE_CLASS, className)}
        {...props}
      />
    </div>
  );
});
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> &
    Pick<ITable, "tableHeaderVariant">
>(({ className, tableHeaderVariant, ...props }, ref) => {
  const ELIRA_TABLE_HEADER_CLASS =
    React.useContext(EliraThemeContext).table?.tableHeaderVariants[
      tableHeaderVariant
    ];
  return (
    <thead
      ref={ref}
      className={twMerge(ELIRA_TABLE_HEADER_CLASS, className)}
      {...props}
    />
  );
});
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> &
    Pick<ITable, "tableBodyVariant">
>(({ className, tableBodyVariant, ...props }, ref) => {
  const ELIRA_TABLE_BODY_CLASS =
    React.useContext(EliraThemeContext).table?.tableBodyVariants[
      tableBodyVariant
    ];
  return (
    <tbody
      ref={ref}
      className={twMerge(ELIRA_TABLE_BODY_CLASS, className)}
      {...props}
    />
  );
});
TableBody.displayName = "TableBody";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & Pick<ITable, "tableRowVariant">
>(({ className, tableRowVariant, ...props }, ref) => {
  const ELIRA_TABLE_ROW_CLASS =
    React.useContext(EliraThemeContext).table?.tableRowVariants[
      tableRowVariant
    ];
  return (
    <tr
      ref={ref}
      className={twMerge(ELIRA_TABLE_ROW_CLASS, className)}
      {...props}
    />
  );
});
TableRow.displayName = "TableRow";

export const TableHeadItem = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> &
    Pick<ITable, "tableHeadItemVariant">
>(({ className, tableHeadItemVariant, ...props }, ref) => {
  const ELIRA_TABLE_HEADER_ITEM_CLASS =
    React.useContext(EliraThemeContext).table?.tableHeadItemVariants[
      tableHeadItemVariant
    ];
  return (
    <th
      ref={ref}
      className={twMerge(ELIRA_TABLE_HEADER_ITEM_CLASS, className)}
      {...props}
    />
  );
});
TableHeadItem.displayName = "TableHeadItem";

export const TableRowItem = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> &
    Pick<ITable, "tableRowItemVariant">
>(({ className, tableRowItemVariant, ...props }, ref) => {
  const ELIRA_TABLE_ROW_ITEM_CLASS =
    React.useContext(EliraThemeContext).table?.tableRowItemVariants[
      tableRowItemVariant
    ];
  return (
    <td
      ref={ref}
      className={twMerge(ELIRA_TABLE_ROW_ITEM_CLASS, className)}
      {...props}
    />
  );
});
TableRowItem.displayName = "TableRowItem";
