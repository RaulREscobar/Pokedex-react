import { Provider } from 'react-redux'
import './App.css'

import { Pokemons } from './components/Pokemons'
import store from './store'

function App() {

  return (
    <Provider store={ store}>    
      <Pokemons />
    </Provider>
  )
}

export default App
