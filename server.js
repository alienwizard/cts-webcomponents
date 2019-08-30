const chokidar = require("chokidar");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const {join} = require("path");

const KEY = "39d59e43";

app.use(express.static("public"));

app.get("/api/movies/favorites", (req, res) => {
    const favoriteMovies = [
        {
            title: 'Seven Samurai',
            cover: 'img/seven_samurai.jpg',
            year: '1965'
        },
        {
            title: 'Hot Fuzz',
            cover: 'img/hot_fuzz.jpg',
            year: '2007'
        },
        {
            title: 'The Empire Strikes back',
            cover: 'img/empire_strikes_back.jpg',
            year: '1980'
        }
    ];

    res.send(favoriteMovies);
});

const public_files_url = join(__dirname, 'public');
const img_files_url = join(__dirname, 'resources', 'img');

app.get('/movie-news', (req, res) => {
   res.sendFile(join(public_files_url, "movie-news.html"));
});

app.post("/api/favorite-movie", (req, res) => {

});

app.get("/favorite-movies", (req, res) => {
    res.sendFile(join(public_files_url, "favorite-movies.html"));
});

app.get("/", (req, res) => {
   res.sendFile(join(public_files_url, "index.html"));
});

let serverRestarted = true;

io.on("connection", () => {
    console.log("user connected");

    if (serverRestarted === true) {
        io.emit("browserReload");
        serverRestarted = false;
    }

    const watcher = chokidar.watch(join(__dirname,  "public"), {persistent: true});

    watcher.on("change", (eventType, filename) => {
        console.log("File change reloading browser");
        io.emit("browserReload");
    });

});

server.listen(3000, () => {
    console.log("App listening on port 3000");
});
