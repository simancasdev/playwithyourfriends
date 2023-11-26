import {Button} from "styles";
import {useModal} from "context";
import {Body, Container, FormStyled, Head} from "./styled";
import {Close, Field, PossibleAnswers, Typography} from "components";

interface CreateChallengeProps {}

export const CreateChallenge: React.FC<CreateChallengeProps> = () => {
  const {openModal} = useModal();
  return (
    <Container>
      <Typography>Tus participantes estan esperando el desafío</Typography>
      <Button
        onClick={() => {
          openModal(<Form />);
        }}
      >
        Crear desafío
      </Button>
    </Container>
  );
};

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  return (
    <FormStyled>
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
    </FormStyled>
  );
};
