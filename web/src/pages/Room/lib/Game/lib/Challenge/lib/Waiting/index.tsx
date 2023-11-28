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
        visible={true}
        height={45}
        width={45}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
      <Typography variant="title">
        Esperando desafío de {host["username"]}
      </Typography>
    </Container>
  );
};
