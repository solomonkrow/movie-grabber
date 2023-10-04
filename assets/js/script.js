
var omdbKey = "dcd25d25"
var tmdKey = "91ce5d26720f6e04f0cc120d15c7cd71"


var button = document.getElementById("search-button")
var search = document.getElementById("search-input")
var displayPoster = document.getElementById("display-poster")
var displayTitle = document.getElementById("display-title")
var displayDescription = document.getElementById("display-description")

// var createWatchlistInput = document.getElementById("create-watchlist-input")
// var createWatchlistButton = document.getElementById("create-watchlist-button")

// createWatchlistButton.addEventListener("click", addWatchlist)

// function addWatchlist() {
// localStorage.setItem("watchlist", JSON.stringify(createWatchlistInput))
// }

function generateMovieCards(data) {
     for (let i = 0; i < 10; i++){          
        movieTitle = data[i].title
        movieInfo = data[i].overview
        moviePoster = data[i].poster_path
        var card = document.createElement("li")
        var newTitle = document.createElement("h4")
        newTitle.textContent = movieTitle
        card.append(newTitle)
        var newDescription = document.createElement("p")
        newDescription.textContent = movieInfo
        card.append(newDescription)
        var cardContainer = document.getElementById("movie-info")
        cardContainer.append(card)
        var dropdown = document.createElement("select")
        card.append(dropdown)
        var addButton = document.createElement("button")
        addButton.textContent = "Add to selected watchlist"
        addButton.setAttribute("class", "button is-rounded ml-2")
        card.append(addButton)
        //Can edit CSS of movie cards when they are created here. Replace "style" with "class" or "id", and padding with the classes or ids you want to add
        card.setAttribute("style", "padding:15px")
    }
}


function fetchSpecificMovie() {
    var userInput = search.value.trim()
    console.log(userInput);
    fetch('https://api.themoviedb.org/3/search/movie?query=' + userInput + '&api_key=91ce5d26720f6e04f0cc120d15c7cd71')
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
                generateMovieCards(data.results)
        })
}


var button = document.addEventListener("click", fetchSpecificMovie)

// KEEP THIS STARTING NOW
var searchBtn = document.querySelector("button")
// var inputBox = document.getElementById("input")
var movieInfo = document.getElementById("movie-info")

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var searchInput = search.value.trim();

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
      card.setAttribute("class", "column is-full")
      var div2 = document.createElement("div")
      div2.setAttribute("class", "card is-horizontal")
      var cardDiv = document.createElement("div")
      cardDiv.setAttribute("class", "card-image")
      var poster = document.createElement("img")
      var stackedDiv = document.createElement("div")
      stackedDiv.setAttribute("class", "card-stacked")
      var title = document.createElement("h3")
      var hr = document.createElement("hr")
      var director = document.createElement("p")
      var description = document.createElement("p")
      var genres = document.createElement("p")
      var rating = document.createElement("p")

      title.textContent = data.Title + " (" + data.Year + ")"
      director.textContent = "Director: " + data.Director
      poster.setAttribute("src", data.Poster)
      description.textContent = "Overview: " + data.Plot
      genres.textContent = "Genres: " + data.Genre
      rating.textContent = "Rating: " + data.Rated
      
      console.log(title)
        console.log(poster)
        console.log(description)
        console.log(genres);

        title.append(hr)
        stackedDiv.append(title, director, genres, rating, description)
        cardDiv.append(poster)
        div2.append(cardDiv)
        div2.append(stackedDiv)
        card.append(div2)
        movieInfo.appendChild(card)
    } ) }
// END OF KEEP THIS