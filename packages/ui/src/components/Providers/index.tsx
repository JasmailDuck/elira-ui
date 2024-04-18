"use client";
import { IEliraProvider, IEliraThemeConfig } from "../../types";
import React from "react";

const EliraThemeContext = React.createContext<IEliraThemeConfig>(
  {} as IEliraThemeConfig
);

const EliraThemeProvider: React.FC<IEliraProvider<IEliraThemeConfig>> = ({ children, theme }) => {
  return (
    <EliraThemeContext.Provider value={theme}>
      {children}
    </EliraThemeContext.Provider>
  );
};

export { EliraThemeContext, EliraThemeProvider };
