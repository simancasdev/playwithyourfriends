import {Answer, AnswerHistory, Challenge, Player} from ".";

export type Room = {
  id: string;
  host: Player;
  players: Player[];
  challenge: Challenge | undefined;
  answerHistory: AnswerHistory[];
};
