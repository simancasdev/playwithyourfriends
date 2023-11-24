import {Children} from "interfaces";
import {createContext, useMemo} from "react";

type IContext = {};

const Context = createContext<IContext>({});

interface RoomProviderProps extends Children {}

export const RoomProvider: React.FC<RoomProviderProps> = ({children}) => {
  const values = useMemo<IContext>(() => ({}), []);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
