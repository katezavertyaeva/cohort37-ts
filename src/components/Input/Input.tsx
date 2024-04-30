import { InputComponent, InputComponentContainer, InputLabel } from "./styles";
import { InputProps } from "./types";

function Input({ name, type = "text", placeholder, label, onInputChange, value }: InputProps) {
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
    </InputComponentContainer>
  );
}

export default Input;
