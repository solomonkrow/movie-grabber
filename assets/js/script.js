// OMDB:
// Data request - http://www.omdbapi.com/?apikey=[yourkey]&
// Poster request - http://img.omdbapi.com/?apikey=[yourkey]&

var omdbKey = "dcd25d25"

// The Movie Database:
// Example data request - https://api.themoviedb.org/3/search/movie?query={search}&api_key={key}
var tmdKey = "91ce5d26720f6e04f0cc120d15c7cd71"

var searchBtn = document.querySelector("button")
var inputBox = document.getElementById("input")
var movieInfo = document.getElementById("movie-info")

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var searchInput = inputBox.value.trim();

    findMovie(searchInput)
})

function findMovie(searchInput) {
    var omdbUrl = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + searchInput;
    fetch(omdbUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data.Title, data.Plot, data.Genre, data.Poster)   
        //need to make this a loop
      var card = document.createElement("div")
      var title = document.createElement("h3")
      var poster = document.createElement("img")
      var description = document.createElement("p")
      var genres = document.createElement("p")

      card.setAttribute("class", "column is-full")
      title.textContent = data.Title
      poster.setAttribute("src", data.Poster)
      description.textContent = data.Plot
      genres.textContent = data.Genre
      
      console.log(title)
        console.log(poster)
        console.log(description)
        console.log(genres);

        card.append(poster, title, description, genres)
        movieInfo.appendChild(card)
    } ) }
