import styled from "styled-components";
import {COLORS} from "styles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${COLORS["container"]};
`;

export const Badge = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-radius: 0 0 8px 8px;
  background-color: ${COLORS["primary"]};
`;
