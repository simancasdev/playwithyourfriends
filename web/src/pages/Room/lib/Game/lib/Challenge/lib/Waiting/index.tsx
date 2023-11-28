import {useRoom} from "context";
import {Container} from "./styled";
import {Typography} from "components";

interface WaitingProps {}

export const Waiting: React.FC<WaitingProps> = () => {
  const {host} = useRoom();

  return (
    <Container>
      <Typography variant="title">
        Esperando desafío de {host["username"]}
      </Typography>
    </Container>
  );
};
