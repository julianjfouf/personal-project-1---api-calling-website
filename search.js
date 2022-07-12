const movieListEl = document.querySelector(".movie__list")
const searchInput = document.getElementById("searchMovie")

async function main() {
  const input = localStorage.getItem("id");
  const movie = await fetch(
    `https://omdbapi.com/?i=tt3896198&apikey=86637aa7&s=${input}`
  );
  const movieData = await movie.json();
  movieListEl.innerHTML =
  `<li class="movie__links">
        <img
          class="movie__img"
          src="${movieData.Poster}"
          alt=""
        />
        <h4 class="movie__title">${movieData.Title}</h4>
        <p class="movie__rating">${movieData.Year}</p>
      </li>`
}