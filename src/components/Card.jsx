import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import close from '../assets/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { removePokemon } from '../actions/pokemonsActions'
import { CardContainer, Container, ContentText, R_h2, Text, Spinner, CardImage } from '../styles/styles'

export const Card = ({ name, url }) => {

  const stateFavorite = useSelector(state => state.favorite)
  const dispatch = useDispatch()

  let { data, isPending, error } = useFetch(url)

  const addFavoritePokemon = (pokemon) => {
    dispatch(removePokemon(pokemon))
  }

  return (
    <Container>
      <CardContainer>
        <ContentText>
          <R_h2>{name}</R_h2>
          <img className='pointer' onClick={() => addFavoritePokemon(name)} src={close} alt="" width="25px" />
        </ContentText>
        {!isPending ?
          <CardImage>
            <img src={data.sprites.front_default} alt="" width="100px" height="150px" />
            <ContentText>
              <Text>Weight :</Text>
              <Text>{data.weight}</Text>
            </ContentText>
            <ContentText>
              <Text>Abilities : </Text>
              {data.abilities.map((ability) => {
                return <Text key={ability.ability.name}> {ability.ability.name}</Text>
              })}
            </ContentText>
          </CardImage>
          : <Spinner></Spinner>
        }
      </CardContainer>

      {
        stateFavorite.map((favorite) => {
          <CardContainer>
            <ContentText>
              <R_h2>{favorite.name}</R_h2>
              <img onClick={() => addFavorite(data)} src={""} alt="" width="20px" />
            </ContentText>
            <CardImage>
              <img src={""} alt="" width="200px" height="150px" />
              <ContentText>
                <Text>Weight :</Text>
                <Text>{favorite.weight}</Text>
              </ContentText>
              <ContentText>
                <Text>Abilities : </Text>
                {favorite.abilities.map((ability) => {
                  return <Text> {ability.ability.name}</Text>
                })}
              </ContentText>
            </CardImage>
          </CardContainer>
        })
      }

    </Container>

  )
}
