import CardPokemon from "./CardPokemon";
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const CardList = ({pokemons, offsets}) =>{
    // eslint-disable-next-line react/prop-types
    const pokemonsWithSprites = pokemons.map((pokemon,i) =>{
        return {
          ...pokemon,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offsets + i +1}.png`
        }
        

      })

      console.log(pokemonsWithSprites)
    return <>
        {}
        <div className="p-10 flex flex-col justify-center items-center xl:grid xl:grid-cols-5 gap-16">
        {
        pokemonsWithSprites.map((pokemon, index) => (
        <div key={index}>
            
           <CardPokemon url= {pokemon.url} name={pokemon.name} sprite={pokemon.sprite}></CardPokemon>
        </div>
      ))}
                
        </div>
    </>

}

export default CardList;