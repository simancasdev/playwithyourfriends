import {Close, Field, PossibleAnswers, Typography} from "components";
import {Container, Modal as ModalStyled, Head, Body} from "./styled";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  return (
    <ModalStyled>
      <Container>
        <Head>
          <Typography variant="title">Crear desafío</Typography>
          <Close onClick={() => {}} />
        </Head>
        <Body>
          <Field
            label="Pregunta"
            onChange={({target}) => {}}
            placeholder="Mi comida favorita cual es?"
          />
          <PossibleAnswers />
        </Body>
      </Container>
    </ModalStyled>
  );
};
