import {Challenge, Player} from "interfaces";

export type ActionType = "";

export interface RoomAction {
  type: ActionType;
  payload: number;
}

export interface RoomState {
  players: Player[];
  challenge: Challenge;
}
