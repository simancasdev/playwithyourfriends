import {AnswerRecord} from ".";

export type AnswerHistory = {
  challengeId: string;
  records: AnswerRecord[];
};
