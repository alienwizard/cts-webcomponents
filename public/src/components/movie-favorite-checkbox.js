/*
* Exempel på ett customElement som bygger vidare på ett annat element
*
* */

import request from "../utils/request.js";

class MovieFavoriteSelect extends HTMLInputElement {
    connectedCallback() {
        this.onchange = () => {
            this.setAttribute("favorite", this.value);
        };
    }

    static get observedAttributes() {
        return ["favorite"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === "favorite") {
            request("/api/favorite-movie", {method: "POST", body: {imdbID: newValue}}).then((data) => {

            });
        }
    }
}



customElements.define("movie-favorite-select", MovieFavoriteSelect, {extends: "input"});
