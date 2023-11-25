import {Players} from "./lib";
import {useRoom} from "context";
import {Layout, Header} from "./styled";
import {Challenge, Host} from "components";

interface GameProps {}

export const Game: React.FC<GameProps> = () => {
  const {players} = useRoom();
  return (
    <Layout>
      <Header>
        <Host />
      </Header>
      <Challenge />
      <Players players={players} />
    </Layout>
  );
};
