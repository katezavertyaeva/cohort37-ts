import { Dispatch, SetStateAction } from "react";


export interface MessagePostContext{
    message: string,
    onChange: Dispatch<SetStateAction<string>>,
    setTextArea: Dispatch<SetStateAction<string>>

}