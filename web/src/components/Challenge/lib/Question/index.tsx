import {Container} from "./styled";
import {Children} from "interfaces";

interface QuestionProps extends Children {}

export const Question: React.FC<QuestionProps> = ({children}) => {
  return <Container>{children}</Container>;
};
