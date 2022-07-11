const movieListEl = document.querySelector(".movie__list");

async function main() {
    const movies = await fetch(`https://omdbapi.com/?i=tt3896198&apikey=86637aa7&s=guardians`);
    const moviesData = await movies.json();

    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join('');
}

function movieHTML(movie) {
  return `<li class="movie__links">
        <img
          class="movie__img"
          src="${movie.Poster}"
          alt=""
        />
        <h4 class="movie__title">${movie.Title}</h4>
        <p class="movie__rating">${movie.Year}</p>
      </li>`
}

main();



function saveId(id) {
  localStorage.setItem("id", id);
  window.location.href = `${window.location.origin}/search.html`
}