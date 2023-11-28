import {COLORS} from "styles";
import {useModal, useRoom} from "context";
import {Section, Notification} from "components";
import {Answers, Question, Timer, Waiting} from "./lib";
import {CheckCircle, IconProps, X} from "react-feather";

interface ChallengeProps {}

export const Challenge: React.FC<ChallengeProps> = () => {
  const {openModal} = useModal();
  const {challenge, sendAnswer} = useRoom();

  return challenge ? (
    <Section title="Desafío">
      <Question>{challenge["question"]}</Question>
      <Timer />
      <Answers
        answers={challenge["answers"]}
        onSelect={(answerSelected) => {
          const {correctAnswer} = answerSelected;

          const Icon: React.FC<IconProps> = correctAnswer ? CheckCircle : X;
          const message: string = correctAnswer
            ? "Respuesta correcta"
            : "Oh, no. Incorrecto";

          openModal(
            <Notification
              icon={<Icon size={60} color={COLORS["white"]} />}
              message={message}
            />
          );
          sendAnswer(answerSelected);
        }}
      />
    </Section>
  ) : (
    <Waiting />
  );
};
