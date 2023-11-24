import {Container} from "./styled";

interface GuidelineProps {
  children: string;
}

export const Guideline: React.FC<GuidelineProps> = ({children}) => {
  return <Container>{children}</Container>;
};
