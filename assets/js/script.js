// OMDB:
// Data request - http://www.omdbapi.com/?apikey=[yourkey]&
// Poster request - http://img.omdbapi.com/?apikey=[yourkey]&

var omdbKey = "dcd25d25"

// The Movie Database:
// Example data request - https://api.themoviedb.org/3/search/movie?query={search}&api_key={key}
var tmdKey = "91ce5d26720f6e04f0cc120d15c7cd71"

var button = document.getElementById("search-button")
var search = document.getElementById("search-input")

// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer 91ce5d26720f6e04f0cc120d15c7cd71'
//     }
// };



function generateMovieCards(data) {
     for (let i = 0; i < 20; i++){          
        movieTitle = data[i].title
        movieInfo = data[i].overview
        moviePoster = data[i].poster_path
        var newSection = document.createElement("section")
        document.appendChild
        var newTitle = document.createElement("h4")
        newTitle.textContent = movieTitle

        console.log(movieTitle);
    }
}


function fetchSpecificMovie() {
    var userInput = search.value.trim()
    fetch('https://api.themoviedb.org/3/search/movie?query=' + userInput + '&api_key=91ce5d26720f6e04f0cc120d15c7cd71')
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
                generateMovieCards(data.results)
        })
        .catch(err => console.error(err));
    

}


var button = document.addEventListener("click", fetchSpecificMovie)


// fetch('https://api.github.com/orgs/twitter/repos')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('Twitter Repositories: Names only \n----------');
//      for (var i = 0; i < data.length; i++) {
//       console.log(data[0].name);
//      }
//   });
