import {Grid} from "./styled";
import {Player} from "interfaces";
import {Player as Gamer, Section} from "components";

interface PlayersProps {
  players: Player[];
}

export const Players: React.FC<PlayersProps> = ({players}) => {
  return (
    <Section title="Jugadores">
      <Grid>
        {players.map(({name}, key) => (
          <Gamer key={key} name={name} />
        ))}
      </Grid>
    </Section>
  );
};
