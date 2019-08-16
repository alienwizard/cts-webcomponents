import {LitElement} from "lit-element";
import {html} from "lit-html";

class MovieFavorites extends LitElement {

    render() {
        return html`
            <h1>Favorite movies</h1>
        `;
    }
}

customElements.define("movie-favorites", MovieFavorites);
