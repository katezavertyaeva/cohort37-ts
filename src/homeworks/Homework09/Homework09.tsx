import { ChangeEvent, useState } from "react";

import Button from "components/Button/Button"
import { Homework09Wrapper, ResultWrapper, ResultsBlock } from "./styles"
import Input from "components/Input/Input";

function Homework09() {
  const [firstNote, setFirstNote] = useState<string>('');
  const [secondNote, setSecondNote] = useState<string>('');
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const onFirstNoteInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFirstNote(event.target.value)
  }

  const onSecondNoteInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSecondNote(event.target.value)
  }

  const onShowResult = () => {
    // setIsShowResult(true)
    setIsShowResult(!isShowResult)
  }

  return (
    <Homework09Wrapper>
      <Input value={firstNote} placeholder="First note" onInputChange={onFirstNoteInputChange} name='firstNote' label='First note' />
      <Input value={secondNote} placeholder="Second note" onInputChange={onSecondNoteInputChange} name='secondNote' label='Second note' />
      <Button name='Show notes' onButtonClick={onShowResult} />
      <ResultsBlock isShowResult={isShowResult}>
        <ResultWrapper>{firstNote}</ResultWrapper>
        <ResultWrapper>{secondNote}</ResultWrapper>
      </ResultsBlock>
    </Homework09Wrapper>
  )

}

export default Homework09;