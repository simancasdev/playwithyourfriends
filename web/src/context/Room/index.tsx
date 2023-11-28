import {useModal, useSocket} from "context";
import {initialState, roomReducer} from "./reducer";
import {useNavigate, useParams} from "react-router-dom";
import {RoomState, RoomContext, RoomMethods} from "./types";
import {Answer, Challenge, Children, Player, Room} from "interfaces";
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
  updateRoom: () => {},
  sendChallenge: () => {},
});

export const useRoom = () => useContext(Context);

interface RoomProviderProps extends Children {}

export const RoomProvider: React.FC<RoomProviderProps> = ({children}) => {
  const {socket} = useSocket();
  const {onClose} = useModal();
  const {roomId} = useParams<{roomId: string}>();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(roomReducer, initialState);

  /**
   * @function sendAnswer
   */
  const sendAnswer = useCallback(
    (payload: Answer) => {
      const {me} = state;
      socket.emit("@send-answer", {answer: payload, player: me, roomId});
    },
    [state, roomId]
  );

  /**
   * @function createRoom
   */
  const createRoom = useCallback((username: string) => {
    socket.emit("@create-room", {username});
  }, []);

  /**
   * @function joinRoom
   */
  const joinRoom = useCallback(
    (username: string) => {
      socket.emit("@join-room", {roomId, username});
    },
    [roomId]
  );

  /**
   * @function updateRoom
   */
  const updateRoom = useCallback(
    (key: keyof RoomState, value: RoomState[keyof RoomState]) => {
      dispatch({type: "UPDATE_ROOM", payload: {key, value}});
    },
    []
  );

  /**
   * @function sendChallenge
   */
  const sendChallenge = useCallback(
    (challenge: Challenge) => {
      socket.emit("@send-challenge", {challenge, roomId});
      onClose();
      dispatch({type: "WAIT_FOR_ANSWERS", payload: {waitingForAnswers: true}});
    },
    [roomId]
  );

  useEffect(() => {
    socket.on("@room-created", (payload: Room) => {
      dispatch({type: "SET_ROOM", payload: {...payload, meAsHost: true}});
      navigate(`room/${payload["id"]}`);
    });

    socket.on("@room-joined", (payload: {room: Room; player: Player}) => {
      dispatch({type: "SET_NEW_PLAYER_JOINED", payload});
    });

    socket.on("@challenge-created", (payload: Challenge) => {
      dispatch({type: "SET_CHALLENGE", payload});
    });
  }, []);

  const values = useMemo<RoomState & RoomMethods>(
    () => ({
      ...state,
      joinRoom,
      createRoom,
      sendAnswer,
      updateRoom,
      sendChallenge,
    }),
    [state]
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
