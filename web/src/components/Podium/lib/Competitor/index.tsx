import {Player} from "interfaces";
import {Avatar} from "components";
import {Container, Tie} from "./styled";
import tie from "assets/png/winner.png";
import tie1st from "assets/png/winner-first-place.png";

interface CompetitorProps {
  rank: number;
  player: Player;
}

export const Competitor: React.FC<CompetitorProps> = ({rank, player}) => {
  const {username} = player;
  return (
    <Container
      style={{transform: rank === 1 ? "translateY(-10px)" : undefined}}
    >
      <Avatar
        name={username}
        nameStyle={{fontSize: "1.3rem", fontWeight: "600"}}
      />
      {rank <= 3 && <Tie src={rank === 1 ? tie1st : tie} />}
    </Container>
  );
};
