class FactWindow extends HTMLElement {
    constructor() {
        super()
        //shadow root used to encapsulate styling
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = `
        `;
// class FactWindow is passed into 'fact-button'. turns into custom element <fact-window>
customElements.define('fact-window', FactWindow)
