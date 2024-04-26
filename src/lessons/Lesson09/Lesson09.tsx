import { ChangeEvent, useEffect, useState } from 'react';
import {
  InputExample,
  Lesson09Component,
  Result
} from './styles';

function Lesson09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value)
  }

  // Вызов функции callback при создании компонента. Пустой массив завсимостей
  useEffect(() => {
    console.log('Mounting');
  }, []);

  // Вызов функции callback при обновлении компонента.  Массив завсимостей не пустой
  useEffect(() => {
    console.log('Updating');
  }, [inputValue]);

  // Вызов функции callback при размонтировании компонента. 
  //Массив завсимостей пустой, внутри callback функции возвращается другая функция
  useEffect(() => {
    return () => {
      console.log('Unmounting');
    }
  }, []);

  // console.log('render');

  return (
    <Lesson09Component>
      <InputExample name='example' placeholder='example text' onChange={onChangeInput} />
      <InputExample name='example2' placeholder='example text2' onChange={onChangeInput2} />
      <Result>{inputValue}</Result>
      <Result>{inputValue2}</Result>
    </Lesson09Component>
  )
}

export default Lesson09