class MovieTitle extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('title');
        const templateContent = template.content;

        this.appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('movie-title', MovieTitle);
