import {X} from "react-feather";
import {Notification} from "components";
import {useModal, useSocket} from "context";
import {initialState, roomReducer} from "./reducer";
import {useNavigate, useParams} from "react-router-dom";
import {RoomState, RoomContext, RoomMethods, RoomAction} from "./types";
import {
  Room,
  Answer,
  Player,
  Children,
  Challenge,
  AnswerHistory,
} from "interfaces";
import {
  useMemo,
  Reducer,
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
  const navigate = useNavigate();
  const {onClose, openModal} = useModal();
  const {roomId} = useParams<{roomId: string}>();
  const [state, dispatch] = useReducer<Reducer<RoomState, RoomAction>>(
    roomReducer,
    initialState
  );

  const sendAnswer = useCallback(
    (payload: Answer | undefined) => {
      const {me, challenge} = state;
      socket.emit("@send-answer", {
        roomId,
        player: me,
        answer: payload,
        challengeId: challenge!["id"],
      });
      updateRoom("challenge", undefined);
    },
    [state, roomId]
  );

  const createRoom = useCallback((username: string) => {
    socket.emit("@create-room", {username});
  }, []);

  const joinRoom = useCallback(
    (username: string) => {
      socket.emit("@join-room", {roomId, username});
    },
    [roomId]
  );

  const updateRoom = useCallback(
    (key: keyof RoomState, value: RoomState[keyof RoomState]) => {
      dispatch({type: "UPDATE_ROOM", payload: {key, value}});
    },
    []
  );

  const sendChallenge = useCallback(
    (challenge: Challenge) => {
      socket.emit("@send-challenge", {challenge, roomId});
      onClose();
      dispatch({type: "WAIT_FOR_ANSWERS", payload: {waitingForAnswers: true}});
    },
    [roomId]
  );

  useEffect(() => {
    socket.on("@room-created", (payload: {room: Room; host: Player}) => {
      const {room, host} = payload;
      dispatch({
        type: "SET_ROOM",
        payload: {...payload.room, me: host, meAsHost: true},
      });
      navigate(`room/${room["id"]}`);
    });

    socket.on(
      "@room-joined",
      (payload: {room: Room; player: Player; type: "me" | "others"}) => {
        dispatch({type: "SET_NEW_PLAYER_JOINED", payload});
      }
    );

    socket.on("@challenge-created", (payload: Challenge) => {
      dispatch({type: "SET_CHALLENGE", payload});
    });

    socket.on("@challenge-completed", (payload: AnswerHistory) => {
      dispatch({
        type: "SET_ANSWER_HISTORY",
        payload,
      });
    });

    socket.on("@exit-room", (message: string) => {
      navigate("/");
      openModal(<Notification message={message} icon={<X />} />);
      dispatch({type: "RESET_STATE"});
    });
  }, [state]);

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

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
