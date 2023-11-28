import styled from "styled-components";
import {COLORS} from "styles";

export const Container = styled.div`
  background-color: ${COLORS["white"]};
  width: auto;
  padding: 2rem;
  max-width: 350px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #fff;
`;
