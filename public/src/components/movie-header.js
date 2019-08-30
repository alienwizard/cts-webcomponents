class MovieHeader extends HTMLElement {
    constructor() {
        super();

        const template = document.querySelector('template#header');
        const templateContent = template.content;

        this.attachShadow({mode: "open"}).appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('movie-header', MovieHeader);
