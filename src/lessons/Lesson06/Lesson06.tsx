function Lesson06() {
  // 1. Типизация строк - string
  let userName: string = 'Tom';
  console.log(userName);

  userName = '2';
  userName = 1 + 3 + '3';
  // userName = 2;  //так делать нельзя, будет ошибка
  console.log(userName);

  const message: string = `Hello, ${userName}`;

  // 2. Типизация чисел - number
  let luckyNumber: number = 23;
  luckyNumber = 24.5;
  // luckyNumber = '1' - 23; //появляется ошибка

  // 3. Типизация boolean - boolean
  let isAdmin: boolean = true;
  isAdmin = false;

  // 4. Типизация null и undefined
  //Тип null принимает только одно значение - null
  let emptyVar: null = null;
  // emptyVar = undefined;

  //Тип undefined принимает только одно значение - undefined
  let exampleUnd: undefined = undefined;
  // exampleUnd = 0;

  //5. Типизация массивов
  const colors: string[] = ['red', 'green', 'black'];
  colors.push('blue');
  colors[0] = 'yellow';
  // colors[0] = null; //ошибка типов
  console.log(colors);

  //автоматическое определение типа
  const numbersArray = [3, 5, 4];
  // numbersArray.push('red'); //ошибка
  console.log(numbersArray);

  //6. тип tupel (кортеж)
  const fruits: [string, number, boolean] = ['apple', 3, false];
  // fruits[3] = 'banana'; //ошибка - должно быть только 3 элемента

  // 7. Типизация функций
  // функция не возвращает значение
  const showMessage = (): void => {
    console.log('Hi')
  }
  showMessage();

  //типизация функции с параметрами
  // const showMessageWithName = (age: number, firstName: string = 'Tom'): void => {
  //   console.log(`Hello ${firstName} ${age}`)
  // }

  const showMessageWithName = (firstName: string = 'Tom', age: number): void => {
    console.log(`Hello ${firstName} ${age}`)
  }
  showMessageWithName(undefined, 24);

  //типизация функции, которая возвращает значение
  // const showMessageWithReturnName = (firstName: string = 'Tom', age: number): string => {
  //   return `Hello ${firstName} ${age}`
  // }

  const showMessageWithReturnName = (firstName: string = 'Tom', age: number): [string, number] => {
    // const userData: [string, number] = [firstName, age];
    return [firstName, age]
  }
  console.log(showMessageWithReturnName("Bob", 89))

  // 8. Тип any - любой тип
  let city: any = 23;
  city = 'Berlin';

  // 9. Типизация объектов с помощью interface и type
  // interface
  interface User {
    name: string;
    age?: number;
  }

  interface User {
    job: string
  }

  const userData: User = { name: 'Mary', job: 'developer' }
  console.log(userData);

  interface Admin extends User {
    isAdmin: boolean
  }

  const adminData: Admin = {
    name: 'John', age: 45, job: 'developer', isAdmin: false
  }

  const usersData: User[] = [
    { name: 'Mary', job: 'developer' },
    { name: 'Tom', job: 'developer' },
    { name: 'Fred', job: 'manager' }
  ]

  //type
  type Animal = {
    name: string,
    weight?: number //необязательный параметр
  }

  const animal: Animal = {
    name: 'Lion',
    // weight: 200
  }

  type NewAnimal = Animal & { country: string }

  const newAnimal: NewAnimal = {
    name: 'Zebra',
    weight: 150,
    country: 'Afrika'
  }

  type CustomType = string | number;
  let number: CustomType = '23';
  number = 'Number1';

  return <div>Lesson06 - {message}</div>
}

export default Lesson06