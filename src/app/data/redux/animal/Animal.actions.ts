import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE, CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE, FIND_REQUEST, FIND_SUCCESS, FIND_FAILURE, EDIT_FAILURE, EDIT_REQUEST, EDIT_SUCCESS} from "./Animal.types"
import {AnimalRepositoryImplementation} from '../../services/animal/AnimalApi'
import { AnimalServiceImplementation } from "../../../domain/interactors/animal/GetAnimalsUseCase"
import { Animal } from "../../../domain/entity/animal/Animal"

const animalRepository = new AnimalRepositoryImplementation()
const animalService = new AnimalServiceImplementation(animalRepository)

export const refreshList =  async (dispatch: any) => {
    dispatch({ type: LIST_LOAD_REQUEST })
    try {
        const animals = await animalService.GetAnimals()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: animals })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}
export const createAnimal = ( dispatch: any, animal : Animal)=>{  
    dispatch({ type: CREATE_REQUEST })
    try {
        let response = {}
        animalService.CreateAnimal(animal).then( res => response = res )  
        return () => { dispatch({ type: CREATE_SUCCESS, payload: response })}
    } catch (error) {
        return () => { dispatch({ type: CREATE_FAILURE, error })}
    }
}
export const editAnimal = ( dispatch: any, animal : Animal)=>{  
    dispatch({ type: EDIT_REQUEST })
    try {
        let response = {}
        animalService.EditAnimal(animal).then( res => response = res )
        
        return () => { dispatch({ type: EDIT_SUCCESS, payload: response })}
    } catch (error) {
        return () => { dispatch({ type: EDIT_FAILURE, error })}
    }
    
}

export const findAnimal =  (dispatch: any , id : any) =>{
    dispatch({ type: FIND_REQUEST})
    return async () =>{
        try {
            let animal =  await animalService.FindAnimal(id)
            dispatch({ type: FIND_SUCCESS, payload: animal })
        } catch (error) {
            dispatch({ type: FIND_FAILURE, error })
        }
       
    }
   
}

