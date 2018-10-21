class FactButton extends HTMLElement {
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
// class CurrentWeather is passed into 'current-weather'. turns into custom element 
customElements.define('fact-button', FactButton)
