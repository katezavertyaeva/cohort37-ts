import styled from "@emotion/styled";

interface FactsBlockStyledProps {
  isHideBlock: boolean
}

export const Lesson10Component = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 flex: 1;
 gap: 30px;
 padding: 40px;
`

export const ButtonsContainer = styled.div`
 display: flex;
 gap: 40px;
 width: 500px;
`
export const FactsBlock = styled.div<FactsBlockStyledProps>`
 display: ${({ isHideBlock }) => isHideBlock ? 'none' : 'flex'};
 flex-direction: column;
 gap: 30px;
 /* min-width: 500px; */
 max-height: 700px;
 overflow: auto;
 padding: 40px;
 /* background: #F03930; */
 font-size: 30px;
 color: #F03930;
`

export const CatFactWrapper = styled.div`
 border: 2px solid #F03930;
 padding: 10px;
`

export const SpinnerContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex: 1;
`