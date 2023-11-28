import {COLORS} from "./colors";
import styled from "styled-components";

export const Button = styled.button`
  color: ${COLORS["white"]};
  transition: all ease 0.3s;
  font-size: 1.3rem;
  background-color: ${COLORS["primary"]};
  padding: 0.8rem;
  cursor: pointer;
  width: 100%;
  border-radius: 0.5rem;

  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    color: rgba(255, 255, 255, 0.8);
    background-color: ${COLORS["disabled"]};
  }
`;
