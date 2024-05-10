import { useState, createContext } from 'react';
import Section from '../Section/Section';
import {
  MainContentComponent,
  MainTitle
} from './styles';
import { UserData } from './types';

//создаем контекст
export const MainContext = createContext({
  firstName: '',
  lastName: '',
  age: 0
})

function MainContent() {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 12
  })
  return (
    <MainContext.Provider value={userData}>
      <MainContentComponent>
        <MainTitle>Main block</MainTitle>
        {/* //пример с props drilling */}
        {/* <Section userData={userData} /> */}
        <Section />
      </MainContentComponent>
    </MainContext.Provider>
  )
}

export default MainContent