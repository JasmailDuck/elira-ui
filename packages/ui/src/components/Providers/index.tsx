
import { T_EliraProvidor, T_EliraThemeConfig } from "@elira-ui/types";
import React from "react";

const initData: T_EliraThemeConfig = {
  theme: {
    tooltip: {
      className:
        " animate-tooltip-open-top data-[state=closed]:animate-tooltip-close-top ",
    },
    button: {
      buttonTypes: [{ name: "Test", className: "test" }],
      buttonSizes: [{ name: "lg", className: "log" }],
    },
  },
};

const EliraThemeContext = React.createContext<T_EliraThemeConfig>(initData);

const EliraThemeProvider: React.FC<T_EliraProvidor> = ({ children, theme }) => {
  return (
    <EliraThemeContext.Provider value={theme}>
      {children}
    </EliraThemeContext.Provider>
  );
};

export { EliraThemeContext, EliraThemeProvider };
