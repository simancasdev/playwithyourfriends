import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin: 0.5rem auto;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
`;

export const Input = styled.input`
  padding: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-weight: bold;
`;
