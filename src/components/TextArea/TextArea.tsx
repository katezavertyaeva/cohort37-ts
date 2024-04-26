import { TextAreaContainer, TextAreaLabel, TextAreaComponent } from "./styles";
import { TextAreaProps } from "./types";

function TextArea({ placeholder, name, label }: TextAreaProps) {
    return (
        <TextAreaContainer>
            <TextAreaLabel>{label}</TextAreaLabel>
            <TextAreaComponent placeholder={placeholder} name={name}></TextAreaComponent>
        </TextAreaContainer>
    )
}

export default TextArea;