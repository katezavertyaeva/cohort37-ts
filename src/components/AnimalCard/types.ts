// Типизация объекта через type
// type Animal = {
//   name: string,
//   species: string,
//   image: string
// }

// Типизация объекта через interface
interface Animal {
  name: string,
  species: string,
  image: string
}

export interface AnimalCardProps {
  animalData: Animal
}