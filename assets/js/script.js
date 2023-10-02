// OMDB:
// Data request - http://www.omdbapi.com/?apikey=[yourkey]&
// Poster request - http://img.omdbapi.com/?apikey=[yourkey]&

var omdbKey = "dcd25d25"

// The Movie Database:
// Example data request - https://api.themoviedb.org/3/search/movie?query={search}&api_key={key}
var tmdKey = "91ce5d26720f6e04f0cc120d15c7cd71"

function fetchMovieDetails() {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch('https://api.themoviedb.org/3/authentication', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}
console.log(fetchMovieDetails);
// function fetchSpecificMovie() {

// }


// var button = document.addEventListener ("click", fetchSpecificMovie)

fetchMovieDetails()