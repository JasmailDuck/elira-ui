import React, { useContext, useEffect, useRef, useState } from "react";
import { IDynamicDivTypes } from "./types";
import { EliraThemeContext } from "../Providers";
import { twMerge } from "tailwind-merge";

/**
 *`DynamicDiv` is a React component that adapts its size based on the content and supports animated transitions.
 *It uses ResizeObserver to track dimension changes and animates content updates with CSS transitions.
 */
export const DynamicDiv = React.forwardRef<HTMLDivElement, IDynamicDivTypes>(
  ({ className, children, variant, ...rest }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<{
      height: string;
      width: string;
    }>({
      height: "auto",
      width: "auto",
    });
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [currentChildren, setCurrentChildren] =
      useState<React.ReactNode>(children);

    useEffect(() => {
      // When children change, start the animation
      setIsAnimating(true);

      // Set a timeout to update children after animation
      const timeoutId = setTimeout(() => {
        setCurrentChildren(children);
      }, 300);

      // Clean up timeout if component unmounts
      return () => clearTimeout(timeoutId);
    }, [children]);

    useEffect(() => {
      const element = containerRef.current;
      if (!element) return;

      const updateDimensions = () => {
        setDimensions({
          height: `${element.clientHeight}px`,
          width: `${element.clientWidth}px`,
        });
      };

      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(element);

      // Clean up ResizeObserver
      return () => resizeObserver.disconnect();
    }, [currentChildren]); // Update dimensions when children change
    const C_EliraTheme = useContext(EliraThemeContext);

    const VARIANT = C_EliraTheme.dynamicdiv
      ? C_EliraTheme.dynamicdiv[variant]
      : undefined;
    return (
      <div
        ref={ref}
        className={twMerge(
          VARIANT,
          className,
          " transition-all duration-500 ease-[cubic-bezier(.67,0,0,1.02)] "
        )}
        {...rest}
        style={{ height: dimensions.height, width: dimensions.width }}
        onTransitionEnd={() => setIsAnimating(false)}
      >
        <div
          ref={containerRef}
          className={`h-max w-max ${
            isAnimating ? " blur-2xl " : " blur-none"
          } transition-all duration-500`}
        >
          {currentChildren}
        </div>
      </div>
    );
  }
);
