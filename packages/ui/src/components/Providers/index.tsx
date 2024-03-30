import { T_EliraProvidor, IEliraThemeConfig } from "../../types";
import React from "react";

const EliraThemeContext = React.createContext<IEliraThemeConfig>(
  {} as IEliraThemeConfig
);

const EliraThemeProvider: React.FC<T_EliraProvidor> = ({ children, theme }) => {
  return (
    <EliraThemeContext.Provider value={theme}>
      {children}
    </EliraThemeContext.Provider>
  );
};

export { EliraThemeContext, EliraThemeProvider };
