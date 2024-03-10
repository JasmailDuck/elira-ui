import {
  EliraThemeContext
} from "./chunk-APD6QAPF.js";

// src/components/Tooltip/Tooltip.tsx
import React, { useContext } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { AnimatePresence, motion as m } from "framer-motion";
var Tooltip = ({ children, message }) => {
  var _a, _b;
  const C_EliraTheme = useContext(EliraThemeContext);
  const [isVisible, setIsVisible] = React.useState(false);
  return /* @__PURE__ */ React.createElement(TooltipPrimitive.TooltipProvider, { delayDuration: 200 }, /* @__PURE__ */ React.createElement(TooltipPrimitive.Root, { defaultOpen: false, open: isVisible }, /* @__PURE__ */ React.createElement(
    TooltipPrimitive.Trigger,
    {
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      asChild: typeof children != "string"
    },
    children
  ), /* @__PURE__ */ React.createElement(AnimatePresence, null, isVisible && /* @__PURE__ */ React.createElement(TooltipPrimitive.TooltipContent, { forceMount: true }, /* @__PURE__ */ React.createElement(
    m.div,
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

export {
  Tooltip_default
};
