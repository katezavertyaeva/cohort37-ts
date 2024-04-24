type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  name: string,
  type?: ButtonType,
  onButtonClick?: () => void
}