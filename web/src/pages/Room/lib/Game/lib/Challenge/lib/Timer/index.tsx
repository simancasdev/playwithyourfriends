import {COLORS} from "styles";
import {Info} from "react-feather";
import {Container} from "./styled";
import {Notification} from "components";
import {CountdownLabel} from "./styled";
import {useModal, useRoom} from "context";
import {CountdownCircleTimer} from "react-countdown-circle-timer";

interface TimerProps {}

export const Timer: React.FC<TimerProps> = () => {
  const {sendAnswer} = useRoom();
  const {openModal} = useModal();

  return (
    <Container>
      <CountdownCircleTimer
        isPlaying
        size={70}
        duration={5}
        strokeWidth={6}
        trailColor="#fff"
        colorsTime={[7, 5, 0]}
        colors={["#3869FC", "#A30000", "#A30000"]}
        onComplete={() => {
          sendAnswer(undefined);
          openModal(
            <Notification
              message="El tiempo se acabó"
              icon={<Info color={COLORS["white"]} size={60} />}
            />
          );
        }}
      >
        {({remainingTime}) => <CountdownLabel>{remainingTime}</CountdownLabel>}
      </CountdownCircleTimer>
    </Container>
  );
};
