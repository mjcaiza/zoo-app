import { Animal } from "../../../domain/entity/animal/Animal"
import { AnimalRepository } from "../../../domain/repositories/animal/GetAnimalsRepository"

export class AnimalRepositoryImplementation implements AnimalRepository {


    async GetAnimals(): Promise<Animal[]> {
        const storage = localStorage.getItem('animals') 
        const animals = storage ? JSON.parse(storage!) : []
        return animals.map((animal: Animal) => new Animal(animal.id, animal.name, animal.age, animal.category, animal.environment))
    }

    async CreateAnimal(animal : Animal) : Promise<any>{
        
        let storage = localStorage.getItem('animals') 
        let animals = storage ? JSON.parse(storage!) : []
        animal.id = animals.length + 1
        animals.push(animal)
        localStorage.setItem('animals', JSON.stringify(animals))
        return {response : 'SUCCESS'}
    }

    async EditAnimal(animal : Animal) : Promise<any>{
        let storage = localStorage.getItem('animals') 
        let animals = storage ? JSON.parse(storage!) : []
        let index = animals.findIndex((elemento: any) => elemento.id === animal.id)
        animals[index] = animal
        localStorage.setItem('animals', JSON.stringify(animals))
        return {response : 'SUCCESS'}
    }

    async DeleteAnimal( id : string) : Promise<any>{
        let storage = localStorage.getItem('animals') 
        let animals = storage ? JSON.parse(storage!) : []
        animals = animals.filter((elemento: any) => elemento.id !== id)
        localStorage.setItem('animals', JSON.stringify(animals))
        return {response : 'SUCCESS'}
    }

    async FindAnimal(id : string) : Promise<Animal>{

        const storage = localStorage.getItem('animals') 
        const animals = storage ? JSON.parse(storage!) : []
        const animal = animals.find((elemento : Animal) =>  elemento.id == id)

        return new Animal(animal.id, animal.name, animal.age, animal.category, animal.environment)
    }
}