window.addEventListener('load', () => {
    fetchMatch();
});



/*
//put match data in the form of an array!!!
async function fetchMatch() {
    const res = await fetch(matchurl) 
    const json = await res.json();  // array will be fetched and json will hold it

    const main = document.querySelector('main');

    //iterate thew all the json data
    json.matches.forEach(#match => {
        const el = document.createElement('match-history');
        el.match = match; 
        main.appendChild(el); // elements will be passed down to <main>
    })
}
*/