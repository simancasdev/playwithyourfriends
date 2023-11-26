import {COLORS} from "styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
`;

export const CountdownLabel = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${COLORS["white"]};
`;
