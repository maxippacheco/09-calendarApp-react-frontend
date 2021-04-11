import {types} from '../types/types'

const initialState = {
    modalOpen: false
}

export const uiReducer = (state  = initialState, action) =>{


    switch (action.type) {
        case types.uiOpenModal:
            return{
                //no mutamos el state
                ...state,
                modalOpen:true
            }
        
        case types.uiCloseModal:
            return{
                ...state,
                modalOpen: false
            }
        
            
    
        default:
            return state;
    }

}