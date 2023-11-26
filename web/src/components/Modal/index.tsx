import {Fragment} from "react";
import {useModal} from "context";
import {Modal as ModalStyled} from "./styled";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  const {element} = useModal();
  return element ? <ModalStyled>{element}</ModalStyled> : <Fragment />;
};
