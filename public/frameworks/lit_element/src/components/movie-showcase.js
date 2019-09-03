import {css, LitElement} from "lit-element";
import {html} from "lit-html";

class MovieShowcase extends LitElement {
    static get properties() {
        return {
            movie: {type: Object},
            likes: {type: Number}
        };
    }

    static get styles() {
        return css`
            :host {
                display: grid;
                grid-template-rows: 1fr auto;
                width: 100%;
            }

            img {
            width: 100%;
            height: auto;
            }
        `;
    }

    constructor(props) {
        super(props);

        this.likes = 0;
    }

    like() {
        this.likes++;
    }

    render() {
        const {title, cover} = this.movie;
        return html`
            <div class="movie-showcase__wrapper">
                <img src="${cover}"/>
                <div class="movie-showcase__body">
                    <h2>${title}</h2>
                </div>
                <div class="movie-showcase__like-bar">
                    <span class="movie-showcase__likes">Current likes: ${this.likes}</span>
                    <button @click="${this.like}">Like this movie <3</button>
                </div>
            </div>
        `;
    }
}

customElements.define('movie-showcase', MovieShowcase);
