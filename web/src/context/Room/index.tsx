import {RoomState} from "./types";
import {Children} from "interfaces";
import {initialState, roomReducer} from "./reducer";
import {
  useMemo,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

const Context = createContext<RoomState>(initialState);

export const useRoom = () => useContext(Context);

interface RoomProviderProps extends Children {}

export const RoomProvider: React.FC<RoomProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(roomReducer, initialState);

  /**
   * @function sendAnswer
   */
  const sendAnswer = useCallback(() => {}, []);

  /**
   * @function updatePlayerList
   */
  const updatePlayerList = useCallback(() => {}, []);

  /**
   * @function updateChallenge
   */
  const updateChallenge = useCallback(() => {}, []);

  const values = useMemo<RoomState>(() => state, []);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
