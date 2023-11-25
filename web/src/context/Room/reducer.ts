import shortid from "shortid";
import {Player} from "interfaces";
import {RoomAction, RoomState} from "./types";

const rightAnswerIdMock = shortid.generate();

export const initialState: RoomState = {
  id: undefined,
  meAsHost: false,
  connected: false,
  host: {} as Player,
  players: [],
  challenge: {
    rightAnswerId: rightAnswerIdMock,
    type: "guess-my-answer",
    question: {
      id: shortid.generate(),
      value: "Cual es mi serie favorita?",
    },
    answers: [
      {id: shortid.generate(), value: "naruto"},
      {id: rightAnswerIdMock, value: "the big bang theory"},
    ],
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
