import {LitElement} from "lit-element";
import {html} from "lit-html";
import './movie-showcase'

class MovieList extends LitElement {
    static get properties() {
        return {
            movies: {type: Array}
        };
    }

    constructor() {
        super();

        this.movies = [];
    }


    render() {
        return html`
            <ul>
                ${this.movies.map((movie) => html`
                    <movie-showcase .movie=${movie}></movie-showcase>
                `)}
            </ul>
        `;
    }
}

customElements.define('movie-list', MovieList);
