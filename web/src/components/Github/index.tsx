import {Typography} from "components/Typography";
import {Account, Container, Logo} from "./styled";
import logo from "assets/png/github-mark.png";

interface GithubProps {}

export const Github: React.FC<GithubProps> = () => {
  return (
    <Container>
      <Typography variant="title">
        👋🏾 Hey! I created this litte game.
      </Typography>
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
