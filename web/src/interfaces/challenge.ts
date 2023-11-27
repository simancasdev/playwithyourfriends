import {Answer} from ".";

export type ChallengeType = "guess-my-answer";

export type Challenge = {
  question: "";
  answers: Answer[];
  type: ChallengeType;
  correctAnswerId: string;
};
