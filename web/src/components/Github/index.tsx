import {Account, Container, Logo} from "./styled";
import logo from "assets/png/github-mark-white.png";

interface GithubProps {}

export const Github: React.FC<GithubProps> = () => {
  return (
    <Container>
      👋🏾 Hey! I created this litte game.
      <Account>
        <Logo src={logo} />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/simancasdev"
        >
          @simancasdev
        </a>
      </Account>
    </Container>
  );
};
