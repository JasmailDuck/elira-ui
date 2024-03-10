"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  EliraThemeContext: () => EliraThemeContext,
  EliraThemeProvider: () => EliraThemeProvider
});
module.exports = __toCommonJS(src_exports);

// src/components/Providers/Provider.tsx
var import_react = __toESM(require("react"), 1);
var initData = {
  theme: {}
};
var EliraThemeContext = import_react.default.createContext(initData);
var EliraThemeProvider = ({ children, theme }) => {
  return /* @__PURE__ */ import_react.default.createElement(EliraThemeContext.Provider, { value: theme }, children);
};

// src/components/Tooltip/Tooltip.tsx
var import_react2 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_framer_motion = require("framer-motion");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EliraThemeContext,
  EliraThemeProvider
});
