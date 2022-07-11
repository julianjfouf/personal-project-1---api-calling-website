async function main() {
  const id = localStorage.getItem("id");
  const movie = await fetch(
    `https://omdbapi.com/?i=tt3896198&apikey=86637aa7&s=${id}`
  );
  const movieData = await movie.json();
  console.log(movieData);

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

main();
