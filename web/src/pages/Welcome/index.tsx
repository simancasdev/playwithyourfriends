import {Container} from "./styled";

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = () => {
  return <Container style={{color: "#fff"}}>Welcome</Container>;
};
