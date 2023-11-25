import {Button} from "styles";
import {useState} from "react";
import {useRoom} from "context";
import {Field} from "components";
import {Container} from "./styled";

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = () => {
  const {createRoom} = useRoom();
  const [username, setUsername] = useState<string>("");

  return (
    <Container style={{color: "#fff"}}>
      <Field
        autoFocus
        label="Tu nombre"
        placeholder="Hector"
        onChange={({target}) => {
          setUsername(target.value);
        }}
      />
      <Button
        disabled={!username}
        onClick={() => {
          createRoom(username);
        }}
      >
        Crear sala de juego
      </Button>
    </Container>
  );
};
