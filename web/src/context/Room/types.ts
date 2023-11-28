import {Answer, Challenge, Player} from "interfaces";

export type ActionType =
  | "SET_ROOM"
  | "UPDATE_ROOM"
  | "SET_CHALLENGE"
  | "WAIT_FOR_ANSWERS"
  | "SET_NEW_PLAYER_JOINED";

export interface RoomAction {
  type: ActionType;
  payload: any;
}

export interface RoomMethods {
  joinRoom: (username: string) => void;
  sendAnswer: (payload: Answer) => void;
  createRoom: (username: string) => void;
  sendChallenge: (challenge: Challenge) => void;
  updateRoom: (key: keyof RoomState, value: RoomState[keyof RoomState]) => void;
}

export interface RoomState {
  host: Player;
  me: Player;
  meAsHost: boolean;
  players: Player[];
  connected: boolean;
  id: string | undefined;
  waitingForAnswers: boolean;
  challenge: Challenge | undefined;
}

export type RoomContext = RoomMethods & RoomState;
