import axios from "axios";

const getPokemonData = async (pokemonName) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

getPokemonData('pikachu')
  .then(pokemonData => {
    console.log(pokemonData);
  });