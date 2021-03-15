import { Animal } from "../../entity/animal/Animal"
import { AnimalRepository } from "../../repositories/animal/GetAnimalsRepository"

export interface AnimalService {
    GetAnimals() : Promise<Animal[]>
    CreateAnimal(animal : Animal) : Promise<any>
    EditAnimal(animal : Animal) : Promise<any>
    FindAnimal(id : string) : Promise<Animal>
    DeleteAnimal(id : any) : Promise<Animal>
}

export class AnimalServiceImplementation implements AnimalService {
    
    animalRepository : AnimalRepository

    constructor(animalRepository: AnimalRepository) {
        this.animalRepository = animalRepository
    }
    
    async GetAnimals(): Promise<Animal[]> {
        return this.animalRepository?.GetAnimals()
    }

    async CreateAnimal(animal : Animal) : Promise<any>{
        return this.animalRepository?.CreateAnimal(animal)
    }

    async EditAnimal(animal : Animal) : Promise<any>{
        return this.animalRepository?.EditAnimal(animal)
    }

    async FindAnimal(id : any) : Promise<Animal>{
        return this.animalRepository?.FindAnimal(id)
    }

    async DeleteAnimal(id : any) : Promise<Animal>{
        return this.animalRepository?.DeleteAnimal(id)
    }
}