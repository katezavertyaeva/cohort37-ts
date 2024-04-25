import "./styles.css";
import Button from "components/Button/Button";
import { CounterProps } from "./types";

function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {
  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button onButtonClick={onMinusClick} name="-" />
      </div>
      <p>{countValue}</p>
      <div className="button-control">
        <Button onButtonClick={onPlusClick} name="+" />
      </div>
    </div>
  );
}

export default Counter;
