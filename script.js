document.addEventListener("DOMContentLoaded", () => {

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    const charactersContainer = document.getElementById('characters');
    
    characters.forEach(character => {
      const characterCard = `
        <div class="col">
          <div class="card">
            <img src="${character.image}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Status: ${character.status}</p>
              <p class="card-text">Species: ${character.species}</p>
            </div>
          </div>
        </div>
      `;
      charactersContainer.innerHTML += characterCard;
    });
  })
  .catch(error => console.error('Error al hacer fetch', error));

    // Función para cargar la página
    getCharacters();
});
