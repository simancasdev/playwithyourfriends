import {Challenge, Player} from "interfaces";

export type ActionType = "SET_ROOM";

export interface RoomAction {
  type: ActionType;
  payload: any;
}

export interface RoomMethods {
  updateChallenge: () => void;
  updatePlayerList: () => void;
  joinRoom: (username: string) => void;
  createRoom: (username: string) => void;
  sendAnswer: (payload: SendAnswerPayload) => void;
}

export interface RoomState {
  host: Player;
  meAsHost: boolean;
  players: Player[];
  connected: boolean;
  challenge: Challenge;
  id: string | undefined;
}

export type RoomContext = RoomMethods & RoomState;

export type SendAnswerPayload = {
  answerId: string;
  userId: string;
};
