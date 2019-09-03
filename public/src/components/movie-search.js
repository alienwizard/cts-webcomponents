/*
* Exempel på ett customElement som bygger vidare på ett annat element
*
* */

import request from "../utils/request.js";

class MovieSearch extends HTMLInputElement {
    connectedCallback() {
        this.oninput = () => {
            this.setAttribute("search", this.value);
        };
    }

    static get observedAttributes() {
        return ["search"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === "search") {
            request(`https://www.omdbapi.com/?s=${newValue}&apikey=39d59e43&type=movie`).then((data) => {
                window.dispatchEvent(new CustomEvent("fetchedMovies", {detail: data.Search}));
            });
        }
    }
}



customElements.define("movie-search", MovieSearch, {extends: "input"});
