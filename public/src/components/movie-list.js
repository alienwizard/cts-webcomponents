class MovieList extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById("list");
        const templateContent = template.content;

        // Attaches the shadow root and returns a refernce to it
        const shadowRoot = this.attachShadow({mode: "open"});

        // Append the content of the template to the shadowRoot
        shadowRoot.appendChild(templateContent.cloneNode(true));

        this.boundUpdateMovieList = this.updateMovieList.bind(this);
    }

    connectedCallback() {
        window.addEventListener("fetchedMovies", this.boundUpdateMovieList);
    }

    disconnectedCallback() {
        window.removeEventListener("fetchedMovies", this.boundUpdateMovieList);
    }

    updateMovieList(event) {
        const {detail: movies} = event;

        const listNode = this.shadowRoot.querySelector("ul");
        listNode.childNodes.forEach((node) => listNode.removeChild(node));

        if (movies) {
            movies.forEach((movie) => {
                const movieCard = document.createElement("movie-card");
                movieCard.setAttribute("title", movie.Title);
                movieCard.setAttribute("poster", movie.Poster);
                movieCard.setAttribute("imdbID", movie.imdbID);
                movieCard.setAttribute("year", movie.Year);
                listNode.appendChild(movieCard);
            });
        }
    }
}

customElements.define("movie-list", MovieList);
