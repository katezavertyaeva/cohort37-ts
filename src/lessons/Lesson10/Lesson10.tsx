import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import {
  ButtonsContainer,
  CatFactWrapper,
  FactsBlock,
  Lesson10Component,
  SpinnerContainer,
} from './styles';

import Button from 'components/Button/Button'
import Spinner from 'components/Spinner/Spinner';

function Lesson10() {
  const [catFacts, setCatFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCatFact = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://catfact.ninja/fact')
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('API Error'), {
          response: result
        })
      } else {
        setCatFacts((prevValue) => [...prevValue, result.fact])
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getCatFact()
  }, []);

  const catFactsElements = catFacts.map((catFact: string) => {
    return <CatFactWrapper key={v4()}>{catFact}</CatFactWrapper>
  })

  const deleteCatFacts = () => {
    setCatFacts([])
  }

  const isEmptyCatFacts = !catFacts.length;

  // return (
  //   <Lesson10Component>
  //     {isLoading ? <SpinnerContainer><Spinner /></SpinnerContainer> :
  //       <>
  //         <ButtonsContainer>
  //           <Button name='GET MORE INFO' onButtonClick={getCatFact} />
  //           <Button name='DELETE ALL FACTS' onButtonClick={deleteCatFacts} disabled={isEmptyCatFacts} />
  //         </ButtonsContainer>
  //         <FactsBlock isHideBlock={isEmptyCatFacts}>{catFactsElements}</FactsBlock>
  //       </>}
  //   </Lesson10Component>
  // )

  return (
    <Lesson10Component>
      <ButtonsContainer>
        <Button name='GET MORE INFO' onButtonClick={getCatFact} />
        <Button name='DELETE ALL FACTS' onButtonClick={deleteCatFacts} disabled={isEmptyCatFacts} />
      </ButtonsContainer>
      {isLoading ? <SpinnerContainer><Spinner /></SpinnerContainer> :
        <FactsBlock isHideBlock={isEmptyCatFacts}>{catFactsElements}</FactsBlock>}
    </Lesson10Component>
  )
}

export default Lesson10;