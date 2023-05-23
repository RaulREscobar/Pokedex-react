import { ADD_FAVORITE, REMOVE_FAVORITE } from "../types";

export const addFavorite = (data) => ({type: ADD_FAVORITE, payload: data});
export const removeFavorite = (data) => ({type: REMOVE_FAVORITE, payload: data});