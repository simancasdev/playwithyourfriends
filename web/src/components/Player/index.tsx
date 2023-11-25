import {Avatar} from "components";
import {Container, Badge} from "./styled";

interface PlayerProps {
  username: string;
}

export const Player: React.FC<PlayerProps> = ({username}) => {
  return (
    <Container>
      <Avatar name={username} />
      <Badge />
    </Container>
  );
};
