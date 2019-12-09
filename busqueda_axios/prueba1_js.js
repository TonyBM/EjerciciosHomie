

function search_axios() {
  var movie = document.getElementById("movie-name").value;
  var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
  movie = ""
  axios.get(queryURL, {
    responseType: 'json'
  })
    .then(function (movieData) {
      if (movieData.status == 200) {
        clearSearch();
        displayResult(movieData);
      }
    })
    .catch(function (err) {
      console.log(err);
    })
    .then(function () {
    });
}
function displayResult(movieData) {
  if (movieData.data.Response == "True") {
    displayInfo(movieData);
  }
  else {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "Película no encontrada"
  }
}
function displayInfo(movieData) {
  const table = document.getElementById("movies");
  row = table.insertRow(-1);
  title = row.insertCell(0);
  year = row.insertCell(1);
  director = row.insertCell(2);
  title.innerHTML = movieData.data.Title;
  year.innerHTML = movieData.data.Year;
  director.innerHTML = movieData.data.Director;
}
function clearSearch() {
  const table = document.getElementById("movies");
  var errorMessage = document.getElementById("error-message");
  errorMessage.innerHTML = ""
  table.innerHTML = "<th> <td>Title</td> <td>Year</td> <td>Director</td> </th>";

}