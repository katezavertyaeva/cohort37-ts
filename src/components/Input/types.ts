import { ChangeEvent } from "react";

export interface InputProps {
  name: string,
  type?: string,
  placeholder: string,
  label?: string,
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value: string;
}