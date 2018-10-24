document.getElementById('fetchbutton').addEventListener('click', fetchPokemon);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
function total(moves){
    let count = 0
    for(let i in moves){
        count+=1
    }
    return count
}

//fetch request for json data and will pass json data into elements
function fetchPokemon(){
    rand = getRandomInt(1,721)
    const myRequest = 'https://pokeapi.co/api/v2/pokemon/'+ rand + '/' 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let id_number = data.id
        let type1 = data.types[0].type.name
        let type2 = ""
        if(data.types.length == 2) {
            type2 = data.types[1].type.name
        }
        let height = data.height
        let weight = data.weight
        let moves = total(data.moves)
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
                <h5> [${type1}] [${type2}] </h5>
                <h5> ID: ${id_number} </h5>
                <h5> Height ${height} </h5>
                <h5> Weight: ${weight} </h5>
                <h5> Total # of learnable moves ${moves} </h5>
            `;
        document.getElementById('fact-box').innerHTML = output;
    })
    console.log("button was clicked")
        
};


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