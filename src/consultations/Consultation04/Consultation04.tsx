import { Consultation04Container } from './styles'
import Counter from 'components/Counter/Counter';
import { useState } from 'react';

function Consultation04() {

  const [value, setValue] = useState<number>(0);

  const onMinusClick = (): void => {
    if (value > -10) {
      setValue((prevValue) => --prevValue)
    }
  }

  const onPlusClick = () => {
    if (value < 10) {
      setValue((prevValue) => prevValue + 1);
    }
    else {

    }

  }

  return (
    <Consultation04Container>
      {/* ДЗ - к следующей лекции необходимо подумать, что лучше отправить как значения в  disabledMinus и disabledPlus */}
      {/* <Counter countValue={value} onMinusClick={onMinusClick} onPlusClick={onPlusClick} disabledMinus={} disabledPlus={}/> */}
    </Consultation04Container>
  )
}

export default Consultation04;