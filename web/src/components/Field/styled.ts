import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin: 0.5rem auto;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.3rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.02);
  font-size: 1.3rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-weight: 600;
`;
