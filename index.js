const movieListEl = document.querySelector(".movie__list");

async function main() {
    const movies = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=86637aa7");
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("");
}

main();

function showMovieInfo(id) {
    localStorage.setItem("id", id);
}

function movieHTML(movie) {
    return `<li class="movie__links">
    <img
      class="movie__img"
      src="${movie.poster}"
      alt=""
    />
    <h4 class="movie__title">${movie.title}</h4>
    <p class="movie__rating">${movie.imdbRating}</p>
  </li>`
}