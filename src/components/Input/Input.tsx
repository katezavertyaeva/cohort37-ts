import { ErrorMessage, InputComponent, InputComponentContainer, InputLabel } from "./styles";
import { InputProps } from "./types";

function Input({ name, type = "text", placeholder, label, onInputChange, value, error }: InputProps) {
  return (
    <InputComponentContainer>
      <InputLabel>{label}</InputLabel>
      <InputComponent
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputComponentContainer>
  );
}

export default Input;
