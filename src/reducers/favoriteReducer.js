import { ADD_FAVORITE, REMOVE_FAVORITE } from "../types";

const initialState = [];

export default function favotiteReducer( state = initialState, action){

    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.payload]
            
        case REMOVE_FAVORITE:
            const newState = state.filter(pakemon => pakemon.name !== action.payload.name)
            return newState   

        default:
            return state;
    }

}