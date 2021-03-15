

import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE, RefreshAnimalListSuccess, CreateAnimalSucces, CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE, FIND_REQUEST, FIND_SUCCESS, FIND_FAILURE, EDIT_FAILURE, EDIT_REQUEST, EDIT_SUCCESS} from "./Animal.types"

const initialState = {
    loading: false,
    animals: [],
    animal : {}
}

function animals(

    state = initialState, 
   
    action: { type: string; 
        payload:
         RefreshAnimalListSuccess | 
         CreateAnimalSucces }
    
    ) {
    switch (action.type) {
        
        // list of animals
        case LIST_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LIST_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case LIST_LOAD_SUCCESS:
            return {
                ...state,
                animals: action.payload,
                loading: false,
            }
         
        // add animal    
        case CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            }    

        case CREATE_SUCCESS:
            return {
                ...state,
                animal: action.payload,
                loading: false,
            }

        case CREATE_FAILURE:
            return {
                ...state,
                loading: false,
            }  
            
        // add animal    
        case EDIT_REQUEST:
            return {
                ...state,
                loading: true,
            }    

        case EDIT_SUCCESS:
            return {
                ...state,
                animal: action.payload,
                loading: false,
            }

        case EDIT_FAILURE:
            return {
                ...state,
                loading: false,
            }      
      
        // find animal    
        case FIND_REQUEST:
            return initialState 

        case FIND_SUCCESS:
            return {
                ...state,
                animal: action.payload,
                loading: false,
            }

        case FIND_FAILURE:
            return {
                ...state,
                loading: false,
            }      
            
        default:
            return state
    }

}
export default animals

