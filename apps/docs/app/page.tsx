"use client";
import { Button, EliraThemeProvider, Tooltip } from "@elira-ui/ui/index";

export default function Home() {
  return (
    <main className=" border flex items-center justify-center h-full flex-col gap-5 ">
      <EliraThemeProvider
        theme={{
          theme: {
            tooltip: {
              className:
                " animate-tooltip-open-top data-[state=closed]:animate-tooltip-close-top bg-white text-black px-3 py-1 rounded-lg shadow-lg ",
            },
            button: {
              buttonTypes: [
                {
                  name: "normal",
                  className:
                    " bg-white text-black border border-transparent rounded-lg px-3 py-1 font-bold hover:bg-black hover:border hover:border-white hover:text-white transition-all",
                },
              ],
              buttonSizes: [{ name: "lg", className: "" }],
            },
          },
        }}
      >
        <Tooltip className=" " message="ddd">
          This is a tooltip
        </Tooltip>

        <Button variant="normal" size="lg">
          This is a button
        </Button>
        <Tooltip className=" " message="A tooltip appeared">
          <Button variant="normal" size="lg">
            This is a button with tooltip
          </Button>
        </Tooltip>
      </EliraThemeProvider>
    </main>
  );
}
