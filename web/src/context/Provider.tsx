import {Children} from "interfaces";
import {ThemeProvider, RoomProvider} from ".";

interface ProviderProps extends Children {}

export const Provider: React.FC<ProviderProps> = ({children}) => {
  return (
    <ThemeProvider>
      <RoomProvider>{children}</RoomProvider>
    </ThemeProvider>
  );
};
