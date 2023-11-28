import styled from "styled-components";
import {COLORS} from "styles";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  width: 90vw;
  margin: 0 auto;
`;

export const UserRecord = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS["container"]};
  padding: 1rem;
  border-radius: 1rem;
  max-width: 200px;
`;
