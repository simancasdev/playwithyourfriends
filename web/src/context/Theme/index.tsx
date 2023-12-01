import {useDeviceTheme} from "hooks";
import {getInitialSchema} from "./helper";
import {Children, ColorSchema} from "interfaces";
import {createContext, useContext, useMemo} from "react";

type IContext = {
  theme: ColorSchema;
};

const Context = createContext<IContext>({
  theme: getInitialSchema(),
});

export const useTheme = () => useContext(Context);

interface ThemeProviderProps extends Children {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const themeChanged = useDeviceTheme();
  const values = useMemo<IContext>(
    () => ({theme: themeChanged}),
    [themeChanged]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
