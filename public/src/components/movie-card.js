class MovieCard extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById("card");
        const templateContent = template.content;

        // Attaches the shadow root and returns a refernce to it
        const shadowRoot = this.attachShadow({mode: "open"});

        // Append the content of the template to the shadowRoot
        shadowRoot.appendChild(templateContent.cloneNode(true));

        this.boundLike = () => this.like();
    }

    static get observedAttributes() {
        return ["poster", "title", "favorite", "year", "likes"];
    }

    connectedCallback() {
        this.setAttribute('likes', '0');
        const likeButton = this.shadowRoot.getElementById('like-button');
        likeButton.addEventListener('click', this.boundLike);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
        case "title":
            this.shadowRoot.querySelector("#movie-title").innerHTML = newValue;
            break;
        case "poster":
            this.shadowRoot.querySelector("#movie-poster").src = newValue;
            break;
        case "year":
            this.shadowRoot.querySelector("#movie-year").innerHTML = newValue;
            break;
        case "imdbID":
            this.shadowRoot.querySelector("#movie-year").innerHTML = newValue;
            break;
        case "likes":
            this.shadowRoot.querySelector("#movie-likes").innerHTML = newValue;
            break;

        }
    }

    like() {
        let likes = Number.parseInt(this.getAttribute('likes'));
        likes = likes + 1;
        this.setAttribute('likes', likes.toString());
    }
}



customElements.define("movie-card", MovieCard);
