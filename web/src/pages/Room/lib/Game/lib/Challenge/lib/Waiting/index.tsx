import {useRoom} from "context";
import {Container} from "./styled";
import {Typography} from "components";
import {FidgetSpinner} from "react-loader-spinner";

interface WaitingProps {}

export const Waiting: React.FC<WaitingProps> = () => {
  const {host} = useRoom();

  return (
    <Container>
      <FidgetSpinner
        width={45}
        height={45}
        visible={true}
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
        backgroundColor="#F4442E"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
      />
      <Typography variant="title">
        Esperando desafío de {host["username"]}
      </Typography>
    </Container>
  );
};
