import {css, LitElement} from "lit-element";
import {html} from "lit-html";
import './movie-header';
import './movie-list';
import '../styles/globalStyles.css'
import request from "../../../../src/utils/request";

class MovieFavoritesApp extends LitElement {
    static get properties() {
        return {
            favoriteMovies: {type: Array}
        }
    }

    constructor() {
        super();

        this.favoriteMovies = [];
    }

    connectedCallback() {
        super.connectedCallback();
        request('/api/movies/favorites').then((data) => {
            this.favoriteMovies = data;
        });
    }

    // Global app styles go here
    static get styles() {
        return css`
        h1 {
    font-size: 60px;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    body {
        background: black;
        color: white;
        margin: 0;
    }
    
    main {
        padding: 20px;
        max-width: 87.4375em;
        margin: auto;
    }
    
    .header__navigation {
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    
    .header__navigation li {
        margin-right: 10px;
    }
    
    .header__navigation a {
        color: white;
        text-decoration: none;
        font-size: 1.2em;
    }
    
    .header__logo {
        margin: 0px;
    }
    
    .header__navigation a.header__link--active {
        text-decoration: underline;
    }

        `;
    }

    render() {
        return html`
            <movie-header>
                <h1 class="header__logo" slot="logo">Movies</h1>
                <nav slot="nav">
                  <ul class="header__navigation">
                    <li><a class="header__link--active" href="/favorite-movies">Favorite movies</a></li>
                    <li><a href="/movie-news">News</a>
                  </ul>
                </nav>
            </movie-header>
            <main>
                <h1>Favorite movies</h1>
                <movie-list .movies=${this.favoriteMovies}></movie-list>
            </main>
        `;
    }
}

customElements.define("movie-favorites-app", MovieFavoritesApp);
