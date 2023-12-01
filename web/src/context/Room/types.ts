import {Answer, AnswerHistory, Challenge, Player} from "interfaces";

export type ActionType =
  | "SET_ROOM"
  | "UPDATE_ROOM"
  | "RESET_STATE"
  | "SET_CHALLENGE"
  | "WAIT_FOR_ANSWERS"
  | "SET_ANSWER_HISTORY"
  | "SET_NEW_PLAYER_JOINED";

export interface RoomAction {
  payload?: any;
  type: ActionType;
}

export interface RoomMethods {
  /**
   * @function joinRoom
   * @description This function takes your username and send it to the socket channel
   * to allows you to join to the host's channel.
   */
  joinRoom: (username: string) => void;
  /**
   * @function createRoom
   * @description This function takes your username and send it to the socket channel
   * to create a new room where you gonna be the host.
   */
  createRoom: (username: string) => void;
  /**
   * @function sendChallenge
   * @description This function takes your challenge value and send it to the socket channel
   * to notify all your players your new challenge
   */
  sendChallenge: (challenge: Challenge) => void;
  /**
   * @function sendAnswer
   * @description This function takes your answer value and send to the socket channel
   * to notify the host your selection.
   */
  sendAnswer: (payload: Answer | undefined) => void;
  /**
   * @function updateRoom
   * @description This function allows you to update/change the state on Room Context.
   * You have to pass two params: (key: The key that you want to update, value: new value).
   */
  updateRoom: (key: keyof RoomState, value: RoomState[keyof RoomState]) => void;
}

export interface RoomState {
  me: Player;
  host: Player;
  meAsHost: boolean;
  players: Player[];
  connected: boolean;
  id: string | undefined;
  waitingForAnswers: boolean;
  challenge: Challenge | undefined;
  answerHistory: AnswerHistory | undefined;
}

export type RoomContext = RoomMethods & RoomState;
