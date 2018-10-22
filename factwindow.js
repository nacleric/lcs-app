class FactWindow extends HTMLElement {
    constructor() {
        super()
        //shadow root used to encapsulate styling
        this.root = this.attachShadow({ mode: 'open' })
    }
    this.root.innerHTML = `
        <style></style>
        <h1>herro world</h1>
    `;
// class FactWindow is passed into 'fact-window'. turns into custom element <fact-window>
customElements.define('fact-window', FactWindow)
