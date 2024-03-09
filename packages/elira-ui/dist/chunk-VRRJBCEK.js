// src/index.tsx
import React from "react";
var initData = {
  theme: {}
};
var EliraThemeContext = React.createContext(initData);
var EliraThemeProvider = ({ children, theme }) => {
  return /* @__PURE__ */ React.createElement(EliraThemeContext.Provider, { value: theme }, children);
};

export {
  EliraThemeContext,
  EliraThemeProvider
};
