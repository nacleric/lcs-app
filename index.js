document.getElementById('fetchbutton').addEventListener('click', fetchPokemon);
/*
//selects the parent element and creates the children elements
function initElement(x){
    const factWindow = document.querySelector('fact-window')
    const pokeType = document.createElement('p')
    const pokeWeight = document.createElement('p')
    factWindow.appendChild(pokeType)
    factWindow.appendChild(pokeWeight)
    pokeType.textContent = 'Type:' 
    pokeWeight.textContent = 'Weight:' + x["weight"]
};
*/

//fetch request for json data and will pass json data into elements
function fetchPokemon(){
    const myRequest = 'https://pokeapi.co/api/v2/pokemon/1/'
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let name = data.forms[0].name
        let weight = data.weight
        let output = `
            <h2> ${name} </h2>
            <p> Weight: ${weight} </p>
        `;
        document.getElementById('fact-box').innerHTML = output;
    })
    console.log("button was clicked")
        
};


