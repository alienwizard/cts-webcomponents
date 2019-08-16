class MovieArticle extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById("article");
        const templateContent = template.content;

        this.attachShadow({mode: "open"}).appendChild(templateContent.cloneNode(true));
    }
}



customElements.define("movie-article", MovieArticle);
