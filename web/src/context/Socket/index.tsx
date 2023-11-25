import {Children} from "interfaces";
import {io} from "socket.io-client";
import {createContext, useEffect, useMemo} from "react";

type IContext = {};

const Context = createContext<IContext>({});

interface SocketProviderProps extends Children {}

export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {
  useEffect(() => {
    const socket = io("http://localhost:8090");

    socket.on("connection", () => console.log(socket.id));
    socket.on("connect_error", function (err) {
      console.log("error", err);
    });
  }, []);

  const values = useMemo<IContext>(() => ({}), []);
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
