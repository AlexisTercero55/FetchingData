const getPokemonData = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = await response.json();
      return pokemonData;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  getPokemonData('pikachu')
    .then(pokemonData => {
      console.log(pokemonData);
    });
  