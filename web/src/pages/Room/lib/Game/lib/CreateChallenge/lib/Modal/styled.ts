import {COLORS} from "styles";
import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Container = styled.div`
  border-radius: 12px 12px 0 0;
  background-color: ${COLORS["black"]};
  width: 100%;
  padding: 1rem;
  height: 80vh;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
