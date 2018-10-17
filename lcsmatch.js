class LcsMatchHistory extends HTMLElement {
    constructor() {
        super()
        //shadow root used to encapsulate styling
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = `
            <style>
                //add css here
            </style>
            <h3>Centered text</h3> 
            <div>
            </div>
            <p> hello world </p>
        `;
    }
    /*
    func setMatch(match) {
    }
    */
}
// class LcsMatchHistory is passed into 'lcs-match'. turns into custom element 
customElements.define('lcs-match', LcsMatchHistory)