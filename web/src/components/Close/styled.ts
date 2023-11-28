import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
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
