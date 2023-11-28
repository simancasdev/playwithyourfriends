import {Fragment} from "react";
import {useRoom} from "context";
import {CheckCircle, Icon, IconProps, X} from "react-feather";
import {Avatar, Typography} from "components";
import {Container, UserRecord} from "./styled";
import {COLORS} from "styles";

interface AnswerHistoryProps {}

export const AnswerHistory: React.FC<AnswerHistoryProps> = () => {
  const {answerHistory} = useRoom();
  return answerHistory ? (
    <Container>
      {answerHistory["records"]?.map(({player, answer}, key) => {
        const isCorrect = answer && answer["correctAnswer"];
        const Icon: React.FC<IconProps> = isCorrect ? CheckCircle : X;
        return (
          <UserRecord key={key}>
            <Avatar nameStyle={{fontSize: 24}} name={player["username"]} />
            <Typography
              variant="subtitle"
              style={{fontWeight: "500", textAlign: "center"}}
            >
              {answer ? `Respuesta: ${answer["value"]}` : "No respondió"}
            </Typography>
            <Icon
              size={30}
              strokeWidth={3}
              color={COLORS[isCorrect ? "green" : "red"]}
            />
          </UserRecord>
        );
      })}
    </Container>
  ) : (
    <Fragment />
  );
};
