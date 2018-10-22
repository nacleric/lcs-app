document.getElementById('fetchbutton').addEventListener('click', fetchPokemon);
	
function fetchPokemon(){
    const myRequest = 'https://pokeapi.co/api/v2/pokemon/1/'
    fetch(myRequest)
        .then(function(response) {
            return response.json()     
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
        initiElement()
            

};

function initElement(){
    const main = document.querySelector('')
    const pokeType = document.createElement('p')
    const pokeWeight = document.createElement('p')
    main.appendChild(pokeType)
    main.appendChild(pokeWeight)
}

