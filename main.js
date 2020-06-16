window.onload = () => {
    getTrivia();
}

const getTrivia = () => {
    fetch('https://swapi.dev/api/films/')
    .then(resp => resp.json())
    .then(data => console.log(data))
}