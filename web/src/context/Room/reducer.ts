import {Player} from "interfaces";
import {RoomAction, RoomState} from "./types";

export const initialState: RoomState = {
  id: undefined,
  meAsHost: false,
  connected: false,
  me: {} as Player,
  host: {} as Player,
  players: [],
  challenge: undefined,
  waitingForAnswers: false,
};

export function roomReducer(state: RoomState, action: RoomAction) {
  const {type, payload} = action;
  switch (type) {
    case "SET_ROOM":
      return {...state, ...payload, connected: true};
    case "SET_CHALLENGE":
      return {...state, challenge: payload};
    case "WAIT_FOR_ANSWERS":
      return {...state, ...payload};
    case "SET_NEW_PLAYER_JOINED":
      return {...state, ...payload.room, me: payload.player, connected: true};
    case "UPDATE_ROOM":
      return {...state, [payload.key]: payload.value};

    default:
      return state;
  }
}
