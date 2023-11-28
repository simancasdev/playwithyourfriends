import {Button} from "styles";
import shortid from "shortid";
import {AnswerHistory} from "..";
import {useEffect, useState} from "react";
import {useModal, useRoom} from "context";
import {checkEmptyFields} from "./helper";
import {Blocks} from "react-loader-spinner";
import {Answer, Challenge} from "interfaces";
import {Body, Container, FormStyled, Head, Waiting} from "./styled";
import {Close, Field, PossibleAnswers, Typography} from "components";

interface PanelProps {}

export const Panel: React.FC<PanelProps> = () => {
  const {waitingForAnswers, answerHistory} = useRoom();
  const {openModal} = useModal();

  return !waitingForAnswers ? (
    <Container>
      {answerHistory ? (
        <AnswerHistory />
      ) : (
        <Typography>Tus participantes estan esperando el desafío</Typography>
      )}
      <Button
        onClick={() => {
          openModal(<Form />, {containerStyle: {alignItems: "center"}});
        }}
      >
        {answerHistory!["challengeId"] ? "Crear otro" : "Crear desafío"}
      </Button>
    </Container>
  ) : (
    <Waiting>
      <Blocks
        visible={true}
        height={40}
        width={40}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
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
    id: shortid.generate(),
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
        <Typography variant="title" style={{fontSize: 32}}>
          Crear desafío
        </Typography>
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
