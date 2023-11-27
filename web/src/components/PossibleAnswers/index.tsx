import {Answer} from "interfaces";
import {useEffect, useState} from "react";
import {Field, Typography} from "components";
import {Container, AnswerField, AddMoreButton, AddMore} from "./styled";
import {CheckCircle, Circle, IconProps, Plus, Trash} from "react-feather";
import {iconProps, MAX_ANSWERS_ALLOWED, createDefaultAnswer} from "./helper";

interface PossibleAnswersProps {
  onChange: (answers: Answer[]) => void;
}

export const PossibleAnswers: React.FC<PossibleAnswersProps> = ({onChange}) => {
  const [answers, setAnswers] = useState<Answer[]>([
    createDefaultAnswer(),
    createDefaultAnswer(),
  ]);

  const onUpdate = (
    index: number,
    value: string | undefined,
    checked: boolean
  ): void => {
    const updated = answers.map((answer, key) => {
      if (key === index) {
        if (value || value === "") {
          answer = {...answer, value};
        } else {
          answer = {...answer, correctAnswer: checked};
        }
        return answer;
      } else {
        return answer;
      }
    });
    setAnswers(updated);
  };

  useEffect(() => {
    onChange(answers);
  }, [answers]);

  return (
    <Container>
      <Typography variant="subtitle" style={{marginBottom: 10}}>
        Respuestas
      </Typography>
      {answers.map(({correctAnswer, value, id}, key) => {
        const Icon: React.FC<IconProps> = correctAnswer ? CheckCircle : Circle;
        return (
          <AnswerField key={key}>
            <Field
              name="value"
              value={value}
              placeholder={`Respuesta ${key + 1}`}
              onChange={({target}) => {
                onUpdate(key, target["value"], correctAnswer);
              }}
            />
            <Icon
              {...iconProps}
              onClick={() => {
                onUpdate(key, undefined, !correctAnswer);
              }}
            />
            {answers.length > 2 && (
              <Trash
                {...iconProps}
                color="red"
                onClick={() => {
                  setAnswers(answers.filter((answer) => answer.id !== id));
                }}
              />
            )}
          </AnswerField>
        );
      })}
      {answers.length < MAX_ANSWERS_ALLOWED && (
        <AddMore
          onClick={() => {
            setAnswers((prev) => {
              if (prev.length === MAX_ANSWERS_ALLOWED) return prev;
              return [...prev, createDefaultAnswer()];
            });
          }}
        >
          <AddMoreButton>
            <Plus
              size={20}
              strokeWidth={5}
              style={{transform: "translateY(2.5px)"}}
            />
          </AddMoreButton>
          <Typography style={{fontWeight: "600", fontSize: 18}}>
            Agregar otra opción
          </Typography>
        </AddMore>
      )}
    </Container>
  );
};
