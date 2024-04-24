import "./styles.css";
import { TextAreaProps } from "./types";

function TextArea({ placeholder, name, label }: TextAreaProps) {
    return (
        <div className="text-area-container">
            <label>{label}</label>
            <textarea placeholder={placeholder} name={name}></textarea>
        </div>
    )
}

export default TextArea;