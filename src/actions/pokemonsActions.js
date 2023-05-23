import {  ADD_POKEMON, NEXT_URL, PREV_URL, READ_POKEMONS, REMOVE_POKEMON } from "../types";

export const listarPokemons = (data) => ({ type: READ_POKEMONS, payload: data })
export const nextUrl = (url) => ({ type: NEXT_URL, payload: url });
export const prevUrl = (url) => ({ type: PREV_URL, payload: url });
export const addPokemon = (data) =>({ type: ADD_POKEMON, payload: data });
export const removePokemon = (name) => ({type: REMOVE_POKEMON, payload: name });
