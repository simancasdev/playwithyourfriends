import {Player} from "interfaces";
import {RoomAction, RoomState} from "./types";

export const initialState: RoomState = {
  players: [],
  id: undefined,
  meAsHost: false,
  connected: false,
  me: {} as Player,
  host: {} as Player,
  challenge: undefined,
  answerHistory: undefined,
  waitingForAnswers: false,
};

export function roomReducer(state: RoomState, action: RoomAction): RoomState {
  const {type, payload} = action;
  switch (type) {
    case "RESET_STATE":
      return initialState;
    case "SET_CHALLENGE":
      return {...state, challenge: payload};
    case "SET_ROOM":
      return {...state, ...payload, connected: true};
    case "UPDATE_ROOM":
      return {...state, [payload.key]: payload.value};
    case "WAIT_FOR_ANSWERS":
      return {...state, ...payload, answerHistory: undefined};
    case "SET_NEW_PLAYER_JOINED":
      return {
        ...state,
        ...payload.room,
        connected: true,
        me: payload.type === "me" ? payload["player"] : state["me"],
      };
    case "SET_ANSWER_HISTORY":
      return {...state, answerHistory: payload, waitingForAnswers: false};

    default:
      return state;
  }
}
