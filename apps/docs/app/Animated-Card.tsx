// components/AutoResizingDiv.tsx
import React, { useState, useRef, useEffect } from "react";

interface AutoResizingDivProps {
  children: React.ReactNode;
}

const AutoResizingDiv: React.FC<AutoResizingDivProps> = ({ children }) => {
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

  return (
    <div
      style={{ height: dimensions.height, width: dimensions.width }}
      className="transition-all duration-500 ease-[cubic-bezier(.67,0,0,1.02)] bg-white rounded-lg"
      onTransitionEnd={() => setIsAnimating(false)}
    >
      <div
        ref={containerRef}
        className={`h-max w-max ${
          isAnimating ? "opacity-0" : "opacity-100"
        } transition-opacity  duration-500 ease-[cubic-bezier(.67,0,0,1.02)]`}
      >
        {currentChildren}
      </div>
    </div>
  );
};

export default AutoResizingDiv;
