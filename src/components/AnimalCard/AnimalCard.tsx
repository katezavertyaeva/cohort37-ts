import { AnimalCardWrapper, AnimalImage, CardParagraph, CardTitle } from "./styles";
import { AnimalCardProps } from './types';

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <CardTitle>{animalData.name}</CardTitle>
      <CardParagraph>{animalData.species}</CardParagraph>
      <AnimalImage src={animalData.image} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
