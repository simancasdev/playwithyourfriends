import clsx from "clsx";
import {Button} from "styles";
import {useState} from "react";
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
  onSelect: (answer: IAnswer) => void;
}

export const Answers: React.FC<AnswersProps> = ({answers, onSelect}) => {
  const [answerSelected, setAnswerSelected] = useState<IAnswer | undefined>();

  return (
    <Container>
      <Column>
        {answers.map((answer, key) => (
          <Answer
            key={key}
            className={clsx(
              answerSelected?.["id"] === answer["id"] && "selected"
            )}
            onClick={() => {
              setAnswerSelected(answer);
            }}
          >
            <Index>{indexes[key]}</Index> <Value>{answer["value"]}</Value>
          </Answer>
        ))}
      </Column>
      {answerSelected && (
        <Button
          onClick={() => {
            onSelect(answerSelected);
          }}
        >
          Enviar
        </Button>
      )}
    </Container>
  );
};
