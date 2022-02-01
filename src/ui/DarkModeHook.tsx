import { useState } from "react";
import { singletonHook } from "react-singleton-hook";

const initDarkMode: boolean = false;
let globalSetMode: any = () => {
  throw new Error("you must useDarkMode before setting its state");
};

export const useDarkMode = singletonHook(initDarkMode, () => {
  const [mode, setMode] = useState(initDarkMode);
  globalSetMode = setMode;
  return mode;
});

export const setDarkMode = (mode: any) => globalSetMode(mode);
