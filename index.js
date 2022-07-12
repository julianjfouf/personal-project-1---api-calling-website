var searchInput = document.getElementById("searchMovie")

function saveId() {
  localStorage.setItem("id", searchInput.value);
  window.location.href = `${window.location.origin}/search.html`
}