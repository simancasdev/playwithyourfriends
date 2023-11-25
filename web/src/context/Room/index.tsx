import shortid from "shortid";
import {useSocket} from "context";
import {Children, Room} from "interfaces";
import {initialState, roomReducer} from "./reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {RoomState, RoomContext, RoomMethods, SendAnswerPayload} from "./types";
import {
  useMemo,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

const Context = createContext<RoomContext>({
  ...initialState,
  sendAnswer: () => {},
  createRoom: () => {},
  updateChallenge: () => {},
  updatePlayerList: () => {},
});

export const useRoom = () => useContext(Context);

interface RoomProviderProps extends Children {}

export const RoomProvider: React.FC<RoomProviderProps> = ({children}) => {
  const {socket} = useSocket();
  const location = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(roomReducer, initialState);

  /**
   * @function sendAnswer
   */
  const sendAnswer = useCallback(
    (payload: SendAnswerPayload) => {
      socket.emit("send-answer", payload);
    },
    [socket]
  );

  /**
   * @function updatePlayerList
   */
  const updatePlayerList = useCallback(() => {}, []);

  /**
   * @function updateChallenge
   */
  const updateChallenge = useCallback(() => {}, []);

  /**
   * @function createRoom
   */
  const createRoom = useCallback((username: string) => {
    const roomId: string = shortid.generate();
    const playerId: string = shortid.generate();
    socket.emit("@create-room", {username, roomId, playerId});
  }, []);

  useEffect(() => {
    socket.on("@room-created", (payload: Room) => {
      dispatch({type: "SET_ROOM", payload: {...payload, meAsHost: true}});
      navigate(`/room/${payload["id"]}`);
    });
  }, []);

  // useEffect(() => {
  //   console.log(location);
  //   socket.emit("@join-room", location["roomId"]);
  // }, [location]);

  const values = useMemo<RoomState & RoomMethods>(
    () => ({
      ...state,
      createRoom,
      sendAnswer,
      updateChallenge,
      updatePlayerList,
    }),
    []
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
