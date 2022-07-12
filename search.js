const movieListEl = document.querySelector(".movie__list")
var searchInput = document.getElementById("searchMovie")

async function main() {
  const input = localStorage.getItem("id");
  document.querySelector('.spinner').classList += " movies__loading"
  const movie = await fetch(
    `https://omdbapi.com/?i=tt3896198&apikey=86637aa7&s=${input}`
  );
  const movieData = await movie.json();
  document.querySelector('.spinner').classList.remove("movies__loading")
  movieListEl.innerHTML = movieData.Search.map(movies =>
  `<li class="movie__links">
        <img
          class="movie__img"
          src="${movies.Poster}"
          alt=""
        />
        <h4 class="movie__title">${movies.Title}</h4>
        <p class="movie__rating">${movies.Year}</p>
      </li>`).join('');
}

async function searchResults() {
  const input = localStorage.getItem("id");
  console.log(input);
  document.querySelector(" .searchId").innerHTML =
  `${input}`
}

function saveId() {
  localStorage.setItem("id", searchInput.value);
  window.location.href = `${window.location.origin}/search.html`
}

searchResults();
main();