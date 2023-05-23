import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listarPokemons, nextUrl, prevUrl } from '../actions/pokemonsActions'
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Card } from './Card';
import { styled } from 'styled-components';

export const Pokemons = () => {


  const Rh3 = styled.h3`
  text-align: center;
  `

  const statePokemon = useSelector(state => state.pokemons)
  const stateFavorite = useSelector(state => state.favorite)
  const dispatch = useDispatch()

  const [pokemons, setPokemons] = useState(statePokemon)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
  const [pending, setPending] = useState(true)
  //const [ favorite, setFavorite ] = useState([])

  let { data, isPending, error } = useFetch(url);

/*   useEffect(()=>{
    setFavorite(stateFavorite)
  }, [favorite]) */

  useEffect(() => {
    if (data) {
      dispatch(listarPokemons(data));      
      setPending(isPending);
      setPokemons(data)
    }
  }, [data]) 

  function nextList(url) {
    dispatch(nextUrl(url))
    setUrl(url)
  }
  function prevList(url) {
    dispatch(prevUrl(url))
    setUrl(url)
  }

  return (
    <div>
      <Rh3>Pokemons</Rh3>
      <nav>
        <button onClick={() => prevList(statePokemon.previous)}>Anterior</button>
        <button onClick={() => nextList(statePokemon.next)}>Siguientes</button>
      </nav>
      <nav>
      {stateFavorite.lenght > 0 ? stateFavorite.map((pokemon) =>{
        console.log(pokemon.name)
         return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      }) : ""
      }
      </nav>
      {!pending ?
        statePokemon.results.map((pokemon) => {
          return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        })
        : "" //Poner spinner de carga
        }
        <nav>
        <button onClick={() => prevList(statePokemon.previous)}>Anterior</button>
        <button onClick={() => nextList(statePokemon.next)}>Siguientes</button>
      </nav>
    </div>
  )
}
