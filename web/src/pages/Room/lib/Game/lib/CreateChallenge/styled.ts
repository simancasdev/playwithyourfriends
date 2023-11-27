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
  height: 80vh;
  background-color: ${COLORS["black"]};
  width: 100%;
  padding: 1rem;
`;
