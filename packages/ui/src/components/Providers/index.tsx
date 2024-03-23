import { T_EliraProvidor, T_EliraThemeConfig } from "../../types";
import React from "react";



const EliraThemeContext = React.createContext<T_EliraThemeConfig>({} as T_EliraThemeConfig);

const EliraThemeProvider: React.FC<T_EliraProvidor> = ({ children, theme }) => {
  return (
    <EliraThemeContext.Provider value={theme}>
      {children}
    </EliraThemeContext.Provider>
  );
};

export { EliraThemeContext, EliraThemeProvider };
