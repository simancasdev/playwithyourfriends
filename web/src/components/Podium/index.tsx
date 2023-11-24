import {Competitor} from "./lib";
import {Container} from "./styled";
import {GameResult} from "interfaces";

interface PodiumProps {
  result: GameResult;
}

export const Podium: React.FC<PodiumProps> = ({result}) => {
  return (
    <Container>
      {result["competitors"].map(({rank, ...player}, key) => (
        <Competitor key={key} rank={rank} player={player} />
      ))}
    </Container>
  );
};
