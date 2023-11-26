import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";
import {Container, Label, Input} from "./styled";
import {useTheme} from "context";
import {COLORS} from "styles";

interface FieldProps {
  value?: string;
  label?: string;
  autoFocus?: boolean;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Field: React.FC<FieldProps> = ({
  label,
  onChange,
  value,
  placeholder,
  autoFocus = false,
  inputType = "text",
}) => {
  const {theme} = useTheme();
  return (
    <Container>
      {label && (
        <Label
          style={{color: theme === "dark" ? COLORS["white"] : COLORS["black"]}}
        >
          {label}
        </Label>
      )}
      <Input
        value={value}
        type={inputType}
        onChange={onChange}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
    </Container>
  );
};
