import Button from "components/Button/Button";
import { CounterProps } from "./types";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";

function Counter({ countValue, onMinusClick, onPlusClick }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinusClick} name="-" />
      </ButtonControl>
      <CounterResult>{countValue}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlusClick} name="+" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
