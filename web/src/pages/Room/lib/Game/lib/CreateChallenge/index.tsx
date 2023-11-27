import {Button} from "styles";
import {useModal} from "context";
import {checkEmptyFields} from "./helper";
import {useEffect, useState} from "react";
import {Answer, Challenge} from "interfaces";
import {Body, Container, FormStyled, Head} from "./styled";
import {Close, Field, PossibleAnswers, Typography} from "components";

interface CreateChallengeProps {}

export const CreateChallenge: React.FC<CreateChallengeProps> = () => {
  const {openModal} = useModal();
  return (
    <Container>
      <Typography>Tus participantes estan esperando el desafío</Typography>
      <Button
        onClick={() => {
          openModal(<Form />);
        }}
      >
        Crear desafío
      </Button>
    </Container>
  );
};

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [challenge, setChallenge] = useState<Challenge>({
    answers: [],
    question: "",
    correctAnswerId: "",
    type: "guess-my-answer",
  });

  const onChange = (
    name: keyof Challenge,
    value: Challenge[keyof Challenge]
  ): void => {
    setChallenge({
      ...challenge,
      [name]: value,
      correctAnswerId:
        name === "answers"
          ? (value as Answer[]).filter((answer) => answer.correctAnswer)[0]?.[
              "id"
            ]
          : "",
    });
  };

  useEffect(() => {
    const {correctAnswerId, answers, question} = challenge;
    if (question.length && correctAnswerId && checkEmptyFields(answers)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [challenge]);

  return (
    <FormStyled>
      <Head>
        <Typography variant="title">Crear desafío</Typography>
        <Close onClick={() => {}} />
      </Head>
      <Body>
        <Field
          label="Pregunta"
          placeholder="Mi comida favorita cual es?"
          onChange={({target}) => {
            onChange("question", target.value);
          }}
        />
        <PossibleAnswers
          onChange={(answers) => {
            onChange("answers", answers);
          }}
        />
        <Button disabled={disabled} onClick={() => {}}>
          Enviar desafío
        </Button>
      </Body>
    </FormStyled>
  );
};
