import shortid from "shortid";
import {Player} from "interfaces";
import {RoomAction, RoomState} from "./types";

const correctAnswerIdMock = shortid.generate();

export const initialState: RoomState = {
  id: undefined,
  meAsHost: false,
  connected: false,
  host: {} as Player,
  players: [],
  challenge: {
    correctAnswerId: correctAnswerIdMock,
    type: "guess-my-answer",
    question: "",
    answers: [],
  },
};

export function roomReducer(state: RoomState, action: RoomAction) {
  const {type, payload} = action;
  switch (type) {
    case "SET_ROOM":
      return {...state, ...payload, connected: true};

    default:
      return state;
  }
}
