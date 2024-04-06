import { EliraThemeProvider } from "@elira-ui/ui/index";
import React from "react";

const LolLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <EliraThemeProvider
      theme={{
        theme: {
          tooltip: {
            className:
              " animate-tooltip-open-top data-[state=closed]:animate-tooltip-close-top bg-white text-black px-3 py-1 rounded-lg border ",
          },
          button: {
            buttonTypes: {
              normal:
                " border  rounded-lg px-3 py-1 font-bold hover:bg-black hover:border hover:border-white hover:text-white transition-all",
            },
            buttonSizes: {
              lg: "h-[40px]",
            },
          },
          layout: {
            default:
              " h-dvh flex flex-col items-center gap-10 p-5 bg-neutral-300 ",
          },
        },
      }}
    >
      {children}
    </EliraThemeProvider>
  );
};
export default LolLayout;
