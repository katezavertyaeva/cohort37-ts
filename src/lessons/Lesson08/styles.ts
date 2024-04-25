import { css } from '@emotion/react';
import styled from "@emotion/styled";

interface ButtonComponentPropsStyled {
  mainButton?: boolean
}

//создание шаблона стилей с помощью функции css
const commonBoxStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
`

export const Lesson08Component = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 30px;
 padding: 40px;
`

export const BoxComponent = styled.div`
  ${commonBoxStyles}
  background: #E88EA0;
`

export const InfoBoxComponent = styled.div`
  ${commonBoxStyles}
  background: #C22BEB;
  font-size: 45px;
`

export const ButtonComponent = styled.button<ButtonComponentPropsStyled>`
 width: 200px;
 height: 70px;
 border: none;
 /* background: #E84162; */
 background: ${({ mainButton }) => mainButton ? '#E84162' : '#E87241'} ;
 border-radius: 6px;
 font-size: 24px;
 padding: 10px;
 cursor: pointer;
`