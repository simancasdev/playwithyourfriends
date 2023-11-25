import shortid from "shortid";
import {RoomAction, RoomState} from "./types";

const rightAnswerIdMock = shortid.generate();

export const initialState: RoomState = {
  players: [
    {
      name: "Hector",
    },
    {
      name: "Luis",
    },
    {
      name: "Elena",
    },
  ],
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
    case "":
      return {
        ...state,
      };

    default:
      return state;
  }
}
