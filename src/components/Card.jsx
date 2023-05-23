import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { styled } from 'styled-components'
import favorite from '../assets/favorite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../actions/favoriteActions'
import { addPokemon, removePokemon } from '../actions/pokemonsActions'

export const Card = ({ name, url }) => {

  const borderRadius = 14

  const Card = styled.div`
background: white;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
border-radius: ${borderRadius + 5}px;
position: relative;
text-align: center;
box-shadow: -1px 15px 30px -12px #ffff;
z-index: 9999; 
color: black;

&:hover{
  transform: translateX(10px) scale(1.05);
  transition: all 0.3s ease;
}
`
  const R_h2 = styled.h2`
font-size: 24px;
padding: 10px 10px 0 10px;
  `

  const CardImage = styled.div`
  position: relative;
  margin-bottom: 35px;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  `
  const ContentText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
`
  const Text = styled.p`
color: "0000.7";
`

  const Container = styled.div`
  display: flex;
`

  const stateFavorite = useSelector(state => state.favorite)
  const dispatch = useDispatch()


  let { data, isPending, error } = useFetch(url)
  //if (data) { console.log(data) }

  const addFavorite = (pokemon) => {
    dispatch(removePokemon(pokemon.name))
    dispatch(addFavorite(pokemon))
  }

  useEffect(() => {

  }, [])


  return (
    <Container>
      <Card>
        <ContentText>
          <R_h2>{name}</R_h2>
          <img onClick={() => addFavorite(data)} src={favorite} alt="" width="20px" />
        </ContentText>
        {!isPending ?
          <CardImage>
            <img src={data.sprites.front_default} alt="" width="200px" height="150px" />
            <ContentText>
              <Text>Weight :</Text>
              <Text>{data.weight}</Text>
            </ContentText>
            <ContentText>
              <Text>Abilities : </Text>
              {data.abilities.map((ability) => {
                return <Text> {ability.ability.name}</Text>
              })}
            </ContentText>
          </CardImage>
          : "" //Poner spinner de carga
        }

      </Card>

      {
        stateFavorite.map((favorite) => {
          <Card>
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
          </Card>
        })
      }

    </Container>

  )
}
