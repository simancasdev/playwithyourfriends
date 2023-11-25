import {Button} from "styles";
import {useState} from "react";
import {useRoom} from "context";
import {Container} from "./styled";
import {Field, Typography} from "components";

interface JoinProps {}

export const Join: React.FC<JoinProps> = () => {
  const {joinRoom} = useRoom();
  const [username, setUsername] = useState<string>("");

  return (
    <Container>
      <Typography variant="title">👋🏾 Hola!</Typography>
      <Typography variant="subtitle">
        Deseas unirte al juego creado por Hector?
      </Typography>
      <Field
        placeholder="Tu nombre"
        onChange={({target}) => {
          setUsername(target.value);
        }}
      />
      <Button
        disabled={!username}
        onClick={() => {
          joinRoom(username);
        }}
      >
        Unirme
      </Button>
    </Container>
  );
};
