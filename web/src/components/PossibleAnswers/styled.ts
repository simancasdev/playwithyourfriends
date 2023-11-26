import styled from "styled-components";
import {Button} from "styles";

export const Container = styled.div``;

export const AnswerField = styled.div`
  display: grid;
  grid-template-columns: auto 40px 40px;
  grid-gap: 1rem;
  align-items: center;
`;

export const AddMore = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  gap: 15px;
`;

export const AddMoreButton = styled(Button)`
  width: 40px;
  height: 40px;
  padding: 0 !important;
  border-radius: 100%;
`;
