import {COLORS} from "styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 0rem 1rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    height: 1px;
  }
`;

export const Logo = styled.img`
  width: 30px;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    font-size: 1.1rem;
  }
`;
