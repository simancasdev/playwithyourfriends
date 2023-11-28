import {Answer} from ".";

export type ChallengeType = "guess-my-answer";

export type Challenge = {
  id: string;
  question: string;
  answers: Answer[];
  type: ChallengeType;
  correctAnswerId: string;
};
