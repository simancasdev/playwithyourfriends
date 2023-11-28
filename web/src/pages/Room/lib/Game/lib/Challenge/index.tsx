import {Head} from "./styled";
import {COLORS} from "styles";
import {useModal, useRoom} from "context";
import {Answers, Question, Timer, Waiting} from "./lib";
import {CheckCircle, IconProps, X} from "react-feather";
import {Section, Notification, Guideline} from "components";

interface ChallengeProps {}

export const Challenge: React.FC<ChallengeProps> = () => {
  const {openModal} = useModal();
  const {challenge, sendAnswer} = useRoom();

  return challenge ? (
    <Section title="Desafío">
      <Head>
        <Timer />
        <Question>{challenge["question"]}</Question>
      </Head>
      <Guideline>Opciones</Guideline>
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
              message={message}
              icon={
                <Icon
                  size={60}
                  color={COLORS[correctAnswer ? "green" : "red"]}
                />
              }
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
