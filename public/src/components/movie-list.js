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
        window.removeEventListener('fetchedMoview', this.boundUpdateMovieList);
    }

    updateMovieList(event) {
        const {detail: movies} = event;
        const ulElement = this.shadowRoot.querySelector("div");

        ulElement.childNodes.forEach((node) => ulElement.removeChild(node));

        if (movies) {
            movies.forEach((movie) => {
                const movieCard = document.createElement("movie-card");
                movieCard.setAttribute("title", movie.Title);
                movieCard.setAttribute("poster", movie.Poster);
                movieCard.setAttribute("imdbID", movie.imdbID);
                movieCard.setAttribute("year", movie.Year);
                ulElement.appendChild(movieCard);
            });
        }
    }
}

customElements.define("movie-list", MovieList);
