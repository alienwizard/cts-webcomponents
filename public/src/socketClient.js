const socket = io();

socket.on("browserReload", () => {
    console.log('browserReload');
    document.location.reload(true);
});
