import {Answer, Question} from ".";

export type ChallengeType = "guess-my-answer";

export type Challenge = {
  answers: Answer[];
  question: Question;
  type: ChallengeType;
  rightAnswerId: string;
};
