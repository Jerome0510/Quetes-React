
import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from 'react'

const pokemonList = [
{
  name : "Bulbizard",
  image :"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
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
              <PokemonCard name = {pokemon.name} image = {pokemon.image}/>
              <button type="button" onClick={() => setPokemonName("Bulbizard")}>Bulbizard</button>
              <button type="button" onClick={() => setPokemonName("Mew")}>Mew</button>
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
 
 
 
 
