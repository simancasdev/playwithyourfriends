import {Children} from "interfaces";
import {ThemeProvider, RoomProvider, SocketProvider, ModalProvider} from ".";

interface ProviderProps extends Children {}

export const Provider: React.FC<ProviderProps> = ({children}) => {
  return (
    <ModalProvider>
      <SocketProvider>
        <ThemeProvider>
          <RoomProvider>{children}</RoomProvider>
        </ThemeProvider>
      </SocketProvider>
    </ModalProvider>
  );
};
