class MovieCard extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('card');
        const templateContent = template.content;

        this.attachShadow({mode: 'open'}).appendChild(templateContent.cloneNode(true));
    }
    static get observedAttributes() {
        return ["poster", "title"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case 'title':
                this.shadowRoot.querySelector('#movie-title').innerHTML = newValue;
                break;
            case 'poster':
                this.shadowRoot.querySelector("#movie-poster").src = newValue;
                break;
            case 'year':
                this.shadowRoot.querySelector("#movie-year").innerHTML = newValue;
                break;

        }
    }
}



customElements.define('movie-card', MovieCard);
