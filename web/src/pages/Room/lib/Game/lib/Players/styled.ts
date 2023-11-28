import {COLORS} from "styles";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Clipboard = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  color: ${COLORS["secondary"]};
`;
