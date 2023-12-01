import {Form} from "./Form";
import {Button} from "styles";
import {AnswerHistory} from "..";
import {Typography} from "components";
import {useModal, useRoom} from "context";
import {Blocks} from "react-loader-spinner";
import {Container, Waiting} from "./styled";

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
        width={40}
        height={40}
        visible={true}
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
      />
      <Typography variant="title">Esperando respuestas...</Typography>
    </Waiting>
  );
};
