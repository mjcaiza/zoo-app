import { Animal } from "../../entity/animal/Animal";

export interface AnimalRepository{
    DeleteAnimal(id: any): Promise<Animal>;

    GetAnimals() : Promise<Animal[]>

    CreateAnimal(animal : Animal) : Promise<any>

    EditAnimal(animal : Animal) : Promise<any>

    FindAnimal(id : string) : Promise<Animal>

    FindAnimals(value : string) : Promise<Animal[]>
}


