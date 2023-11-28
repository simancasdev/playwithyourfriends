import {COLORS} from "styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const Image = styled.img`
  object-fit: contain;
  border-radius: 100px;
`;

export const Name = styled.span`
  font-weight: 700;
`;
