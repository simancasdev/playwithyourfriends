import {COLORS} from "styles";
import shortid from "shortid";
import {Answer} from "interfaces";
import {IconProps} from "react-feather";

export const MAX_ANSWERS_ALLOWED = 4;

export const iconProps: IconProps = {
  size: 32,
  strokeWidth: 2,
  color: COLORS["white"],
};

export const createDefaultAnswer = (): Answer => ({
  id: shortid.generate(),
  value: "",
  correctAnswer: false,
});
