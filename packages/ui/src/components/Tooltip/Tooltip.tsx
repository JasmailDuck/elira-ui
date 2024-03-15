import React, { useContext } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { AnimatePresence, motion as m } from "framer-motion";
import { EliraThemeContext } from "@elira-ui/index";
import { T_Tooltip } from "./T_tooltip";

const Tooltip: React.FC<T_Tooltip> = ({ children, message }) => {
  //---------------------------- CONTEXT  ---------------------------- //

  const C_EliraTheme = useContext(EliraThemeContext);

  //---------------------------- STATES  ---------------------------- //

  // Stores the tooltip visiblity state
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <TooltipPrimitive.TooltipProvider delayDuration={200}>
      <TooltipPrimitive.Root defaultOpen={false} open={isVisible}>
        <TooltipPrimitive.Trigger
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          asChild={typeof children != "string"}
        >
          {children}
        </TooltipPrimitive.Trigger>
        <AnimatePresence>
          {isVisible && (
            <TooltipPrimitive.TooltipContent forceMount>
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className={C_EliraTheme.theme.tooltip?.className}
                style={C_EliraTheme.theme.tooltip?.cssStyle}
              >
                {message}
              </m.div>
            </TooltipPrimitive.TooltipContent>
          )}
        </AnimatePresence>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  );
};

export { Tooltip };
