const socket = io();
console.log('hello', socket);
socket.on("browserReload", () => {
    console.log('browserReload');
    document.location.reload(true);
});
