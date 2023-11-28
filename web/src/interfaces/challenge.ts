import {Answer} from ".";

export type ChallengeType = "guess-my-answer";

export type Challenge = {
  question: string;
  answers: Answer[];
  type: ChallengeType;
  correctAnswerId: string;
};
