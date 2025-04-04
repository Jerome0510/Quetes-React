
import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from 'react'

const pokemonList = [
{
  name : "Bulbizard",
  image :"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
},
{
  name: "salameche",
  image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
},
{
  name: "carapuce",
  image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
},
{
  name: "pikachu",
  image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
},
{
  name : "Mew",
  image :"",
}
 ]
 
 function App(){
   const [pokemonName, setPokemonName] = useState("Bulbizard")
   const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName)
   
   if (pokemon == null) {
     throw new Error("Invalid pokemon name")
    }
    return (
      <div>
        <nav>
            <PokemonCard name = {pokemon.name} image = {pokemon.image}/>
        </nav>
        <nav>
            {pokemonList.map ((pokemaune) =>(
            <button key={pokemaune.name} onClick={()=> setPokemonName(pokemaune.name)}>{pokemaune.name}</button>
              ))}
        </nav> 
      </div>
        )
      }
          

//   function App() {  return (
//     <div>
//       <PokemonCard name = "bulbizard" 
//                    image= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
//        />
//        <PokemonCard name = "mew"/>
//     </div>
//   )
//  } 
  
export default App
 
 
 
 
