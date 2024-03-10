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

// src/components/Tooltip/Tooltip.tsx
var Tooltip_exports = {};
__export(Tooltip_exports, {
  default: () => Tooltip_default
});
module.exports = __toCommonJS(Tooltip_exports);
var import_react2 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_framer_motion = require("framer-motion");

// src/index.tsx
var import_react = __toESM(require("react"), 1);
var initData = {
  theme: {}
};
var EliraThemeContext = import_react.default.createContext(initData);

// src/components/Tooltip/Tooltip.tsx
var Tooltip = ({ children, message }) => {
  var _a, _b;
  const C_EliraTheme = (0, import_react2.useContext)(EliraThemeContext);
  const [isVisible, setIsVisible] = import_react2.default.useState(false);
  return /* @__PURE__ */ import_react2.default.createElement(TooltipPrimitive.TooltipProvider, { delayDuration: 200 }, /* @__PURE__ */ import_react2.default.createElement(TooltipPrimitive.Root, { defaultOpen: false, open: isVisible }, /* @__PURE__ */ import_react2.default.createElement(
    TooltipPrimitive.Trigger,
    {
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      asChild: typeof children != "string"
    },
    children
  ), /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.AnimatePresence, null, isVisible && /* @__PURE__ */ import_react2.default.createElement(TooltipPrimitive.TooltipContent, { forceMount: true }, /* @__PURE__ */ import_react2.default.createElement(
    import_framer_motion.motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10 },
      transition: { duration: 0.3 },
      className: (_a = C_EliraTheme.theme.tooltip) == null ? void 0 : _a.className,
      style: (_b = C_EliraTheme.theme.tooltip) == null ? void 0 : _b.cssStyle
    },
    message
  )))));
};
var Tooltip_default = Tooltip;
