import $ from "jquery";

const getPokemonData = (pokemonName) => {
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      type: 'GET',
      success: (pokemonData) => {
        console.log(pokemonData);
      },
      error: (error) => {
        console.error(error);
      }
    });
  };
  
  getPokemonData('pikachu');