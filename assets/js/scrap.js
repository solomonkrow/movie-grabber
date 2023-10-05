function generateCard() {
    for (let i = 0; i < 10; i++) {
  
  var card = document.createElement("div");
  card.setAttribute("class", "column is-full card is-horizontal my-2");

  var cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card-image");

  var poster = document.createElement("img");

  var stackedDiv = document.createElement("div");
  stackedDiv.setAttribute("class", "card-stacked");

  var title = document.createElement("h3");

  var newTitle = document.createElement("h3")
        newTitle.textContent = movieTitle

  var hr = document.createElement("hr");
  //var director = document.createElement("p");
  var description = document.createElement("p");

  var newDescription = document.createElement("p")
  newDescription.textContent = movieInfo  

  var genres = document.createElement("p");
  //var rating = document.createElement("p");

  var dropdown = document.createElement("select")
        card.append(dropdown)

       var movieImg = document.createElement("img")
        movieImg.setAttribute("src","https://image.tmdb.org/t/p/original/"+ moviePoster)

  //holden code
  movieTitle = movieData[i].title
  movieInfo = movieData[i].overview
  moviePoster = movieData[i].poster_path


  title.textContent = data.Title ;//+ " (" + data.Year + ")"
  //director.textContent = "Director: " + data.Director;
  //poster.setAttribute("src", data.Poster);
  description.textContent = "Overview: " + omdData.Plot;
  genres.textContent = "Genres: " + omdData.Genre;
  //rating.textContent = "Rating: " + data.Rated;

  title.append(hr);
  stackedDiv.append(title, genres, description);
  cardDiv.append(poster);
  card.append(cardDiv, stackedDiv);
  movieInfo.appendChild(card);

  card.append(newTitle);
  stackedDiv.append(newDescription);
  cardDiv.append(movieImg)

  var addButton = document.createElement("button")
  addButton.textContent = "Add to selected watchlist"
  addButton.setAttribute("class", "button is-rounded ml-2")
  card.append(addButton)
  card.setAttribute("style", "padding:15px")
}
}