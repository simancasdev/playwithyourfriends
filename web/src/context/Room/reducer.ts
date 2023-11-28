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
    case "SET_ROOM":
      return {...state, ...payload, connected: true};
    case "SET_CHALLENGE":
      return {...state, challenge: payload};
    case "WAIT_FOR_ANSWERS":
      return {...state, ...payload, answerHistory: undefined};
    case "SET_NEW_PLAYER_JOINED":
      return {...state, ...payload.room, me: payload.player, connected: true}; // <-- me is wrong because is updating on all users
    case "UPDATE_ROOM":
      return {...state, [payload.key]: payload.value};
    case "SET_ANSWER_HISTORY":
      return {...state, answerHistory: payload, waitingForAnswers: false};

    default:
      return state;
  }
}
