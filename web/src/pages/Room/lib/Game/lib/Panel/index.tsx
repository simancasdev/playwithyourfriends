import {Button} from "styles";
import {useModal, useRoom} from "context";
import {checkEmptyFields} from "./helper";
import {useEffect, useState} from "react";
import {Answer, Challenge} from "interfaces";
import {Body, Container, FormStyled, Head, Waiting} from "./styled";
import {Close, Field, PossibleAnswers, Typography} from "components";

interface PanelProps {}

export const Panel: React.FC<PanelProps> = () => {
  const {waitingForAnswers} = useRoom();
  const {openModal} = useModal();
  return !waitingForAnswers ? (
    <Container>
      <Typography>Tus participantes estan esperando el desafío</Typography>
      <Button
        onClick={() => {
          openModal(<Form />, {containerStyle: {alignItems: "center"}});
        }}
      >
        Crear desafío
      </Button>
    </Container>
  ) : (
    <Waiting>
      <Typography variant="title">Esperando respuestas...</Typography>
    </Waiting>
  );
};

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  const {onClose} = useModal();
  const {sendChallenge} = useRoom();
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
        <Close onClick={onClose} />
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
        <Button
          disabled={disabled}
          onClick={() => {
            sendChallenge(challenge);
          }}
        >
          Enviar desafío
        </Button>
      </Body>
    </FormStyled>
  );
};
