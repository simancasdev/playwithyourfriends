import styled from "styled-components";

export const Container = styled.span`
  display: block;
  font-size: 1.3rem;
  font-weight: 600;
  position: relative;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 0.3px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
