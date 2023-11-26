import {Container} from "./styled";
import {CountdownLabel} from "./styled";
import {CountdownCircleTimer} from "react-countdown-circle-timer";

interface TimerProps {}

export const Timer: React.FC<TimerProps> = () => {
  return (
    <Container>
      <CountdownCircleTimer
        isPlaying
        size={70}
        duration={15}
        strokeWidth={6}
        trailColor="#fff"
        colorsTime={[7, 5, 0]}
        colors={["#3869FC", "#A30000", "#A30000"]}
        onComplete={() => console.log("done")}
      >
        {({remainingTime}) => <CountdownLabel>{remainingTime}</CountdownLabel>}
      </CountdownCircleTimer>
    </Container>
  );
};
