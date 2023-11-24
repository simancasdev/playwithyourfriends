import {Container} from "./styled";
import {Children} from "interfaces";
import {Guideline} from "components";

interface SectionProps extends Children {
  title: string | JSX.Element;
}

export const Section: React.FC<SectionProps> = ({title, children}) => {
  return (
    <Container>
      {typeof title === "string" ? <Guideline>{title}</Guideline> : title}
      {children}
    </Container>
  );
};
