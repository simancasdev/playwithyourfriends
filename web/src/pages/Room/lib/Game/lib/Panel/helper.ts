import {Answer} from "interfaces";

export const checkEmptyFields = (answers: Answer[]): boolean => {
  let thereIsEmptyField = false;
  for (let answer of answers) {
    thereIsEmptyField = !!answer.value;
  }
  return thereIsEmptyField;
};
