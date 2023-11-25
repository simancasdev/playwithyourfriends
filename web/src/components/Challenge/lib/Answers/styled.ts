import {COLORS} from "styles";
import styled from "styled-components";

export const Container = styled.div``;

export const Answer = styled.button`
  background-color: ${COLORS["container"]};
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${COLORS["white"]};
  border-radius: 8px;
  transition: all ease 0.3s;

  &.selected {
    background-color: ${COLORS["secondary"]};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Value = styled.span`
  color: ${COLORS["white"]};
  font-size: 1.3rem;
`;

export const Index = styled.div`
  text-transform: capitalize;
  background-color: ${COLORS["primary"]};
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${COLORS["white"]};
`;

export const Button = styled.button`
  color: ${COLORS["white"]};
  font-size: 1.3rem;
  background-color: ${COLORS["primary"]};
  padding: 0.8rem;
  width: 100%;
  border-radius: 0.5rem;
`;
