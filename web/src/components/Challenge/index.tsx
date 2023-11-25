import {useRoom} from "context";
import {Section} from "components";
import {Answers, Question, Timer} from "./lib";

interface ChallengeProps {}

export const Challenge: React.FC<ChallengeProps> = () => {
  const {challenge} = useRoom();
  const {answers, question} = challenge;
  return (
    <Section title="Desafío">
      <Question>{question["value"]}</Question>
      <Timer />
      <Answers answers={answers} />
    </Section>
  );
};
