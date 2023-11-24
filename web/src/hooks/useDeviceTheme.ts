import {ColorSchema} from "interfaces";
import {useEffect, useState} from "react";
import {getInitialSchema} from "context/Theme/helper";

let colorSchema: ColorSchema;

export const useDeviceTheme = (): ColorSchema => {
  const [theme, setTheme] = useState<ColorSchema>(getInitialSchema());

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        colorSchema = event.matches ? "dark" : "light";
        setTheme(colorSchema);
      });
  }, []);

  return theme;
};
