import { PREV_URL, NEXT_URL, READ_POKEMONS, ADD_FAVORITE, ADD_POKEMON, REMOVE_POKEMON } from "../types";

const initialState = {};

export default function pokemonsReducer(state = initialState, action) {
    switch (action.type) {
        case READ_POKEMONS:
            return state  = action.payload
        case NEXT_URL:
            return {
                ...state,
                next: action.payload
            }
        case PREV_URL:
            return {
                ...state,
                previous: action.payload
            }
        case ADD_POKEMON:
            return {
                ...state,
                results : [ ...state.results, action.payload]
            }
        case REMOVE_POKEMON:
            return {
                ...state,
                results: state.results.filter((pokemon) => pokemon.name !== action.payload)
            }
        default: 
            return state
    }
}