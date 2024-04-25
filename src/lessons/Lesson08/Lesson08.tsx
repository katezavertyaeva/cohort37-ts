import {
  BoxComponent,
  Lesson08Component,
  ButtonComponent,
  InfoBoxComponent
} from './styles';

function Lesson08() {
  // 2 подход - inline styles
  // const styleObject = {
  //   fontSize: '42px',
  //   color: 'red'
  // }
  const typeButton = true;

  return (
    <Lesson08Component>
      <BoxComponent>My first emotion block</BoxComponent>
      <ButtonComponent mainButton={typeButton}>Custom button</ButtonComponent>
      <ButtonComponent>Custom button</ButtonComponent>
      <InfoBoxComponent>Info</InfoBoxComponent>
      {/* 2 подход - inline styles (в атрибут style передаётся объект) */}
      {/* <p style={{ fontSize: '24px', color: 'blue' }}>Hello</p>
      <p style={styleObject}>Hello</p>
      <div style={styleObject}>Bye</div> */}
    </Lesson08Component>
  )
}

export default Lesson08