"use client";
import {
  Button,
  EliraThemeProvider,
  Layout,
  Tooltip,
} from "@elira-ui/ui/index";

export default function Home() {
  return (
    <main>
      <EliraThemeProvider
        theme={{
          theme: {
            tooltip: {
              className:
                " animate-tooltip-open-top data-[state=closed]:animate-tooltip-close-top bg-white text-black px-3 py-1 rounded-lg border ",
            },
            button: {
              buttonTypes: [
                {
                  name: "normal",
                  className:
                    " border  rounded-lg px-3 py-1 font-bold hover:bg-black hover:border hover:border-white hover:text-white transition-all",
                },
              ],
              buttonSizes: [{ name: "lg", className: " h-[40px]" }],
            },
          },
        }}
      >
        <Layout>
          <Tooltip className=" " message="">
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
        </Layout>
      </EliraThemeProvider>
    </main>
  );
}
