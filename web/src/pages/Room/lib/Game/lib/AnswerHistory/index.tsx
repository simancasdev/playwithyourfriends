import {Fragment} from "react";
import {useRoom} from "context";
import {CheckCircle, X} from "react-feather";
import {Avatar, Typography} from "components";
import {Container, UserRecord} from "./styled";

interface AnswerHistoryProps {}

export const AnswerHistory: React.FC<AnswerHistoryProps> = () => {
  const {answerHistory} = useRoom();
  return answerHistory ? (
    <Container>
      {answerHistory["records"]?.map(({player, answer}, key) => (
        <UserRecord key={key}>
          <Avatar nameStyle={{fontSize: 20}} name={player["username"]} />
          <Typography
            variant="subtitle"
            style={{fontWeight: "bold", textAlign: "center"}}
          >
            {answer ? `Respuesta: ${answer["value"]}` : "No respondió"}
          </Typography>
          {answer && answer["correctAnswer"] ? (
            <CheckCircle color="#fff" />
          ) : (
            <X color="#e00707" />
          )}
        </UserRecord>
      ))}
    </Container>
  ) : (
    <Fragment />
  );
};
