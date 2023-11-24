import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
`;
