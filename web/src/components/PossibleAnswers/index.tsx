import {useState} from "react";
import {Field, Typography} from "components";
import {Container, AnswerField, AddMoreButton, AddMore} from "./styled";
import {CheckCircle, Circle, IconProps, Plus, Trash} from "react-feather";
import {
  iconProps,
  PossibleAnswer,
  MAX_ANSWERS_ALLOWED,
  createDefaultAnswer,
} from "./helper";

interface PossibleAnswersProps {}

export const PossibleAnswers: React.FC<PossibleAnswersProps> = () => {
  const [answers, setAnswers] = useState<PossibleAnswer[]>([
    createDefaultAnswer(),
    createDefaultAnswer(),
  ]);

  const onChange = (
    index: number,
    value: string | undefined,
    checked: boolean
  ): void => {
    const updated = answers.map((answer, key) => {
      if (key === index) {
        if (value) {
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
                onChange(key, target["value"], correctAnswer);
              }}
            />
            <Icon
              {...iconProps}
              onClick={() => {
                onChange(key, undefined, !correctAnswer);
              }}
            />
            {answers.length > 2 && (
              <Trash
                {...iconProps}
                color="red"
                onClick={() => {
                  setAnswers(answers.filter((item) => item.id !== id));
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
