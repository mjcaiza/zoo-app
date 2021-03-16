import { AnimalRepositoryImplementation } from "../app/data/services/animal/AnimalApi"
import { AnimalServiceImplementation } from "../app/domain/interactors/animal/GetAnimalsUseCase"

export const titlesHeaders = [{ title: 'name' }, { title: 'age' }, { title: 'category' }, { title: 'environment' }, { title: 'options' }]


export const animalRepository = new AnimalRepositoryImplementation()
export  const animalService = new AnimalServiceImplementation(animalRepository)