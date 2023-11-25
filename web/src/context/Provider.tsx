import {Children} from "interfaces";
import {ThemeProvider, RoomProvider, SocketProvider} from ".";

interface ProviderProps extends Children {}

export const Provider: React.FC<ProviderProps> = ({children}) => {
  return (
    <ThemeProvider>
      <RoomProvider>
        <SocketProvider>{children}</SocketProvider>
      </RoomProvider>
    </ThemeProvider>
  );
};
