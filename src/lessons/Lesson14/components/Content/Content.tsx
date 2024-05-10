import { useContext } from 'react';

import {
  ContentComponent,
  DataItem
} from './styles';
import { MainContext } from '../MainContent/MainContent';

function Content() {
  const userData = useContext(MainContext);

  return (
    <ContentComponent>
      <DataItem>First Name: {userData.firstName}</DataItem>
      <DataItem>Last Name: {userData.lastName}</DataItem>
      <DataItem>Age: {userData.age}</DataItem>
    </ContentComponent>
  )
}

export default Content