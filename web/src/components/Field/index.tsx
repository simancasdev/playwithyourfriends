import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";
import {Container, Label, Input} from "./styled";

interface FieldProps {
  label?: string;
  autoFocus?: boolean;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Field: React.FC<FieldProps> = ({
  label,
  onChange,
  placeholder,
  autoFocus = false,
  inputType = "text",
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input
        type={inputType}
        onChange={onChange}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
    </Container>
  );
};
