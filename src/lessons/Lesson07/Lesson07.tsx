import { useState } from 'react';
import './styles.css';
import Counter from 'components/Counter/Counter';

function Lesson07() {
  //состояние создано в родительском компоненте
  const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlus = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  // generic
  // generic указывается при создании type или interface после названия
  // создание type с generic
  type CustomArrayType<T = string> = T[];

  const numbersArray: CustomArrayType<number> = [2, 3];
  const stringArray: CustomArrayType = ['2', '3'];

  type CustomArrayTupelType<T = string> = [string, T];
  const arrayMix1: CustomArrayTupelType = ['apple', '2'] //ожидается тип [string, string]
  const arrayMix2: CustomArrayTupelType<number> = ['apple', 2] //ожидается тип [string, number]

  // создание type с interface
  // пример без джинерика
  interface Fruits {
    name: string,
    weight: number
  }

  const fruits1: Fruits = {
    name: 'Apple',
    weight: 4
  }

  //пример с джинериком
  interface FruitsGeneric<Type> {
    name: string,
    weight: Type
  }

  const fruits2: FruitsGeneric<boolean> = {
    name: 'Apple',
    weight: true
  }

  //enum
  enum Colors { Red, Black = 9, Green };
  // console.log(Colors);
  let color: Colors = Colors.Red;
  color = 0;
  console.log(color)

  // switch case
  enum WeathersCode {
    SQ = "SQ",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  const decode = (codeOfWeather: WeathersCode): string => {
    switch (codeOfWeather) {
      case WeathersCode.SQ:
        return "шквал";
      case WeathersCode.PO:
        return "пыльный вихрь";
      case WeathersCode.FC:
        return "торнадо";
      case WeathersCode.BR:
        return "дымка (видимость от 1 до 9 км)";
      case WeathersCode.HZ:
        return "мгла (видимость менее 10 км)";
      case WeathersCode.FU:
        return "дым (видимость менее 10 км)";
      case WeathersCode.DS:
        return "пыльная буря (видимость менее 10 км)";
      case WeathersCode.SS:
        return "песчаная буря (видимость менее 10 км) ";
    }
  };
  console.log(decode(WeathersCode.FC));

  return <div><Counter countValue={count} onMinusClick={onMinus} onPlusClick={onPlus} /></div>
}

export default Lesson07;