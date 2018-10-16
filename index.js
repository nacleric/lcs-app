window.addEventListener('load', () => {
    fetchMatch();
});



/*
async function fetchMatch() {
    const res = await fetch(matchurl)
    const json = await res.json();

    const main = document.querySelector(foobar);

    json.matches.forEach(#match => {
        const el = document.createElement('match-history');
        el.match = match;
        main.appendChild(el);
    })
}
*/