export default (url, options) => fetch(url, options).then((response) => {
    if (response.ok) {
        return response.json();
    }
});
