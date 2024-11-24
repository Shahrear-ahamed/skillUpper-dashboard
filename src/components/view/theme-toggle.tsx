"use client";

import * as React from "react";
import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "../ui/toggle";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Toggle
        variant="outline"
        onClick={handleChangeTheme}
        className="data-[state=on]:bg-transparent">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute z-10 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Toggle>
    </>
  );
}
