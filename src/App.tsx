
import './App.css'
import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
    name: "Bulbizard",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    name: "mew",
    //imgSrc: "https://th.bing.com/th/id/R.05511006a68ef1f0932fb528472301d8?rik=wjUJvd2UiPAegg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f36600000%2fMew-pokemon-image-mew-pokemon-36642382-800-731.png&ehk=agviYc9S3StGrz0g9xkcekZCDW1ukNx5gFlOX1qxUPA%3d&risl=&pid=ImgRaw&r=0"
  },
];

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  )
} 

export default App
