import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";
import {Container, Label, Input} from "./styled";
import {useTheme} from "context";
import {COLORS} from "styles";

interface FieldProps {
  name?: string;
  value?: string;
  label?: string;
  autoFocus?: boolean;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Field: React.FC<FieldProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  autoFocus = false,
  inputType = "text",
}) => {
  const {theme} = useTheme();
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input
        name={name}
        value={value}
        type={inputType}
        onChange={onChange}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
    </Container>
  );
};
