"use client";
import { IEliraProvider, IEliraThemeConfig } from "../../types";
import React from "react";

const EliraThemeContext = React.createContext<Partial<IEliraThemeConfig>>(
  {} as IEliraThemeConfig
);

const EliraThemeProvider: React.FC<IEliraProvider> = ({ children, theme }) => {
  return (
    <EliraThemeContext.Provider value={theme}>
      {children}
    </EliraThemeContext.Provider>
  );
};

export { EliraThemeContext, EliraThemeProvider };
