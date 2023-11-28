import {Container} from "./styled";
import {Children} from "interfaces";
import {Guideline} from "components";
import {CSSProperties} from "styled-components";

interface SectionProps extends Children {
  title: string | JSX.Element;
  style?: CSSProperties;
}

export const Section: React.FC<SectionProps> = ({title, children, style}) => {
  return (
    <Container style={style}>
      {typeof title === "string" ? <Guideline>{title}</Guideline> : title}
      {children}
    </Container>
  );
};
