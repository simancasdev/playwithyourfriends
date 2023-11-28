import {COLORS} from "styles";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormStyled = styled.div`
  background-color: ${COLORS["white"]};
  width: 600px;
  border-radius: 12px;
  padding: 2rem;
`;

export const Waiting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
