/*
* Exempel på ett customElement som bygger vidare på ett annat element
*
* */

import request from "../utils/request.js";

class MovieSearch extends HTMLInputElement {
    connectedCallback() {
        this.oninput = () => {
            debugger;
            this.setAttribute('search', this.value)
        }
    }

    static get observedAttributes() {
        return ["search"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
            if (attrName === 'search') {
                debugger;
                request(`https://www.omdbapi.com/?s=${newValue}&apikey=39d59e43&type=movie`).then((data) => {
                    window.store.movies = data.Search;
                    window.dispatchEvent(new CustomEvent('fetchedMovies', {detail: window.store.movies}));
                })
        }
    }
}



customElements.define('movie-search', MovieSearch, {extends: 'input'});
