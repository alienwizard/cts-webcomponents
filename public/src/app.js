import "./components/movie-list.js";
import "./components/movie-card.js";
import "./components/movie-title.js";
import "./components/movie-search.js";
import "./components/movie-article.js";

import request from "./utils/request.js";

window.store = {
    movies: []
};

function getInitialData() {
    request("https://www.omdbapi.com/?s=lord%20of%20the%20rings&apikey=39d59e43&type=movie").then((data) => {
        window.store.movies = data.Search;
        window.dispatchEvent(new CustomEvent("fetchedMovies", {detail: window.store.movies}));
    });
}

getInitialData();

