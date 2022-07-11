function onSearchChange(event) {
  console.log(event.target.value);
}

const id = localStorage.getItem(event);

async function getId() {
    const movieListEl = document.querySelector('.movie__list');
    const movies = await fetch(`https://omdbapi.com/?i=tt3896198&apikey=86637aa7&s=guardians`);
    const moviesData = await movies.json();

    movieListEl.innerHTML = moviesData.Search.map((movie) =>
        `<li class="movie__links">
        <img
          class="movie__img"
          src="${movie.Poster}"
          alt=""
        />
        <h4 class="movie__title">${movie.Title}</h4>
        <p class="movie__rating">${movie.Year}</p>
      </li>`).join('');
}



function saveId(input) {
  localStorage.setItem('id', input);
  document.querySelector(' .searchId').innerHTML = `${input}`
  console.log(input);
}

getId();