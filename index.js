const searchInput = document.getElementById("searchMovie").value
main();

function saveId() {
  localStorage.setItem("id", searchInput);
  window.location.href = `${window.location.origin}/search.html`
  console.log('worked')
}

