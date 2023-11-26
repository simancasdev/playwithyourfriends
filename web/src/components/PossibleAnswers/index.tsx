import {useState} from "react";
import {Field, Typography} from "components";
import {Container, AnswerField, AddMoreButton, AddMore} from "./styled";
import {CheckCircle, Circle, IconProps, Plus, Trash} from "react-feather";
import {
  iconProps,
  DEFAULT_ANSWER,
  PossibleAnswer,
  MAX_ANSWERS_ALLOWED,
} from "./helper";

interface PossibleAnswersProps {}

export const PossibleAnswers: React.FC<PossibleAnswersProps> = () => {
  const [answers, setAnswers] = useState<PossibleAnswer[]>([
    DEFAULT_ANSWER,
    DEFAULT_ANSWER,
  ]);

  const onChange = (
    index: number,
    value: string | undefined,
    checked: boolean
  ): void => {
    setAnswers((prev) => {
      const answer = prev[index];
      if (value) {
        answer.value = value;
      } else {
        answer.correctAnswer = checked;
      }
      prev[index] = answer;
      return [...prev];
    });
  };

  return (
    <Container>
      <Typography variant="subtitle" style={{marginBottom: 10}}>
        Respuestas
      </Typography>
      {answers.map(({correctAnswer, value}, key) => {
        const Icon: React.FC<IconProps> = correctAnswer ? CheckCircle : Circle;
        return (
          <AnswerField key={key}>
            <Field
              placeholder={`Respuesta ${key + 1}`}
              onChange={({target}) => {
                onChange(key, target["value"], correctAnswer);
              }}
            />
            <Icon
              {...iconProps}
              onClick={() => {
                onChange(key, undefined, !correctAnswer);
              }}
            />
            {answers.length !== 1 && (
              <Trash
                {...iconProps}
                color="red"
                onClick={() => {
                  setAnswers((prev) =>
                    prev.filter((_, index) => index !== key)
                  );
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
              return [...prev, DEFAULT_ANSWER];
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
