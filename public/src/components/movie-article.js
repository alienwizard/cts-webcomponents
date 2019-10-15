class MovieArticle extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById("article");
        const templateContent = template.content;

        // Attaches the shadow root and returns a reference to it
        const shadowRoot = this.attachShadow({mode: "open"});

        // Append the content of the template to the shadowRoot
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}



customElements.define("movie-article", MovieArticle);
