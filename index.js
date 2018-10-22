import '/factwindow.js';
document.getElementById('fetchbutton').addEventListener('click', fetchPokemon);

//selects the parent element and creates the children elements
function initElement(){
    const factWindow = document.querySelector('fact-window')
    const pokeType = document.createElement('p')
    const pokeWeight = document.createElement('p')
    factWindow.appendChild(pokeType)
    factWindow.appendChild(pokeWeight)
    pokeType.textContent = 'Type:'
    pokeWeight.textContent = 'Weight:'
}

//fetch request for json data and will pass json data into elements
function fetchPokemon(){
    const myRequest = 'https://pokeapi.co/api/v2/pokemon/1/'
    fetch(myRequest)
        .then(function(response) {
            return response.json()     
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
        initElement()
};


