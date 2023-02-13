import fetch from 'node-fetch';
import fs from 'fs';

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

let pokename = 'eevee';
let pokenames = [
  'bulbasaur',
  'venusaur',
  'charmander',
  'eevee'
]

pokenames.forEach(name => {
  getPokemonData(name)
  .then(pokemonData => {
    if (pokemonData) {
      fs.writeFileSync(`./data/${name}.json`, JSON.stringify(pokemonData));
      console.log('Data written to file.');
    }
  });
});

// getPokemonData('pikachu')
//   .then(pokemonData => {
//     if (pokemonData) {
//       fs.writeFileSync(`./data/${pokename}.json`, JSON.stringify(pokemonData));
//       console.log('Data written to file.');
//     }
//   });
