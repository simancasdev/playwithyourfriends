import {Button} from "styles";
import {useState} from "react";
import {useRoom} from "context";
import {Container, Header} from "./styled";
import {Field, Typography} from "components";

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = () => {
  const {createRoom} = useRoom();
  const [username, setUsername] = useState<string>("");

  return (
    <Container>
      <Header>
        <Typography variant="title" style={{fontSize: 32}}>
          🎮 Juega con tus Amigos!
        </Typography>
        <Typography variant="subtitle">
          Envíales preguntas y conoce quien sabe más de ti
        </Typography>
      </Header>
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
