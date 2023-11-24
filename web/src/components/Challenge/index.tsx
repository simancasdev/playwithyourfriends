import {Section} from "components";
import {Answers, Question, Timer} from "./lib";

interface ChallengeProps {}

export const Challenge: React.FC<ChallengeProps> = () => {
  return (
    <Section title="Desafío">
      <Question>Cual es mi serie favorita?</Question>
      <Timer />
      <Answers
        answers={[
          {value: "Big bang theory"},
          {value: "2 and half men"},
          {value: "Naruto"},
        ]}
      />
    </Section>
  );
};
