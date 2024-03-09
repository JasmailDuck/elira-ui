import React from "react";

const initData: T_EliraThemeConfig = {
  theme: {},
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
