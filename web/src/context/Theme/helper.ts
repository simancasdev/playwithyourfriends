import {ColorSchema} from "interfaces";

export const getInitialSchema = (): ColorSchema => {
  const {matches} = window.matchMedia("(prefers-color-scheme: dark)");
  return matches ? "dark" : "light";
};
