import styled from "styled-components";
import {COLORS} from "styles";

export const Container = styled.div`
  background-color: ${COLORS["black"]};
  width: 90%;
  height: 250px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #fff;
`;
