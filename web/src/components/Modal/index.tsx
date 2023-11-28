import {Fragment} from "react";
import {useModal} from "context";
import {Modal as ModalStyled} from "./styled";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  const {element, config} = useModal();
  return element ? (
    <ModalStyled style={config["containerStyle"]}>{element}</ModalStyled>
  ) : (
    <Fragment />
  );
};
