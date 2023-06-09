import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listarPokemons, nextUrl, prevUrl } from '../actions/pokemonsActions'
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Card } from './Card';
import { ContainerWrap, Rh3 } from '../styles/styles';
import pokemon from '../assets/pokemon.png'

export const Pokemons = () => {
  const statePokemon = useSelector(state => state.pokemons)
  const stateFavorite = useSelector(state => state.favorite)
  const dispatch = useDispatch()

  const [pokemons, setPokemons] = useState(statePokemon)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9")
  const [pending, setPending] = useState(true)
  const [ search, setSearch] = useState("")
  const fullPokemons = useFetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").data

  let { data, isPending, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      dispatch(listarPokemons(data));      
      setPending(isPending);
      setPokemons(data)
    }
  }, [data]) 

  const handleChange = async (event) => {
    setSearch(event.target.value)
    const pokemonsFiltered = fullPokemons.results.filter((pokemon)=> {
     return pokemon.name.includes(search)
    })
      dispatch(listarPokemons({
        ...statePokemon,
        results: pokemonsFiltered
      }))
  }

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
      <Rh3><img width='200px' src={pokemon} alt="" /></Rh3>
      <ContainerWrap>
        <button onClick={() => prevList(statePokemon.previous)}>Anterior</button>
        <button onClick={() => nextList(statePokemon.next)}>Siguientes</button>
      </ContainerWrap>
      <ContainerWrap>
      <input type="text" value={search} placeholder='Buscar Pokemon' onChange={handleChange} />
      </ContainerWrap>
      <nav>
      {stateFavorite.lenght > 0 ? stateFavorite.map((pokemon) =>{
        console.log(pokemon.name)
         return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      }) : ""
      }
      </nav>
      <ContainerWrap>
      {!pending ?
        statePokemon.results?.map((pokemon, index) => {
          if (index < 10 ) {
            return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} /> 
          }
        })
        : ""
        }
         </ContainerWrap>
        <ContainerWrap>
        <button onClick={() => prevList(pokemons.previous)}>Anterior</button>
        <button onClick={() => nextList(pokemons.next)}>Siguientes</button>
      </ContainerWrap>
    </div>
  )
}
