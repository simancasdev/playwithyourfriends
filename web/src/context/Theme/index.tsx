import {useDeviceTheme} from "hooks";
import {getInitialSchema} from "./helper";
import {createContext, useMemo} from "react";
import {Children, ColorSchema} from "interfaces";

type IContext = {
  theme: ColorSchema;
};

const Context = createContext<IContext>({
  theme: getInitialSchema(),
});

interface ThemeProviderProps extends Children {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const themeChanged = useDeviceTheme();
  const values = useMemo<IContext>(
    () => ({theme: themeChanged}),
    [themeChanged]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
