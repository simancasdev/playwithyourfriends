import {useModal} from "context";
import {Player} from "interfaces";
import {Grid, Empty, Clipboard} from "./styled";
import {Check, Clipboard as ClipboardIcon, Frown} from "react-feather";
import {Player as Gamer, Section, Typography, Notification} from "components";

interface PlayersProps {
  players: Player[];
}

export const Players: React.FC<PlayersProps> = ({players}) => {
  const {openModal} = useModal();

  return (
    <Section style={{marginTop: "2rem"}} title="Jugadores">
      {!players.length ? (
        <Empty>
          <Frown size={60} />
          <Typography variant="subtitle">
            Aún no has invitado jugadores
          </Typography>
          <Clipboard
            onClick={() => {
              navigator.clipboard.writeText(window.location.href).then(() => {
                openModal(
                  <Notification
                    message={`Enlace copiado con éxito. ${"\n"} Envíalo a un amigo`}
                    icon={<Check size={80} />}
                  />
                );
              });
            }}
          >
            <ClipboardIcon />
            <Typography variant="subtitle">
              Copiar enlace para invitar
            </Typography>
          </Clipboard>
        </Empty>
      ) : (
        <Grid>
          {players.map(({username}, key) => (
            <Gamer key={key} username={username} />
          ))}
        </Grid>
      )}
    </Section>
  );
};
