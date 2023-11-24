import {Answer as IAnswer} from "interfaces";
import {Container, Answer, Column, Index, Value} from "./styled";

const indexes: {[index: number]: string} = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
};

interface AnswersProps {
  answers: IAnswer[];
}

export const Answers: React.FC<AnswersProps> = ({answers}) => {
  return (
    <Container>
      <Column>
        {answers.map(({value}, key) => (
          <Answer key={key}>
            <Index>{indexes[key]}</Index> <Value>{value}</Value>
          </Answer>
        ))}
      </Column>
    </Container>
  );
};
