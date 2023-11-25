import {Button} from "styles";
import {Container} from "./styled";
import {Field, Typography} from "components";

interface JoinProps {}

export const Join: React.FC<JoinProps> = () => {
  return (
    <Container>
      <Typography variant="title">👋🏾 Bienvenido</Typography>
      <Typography variant="subtitle">
        Deseas unirte al juego creado por Hector?
      </Typography>
      <Field onChange={() => {}} placeholder="Tu nombre" />
      <Button>Unirme</Button>
    </Container>
  );
};
