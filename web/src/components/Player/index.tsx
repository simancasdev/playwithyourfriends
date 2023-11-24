import {Avatar} from "components";
import {Container, Badge} from "./styled";

interface PlayerProps {
  name: string;
}

export const Player: React.FC<PlayerProps> = ({name}) => {
  return (
    <Container>
      <Avatar name={name} />
      <Badge />
    </Container>
  );
};
