import {Children} from "interfaces";
import {Socket, io} from "socket.io-client";
import {useMemo, useContext, createContext} from "react";

type IContext = {
  socket: Socket;
};

const Context = createContext<IContext>({
  socket: {} as Socket,
});

export const useSocket = () => useContext(Context);

interface SocketProviderProps extends Children {}

export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {
  const socket = io("http://localhost:8090");
  socket.on("connection", () => {});

  const values = useMemo<IContext>(() => ({socket}), [socket]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
