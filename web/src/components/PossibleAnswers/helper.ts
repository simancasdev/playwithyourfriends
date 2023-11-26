import {COLORS} from "styles";
import shortid from "shortid";
import {IconProps} from "react-feather";

export type PossibleAnswer = {
  id: string;
  value: string;
  correctAnswer: boolean;
};

export const MAX_ANSWERS_ALLOWED = 8;

export const iconProps: IconProps = {
  size: 32,
  strokeWidth: 2,
  color: COLORS["white"],
};

export const createDefaultAnswer = (): PossibleAnswer => {
  return {
    id: shortid.generate(),
    value: "",
    correctAnswer: false,
  };
};
