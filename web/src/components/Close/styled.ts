import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;
  &:active {
    transform: scale(0.95);
  }
`;
