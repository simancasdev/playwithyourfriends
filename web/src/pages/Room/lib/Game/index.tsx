import {useRoom} from "context";
import {Host} from "components";
import {Layout, Header} from "./styled";
import {Players, Challenge, CreateChallenge} from "./lib";

interface GameProps {}

export const Game: React.FC<GameProps> = () => {
  const {players, meAsHost} = useRoom();
  return (
    <Layout>
      <Header>
        <Host />
      </Header>
      {meAsHost ? <CreateChallenge /> : <Challenge />}
      <Players players={players} />
    </Layout>
  );
};
