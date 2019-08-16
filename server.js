const chokidar = require('chokidar');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const {join} = require('path');

const KEY = "39d59e43";

app.use(express.static('webapp'));

let serverRestarted = true;

io.on('connection', () => {
   console.log('user connected');

   if (serverRestarted === true) {
      io.emit("browserReload");
      serverRestarted = false;
   }

   const watcher = chokidar.watch(join(__dirname,  'webapp'), {persistent: true});

   watcher.on('change', (eventType, filename) => {
      console.log('File change reloading browser');
      io.emit("browserReload");
   })

});

server.listen(3000, () => {
   console.log('App listening on port 3000');
});
