import {Avatar} from "components";
import {Container} from "./styled";

interface HostProps {}

export const Host: React.FC<HostProps> = () => {
  return (
    <Container>
      <Avatar name="Yehisis" size={75} nameStyle={{fontSize: "2rem"}} />
    </Container>
  );
};
