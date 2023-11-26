import {Modal} from "./lib";
import {Button} from "styles";
import {Container} from "./styled";
import {Typography} from "components";

interface CreateChallengeProps {}

export const CreateChallenge: React.FC<CreateChallengeProps> = () => {
  return (
    <Container>
      <Typography>Tus participantes estan esperando el desafío</Typography>
      <Button>Crear desafío</Button>
      <Modal />
    </Container>
  );
};
