class LcsMatchHistory extends HTMLElement {
    constructor() {
        super()
        //shadow root used to encapsulate styling
        const shadow = this.attachShadow({ mode: 'open' })
    }
    /*
    func setMatch(match) {
    }
    */
}

customElements.define('lcs-match', LcsMatchHistory)