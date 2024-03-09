"use client";
import { EliraThemeContext, EliraThemeProvider } from "@elira-ui/index";
import Tooltip from "@elira-ui/components/Tooltip/Tooltip";

export default function Home() {
  return (
    <main className=" border flex h-full items-center justify-center ">
      <EliraThemeProvider theme={{ theme: { tooltip:{
        className: " bg-white"
      }} }}>
        <div>
          <Tooltip message="LOL"> testing lol</Tooltip>
        </div>
      </EliraThemeProvider>
    </main>
  );
}
