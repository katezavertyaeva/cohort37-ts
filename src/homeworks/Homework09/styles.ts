import styled from "@emotion/styled";

interface ResultsBlockStyledProps {
  isShowResult: boolean
}

export const Homework09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 700px;
  padding: 40px;
`
export const ResultsBlock = styled.div<ResultsBlockStyledProps>`
  display: ${({ isShowResult }) => isShowResult ? 'flex' : 'none'};
  gap: 20px;
  padding: 20px;
`

export const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #94B3EB;
  font-size: 30px;
`