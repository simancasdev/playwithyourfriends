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
  joinRoom: () => {},
  sendAnswer: () => {},
  createRoom: () => {},
  updateChallenge: () => {},
  updatePlayerList: () => {},
});

export const useRoom = () => useContext(Context);

interface RoomProviderProps extends Children {}

export const RoomProvider: React.FC<RoomProviderProps> = ({children}) => {
  const {socket} = useSocket();
  const params = useParams<{roomId: string}>();
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
    socket.emit("@create-room", {username});
  }, []);

  /**
   * @function joinRoom
   */
  const joinRoom = useCallback((username: string) => {
    const {roomId} = params;
    socket.emit("@join-room", {roomId, username});
  }, []);

  useEffect(() => {
    socket.on("@room-created", (payload: Room) => {
      dispatch({type: "SET_ROOM", payload: {...payload, meAsHost: true}});
      navigate(`/room/${payload["id"]}`);
    });

    socket.on("@room-joined", (payload: Room) => {
      dispatch({type: "SET_ROOM", payload});
    });
  }, []);

  const values = useMemo<RoomState & RoomMethods>(
    () => ({
      ...state,
      joinRoom,
      createRoom,
      sendAnswer,
      updateChallenge,
      updatePlayerList,
    }),
    [state]
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
