import {COLORS} from "styles";
import {X} from "react-feather";
import {Container} from "./styled";

interface CloseProps {
  onClick: () => void;
}

export const Close: React.FC<CloseProps> = ({onClick}) => {
  return (
    <Container onClick={onClick}>
      <X color={COLORS["black"]} />
    </Container>
  );
};
