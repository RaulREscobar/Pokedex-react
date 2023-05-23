import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from '../reducers/pokemonsReducer';
import favotiteReducer from '../reducers/favoriteReducer';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    favorite: favotiteReducer,
  },
  preloadedState: {
    pokemons:
      {
      count: "",
      next: "",
      previous: "",
      results: [],
    },
    favotite:[],
  }
})

//store.subscribe(() => console.log(store))

export default store;



