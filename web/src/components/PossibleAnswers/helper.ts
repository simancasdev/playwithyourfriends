import {COLORS} from "styles";
import {IconProps} from "react-feather";

export type PossibleAnswer = {value: string; correctAnswer: boolean};

export const MAX_ANSWERS_ALLOWED = 4;

export const iconProps: IconProps = {
  size: 32,
  strokeWidth: 2,
  color: COLORS["white"],
};

export const DEFAULT_ANSWER: PossibleAnswer = {value: "", correctAnswer: false};
