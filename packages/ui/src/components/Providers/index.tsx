import { T_EliraProvidor, T_EliraThemeConfig } from "@elira-ui/types";
import React from "react";

const emptyThemeConfig: T_EliraThemeConfig = {
  theme: {
    button: {
      buttonSizes: [{ name: "", className: "" }],
      buttonTypes: [{ name: "", className: "" }],
    },
  },
};

const EliraThemeContext = React.createContext<T_EliraThemeConfig>(emptyThemeConfig);

const EliraThemeProvider: React.FC<T_EliraProvidor> = ({ children, theme }) => {
  return (
    <EliraThemeContext.Provider value={theme}>
      {children}
    </EliraThemeContext.Provider>
  );
};

export { EliraThemeContext, EliraThemeProvider };
