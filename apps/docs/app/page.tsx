"use client";

import { EliraThemeProvider, Tooltip } from "@elira-ui/ui/index";

export default function Home() {
  return (
    <main className=" border flex h-full items-center justify-center  flex-col gap-5 ">
      <EliraThemeProvider
        theme={{
          theme: {
            tooltip: {
              className: " ",
            },
          },
        }}
      >
        <Tooltip className=" bg-oranged" message="LOL">this is a tooltip</Tooltip>

        <Tooltip message="Dmannnnnnnn">
          <p>this is a another tooltip</p>
        </Tooltip>
      </EliraThemeProvider>
    </main>
  );
}
