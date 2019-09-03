class MovieList extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById("list");
        const templateContent = template.content;

        this.attachShadow({mode: "open"}).appendChild(templateContent.cloneNode(true));

        this.boundUpdateMovieList = this.updateMovieList.bind(this);
    }

    connectedCallback() {
        window.addEventListener("fetchedMovies", this.boundUpdateMovieList);
    }

    disconnectedCallback() {
        window.removeEventListener('fetchedMovies', this.boundUpdateMovieList);
    }

    updateMovieList(event) {
        const {detail: movies} = event;

        this.shadowRoot.childNodes.forEach((node) => this.shadowRoot.removeChild(node));

        if (movies) {
            movies.forEach((movie) => {
                const movieCard = document.createElement("movie-card");
                movieCard.setAttribute("title", movie.Title);
                movieCard.setAttribute("poster", movie.Poster);
                movieCard.setAttribute("imdbID", movie.imdbID);
                movieCard.setAttribute("year", movie.Year);
                this.shadowRoot.appendChild(movieCard);
            });
        }
    }
}

customElements.define("movie-list", MovieList);
