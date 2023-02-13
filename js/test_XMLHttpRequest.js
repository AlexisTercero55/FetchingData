const traerDatosDePokeAPI = (pokemon) => 
{
  return new Promise((resolve, reject) => 
  {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(new Error(`Error al traer los datos de ${pokemon}: ${this.statusText}`));
      }
    };
    xhr.onerror = function() {
      reject(new Error(`Error de red al traer los datos de ${pokemon}`));
    };
    xhr.send();

  });
};
  
traerDatosDePokeAPI('pikachu')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });