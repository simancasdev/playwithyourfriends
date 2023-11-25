import clsx from "clsx";
import {Button} from "styles";
import {useState} from "react";
import {useRoom} from "context";
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
  const {sendAnswer} = useRoom();
  const [answerSelected, setAnswerSelected] = useState<string | undefined>();

  return (
    <Container>
      <Column>
        {answers.map(({value, id}, key) => (
          <Answer
            key={key}
            className={clsx(answerSelected === id && "selected")}
            onClick={() => {
              setAnswerSelected(id);
            }}
          >
            <Index>{indexes[key]}</Index> <Value>{value}</Value>
          </Answer>
        ))}
      </Column>
      {answerSelected && (
        <Button
          onClick={() => {
            sendAnswer({userId: "1", answerId: answerSelected});
          }}
        >
          Enviar
        </Button>
      )}
    </Container>
  );
};
