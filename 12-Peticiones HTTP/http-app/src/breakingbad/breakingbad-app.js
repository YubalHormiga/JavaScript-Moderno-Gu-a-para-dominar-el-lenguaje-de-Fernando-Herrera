/**
 * @returns {Promise<Object>} // character information
 */
const fetchCharacter = async() => {
    let randomNumb = Math.floor(Math.random() * 20)
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results[randomNumb];
}
 
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const rickAndMortyApp = async( element ) => {
 
    document.querySelector('#app-tittle').innerHTML = 'Rick and Morty App'
    element.innerHTML = 'Loading...'
    
    const data = await fetchCharacter();
    const characterName = document.createElement('h2');
    const characterSpecie = document.createElement('h3');
    const nextCharacterButton = document.createElement('button');
    nextCharacterButton.innerHTML = 'Next Character';
 
    const renderCharacter = ( data ) => {
        characterName.innerHTML = data.name;
        characterSpecie.innerHTML = data.species;
        element.replaceChildren( characterName, characterSpecie, nextCharacterButton);
    }
    
    // Listener
    nextCharacterButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        setTimeout(async() => {
            const character = await fetchCharacter();
            renderCharacter( character );
        }, 500);
    })
 
    fetchCharacter()
        .then( renderCharacter );
}
