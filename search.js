const movieListEl = document.querySelector(".movie__list");

async function main() {
  const id = localStorage.getItem("id");
  const movie = await fetch(
    `https://omdbapi.com/?i=tt3896198&apikey=86637aa7&s=${id}`
  );
  const movieData = await movie.json();
  console.log(movieData);

  movieListEl.innerHTML = movieData.Search.map(
    (movie) => `
  <li class="movie__links">
        <img
          class="movie__img"
          src="${movie.Poster}"
          alt=""
        />
        <h4 class="movie__title">${movie.Title}</h4>
        <p class="movie__rating">${movie.Year}</p>
      </li>`
  ).join("");
}

main();
