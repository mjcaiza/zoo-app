

export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"

export const CREATE_SUCCESS = 'CREATE_SUCCESS'
export const CREATE_REQUEST = 'CREATE_REQUEST'
export const CREATE_FAILURE = 'CREATE_FAILURE'

export const EDIT_SUCCESS = 'EDIT_SUCCESS'
export const EDIT_REQUEST = 'EDIT_REQUEST'
export const EDIT_FAILURE = 'EDIT_FAILURE'

export const FIND_SUCCESS = 'FIND_SUCCESS'
export const FIND_REQUEST = 'FIND_REQUEST'
export const FIND_FAILURE = 'FIND_FAILURE'

export type AnimalProps = {
    animals: Animal[],
    animal : Animal,
    refreshList: () => Animal[],
    createAnimal: (animal : Animal) => Animal,
    findAnimal : () => Animal
  
}

export type AnimalActionType = RefreshAnimalListSuccess
export type CreateAnimalType = CreateAnimalSucces
export type EditAnimalType = EditAnimalSucces
export type FindAnimalType = FindAnimalSuccess

export interface RefreshAnimalListSuccess {
    type: typeof LIST_LOAD_SUCCESS
    payload: Animal[]
}
export interface CreateAnimalSucces{
    type: typeof CREATE_SUCCESS
    payload: Animal
}
export interface EditAnimalSucces{
    type: typeof EDIT_SUCCESS
    payload: Animal
}
export interface FindAnimalSuccess{
    type: typeof FIND_SUCCESS
    payload: Animal
}


export interface Animal {
    id : string 
    name : string 
    age : number 
    category : string
    environment : string 
}