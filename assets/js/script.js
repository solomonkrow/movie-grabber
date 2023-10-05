
var omdbKey = "dcd25d25"
var tmdKey = "91ce5d26720f6e04f0cc120d15c7cd71"


var button = document.getElementById("search-button")
var search = document.getElementById("search-input")
var displayPoster = document.getElementById("display-poster")
var displayTitle = document.getElementById("display-title")
var displayDescription = document.getElementById("display-description")

var searchBtn = document.querySelector("button")
var inputBox = document.getElementById("input")
var movieData = document.getElementById("movie-info")

// var createWatchlistInput = document.getElementById("create-watchlist-input")
// var createWatchlistButton = document.getElementById("create-watchlist-button")

// createWatchlistButton.addEventListener("click", addWatchlist)

// function addWatchlist() {
// localStorage.setItem("watchlist", JSON.stringify(createWatchlistInput))
// }

function generateMovieCards(moviebData) {
     for (let i = 0; i < 10; i++){  

        movieTitle = moviebData[i].title
        movieInfo = moviebData[i].overview
        moviePoster = moviebData[i].poster_path

        var movieData = document.getElementById("movie-info")

        var card = document.createElement("div")
        card.setAttribute("class", "column is-full card is-horizontal my-2")

        var cardDiv = document.createElement("div")
        cardDiv.setAttribute("class", "card-image")

        movieImg = document.createElement("img")
        movieImg.setAttribute("src","https://image.tmdb.org/t/p/original/"+ moviePoster)

        var stackedDiv = document.createElement("div")
        stackedDiv.setAttribute("class", "card-stacked")

        var newTitle = document.createElement("h3")
        
        
        var hr = document.createElement("hr")

        var newDescription = document.createElement("p")
        
        newTitle.textContent = movieTitle
        newDescription.textContent = "Overview: " + movieInfo
        /* var cardContainer = document.getElementById("movie-info")
        cardContainer.append(card)  */

        var dropdown = document.createElement("select")
        dropdown.setAttribute("style", "width: 20%")

        //stackedDiv.append(dropdown)

        
        card.append(movieImg)

        var addButton = document.createElement("button")
        addButton.textContent = "Add to selected watchlist"
        addButton.setAttribute("class", "button is-rounded ml-2")
        addButton.setAttribute("style", "width: 20%")
       // stackedDiv.append(addButton)

        newTitle.append(hr)
        stackedDiv.append(newTitle, newDescription, addButton, dropdown)
        cardDiv.append(movieImg)
        card.append(cardDiv, stackedDiv)
        //console.log(movieData);
        movieData.append(card)
        //Can edit CSS of movie cards when they are created here. Replace "style" with "class" or "id", and padding with the classes or ids you want to add
        // card.setAttribute("style", "padding:15px")
    }
}


function fetchSpecificMovie() {
    var userInput = inputBox.value.trim()
    //console.log(userInput);
    fetch('https://api.themoviedb.org/3/search/movie?query=' + userInput + '&api_key=91ce5d26720f6e04f0cc120d15c7cd71')
        .then(response => response.json())
        .then(function (moviebData) {
            console.log(moviebData);
            generateMovieCards(moviebData.results)
            //generateCard(movieData.results);
        })
}


//var button = document.addEventListener("click", fetchSpecificMovie)

// KEEP THIS STARTING NOW

function findMovie(searchInput) {
  var omdbUrl = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + searchInput;
  fetch(omdbUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    //console.log(data.Title, data.Plot, data.Genre, data.Poster)   
      //need to make this a loop
      
      //for (var x = 0; x < 10; x++) {
        
    omdDataTitle = data.Title
      
    var card = document.createElement("div")
    card.setAttribute("class", "column is-full card is-horizontal")

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

    title.textContent = omdDataTitle + " (" + data.Year + ")"
    director.textContent = "Director: " + data.Director
    poster.setAttribute("src", data.Poster)
    description.textContent = "Overview: " + data.Plot
    genres.textContent = "Genres: " + data.Genre
    rating.textContent = "Rating: " + data.Rated

    var addButton = document.createElement("button")
        addButton.textContent = "Add to selected watchlist"
        addButton.setAttribute("class", "button is-rounded ml-2")
        addButton.setAttribute("style", "width: 20%")

        var dropdown = document.createElement("select")
        dropdown.setAttribute("style", "width: 20%")

    title.append(hr)
    stackedDiv.append(title, genres, description, addButton, dropdown)
    cardDiv.append(poster)
    card.append(cardDiv, stackedDiv)
    movieData.append(card)
      
} ) }
    
    searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    var searchInput = inputBox.value.trim();
     findMovie(searchInput);
    fetchSpecificMovie(searchInput);
   
})
// END OF KEEP THIS