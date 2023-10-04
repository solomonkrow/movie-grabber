function generateCard() {
    for (let i = 0; i < 10; i++) {
  
  var card = document.createElement("div");
  card.setAttribute("class", "column is-full");
  var div2 = document.createElement("div");
  div2.setAttribute("class", "card is-horizontal");
  var cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card-image");
  var poster = document.createElement("img");
  var stackedDiv = document.createElement("div");
  stackedDiv.setAttribute("class", "card-stacked");
  var title = document.createElement("h3");
  var hr = document.createElement("hr");
  var director = document.createElement("p");
  var description = document.createElement("p");
  var genres = document.createElement("p");
  var rating = document.createElement("p");

  //holden code
  movieTitle = data[i].title
  movieInfo = data[i].overview

  //title.textContent = data.Title + " (" + data.Year + ")";
  director.textContent = "Director: " + data.Director;
  //poster.setAttribute("src", data.Poster);
  description.textContent = "Overview: " + data.Plot;
  genres.textContent = "Genres: " + data.Genre;
  rating.textContent = "Rating: " + data.Rated;

  console.log(title);
  console.log(poster);
  console.log(description);
  console.log(genres);

  title.append(hr);
  stackedDiv.append(title, director, genres, rating, description);
  cardDiv.append(poster);
  div2.append(cardDiv);
  div2.append(stackedDiv);
  card.append(div2);
  movieInfo.appendChild(card);
}
}