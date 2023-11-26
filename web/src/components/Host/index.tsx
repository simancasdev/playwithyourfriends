import {useRoom} from "context";
import {Avatar} from "components";
import {Container} from "./styled";

interface HostProps {}

export const Host: React.FC<HostProps> = () => {
  const {host} = useRoom();
  const {username} = host;
  return (
    <Container>
      <Avatar name={username} size={75} nameStyle={{fontSize: "2rem"}} />
    </Container>
  );
};
